// Utility function to fetch book covers from Google Books API
// This automatically fetches covers based on book title and author

export interface BookCoverResult {
  coverUrl: string | null
  thumbnailUrl: string | null
  goodreadsUrl: string | null
}

/**
 * Fetches book cover image URL from Google Books API
 * @param title - Book title
 * @param author - Book author (optional, improves search accuracy)
 * @returns Promise with cover URL or null if not found
 */
export async function fetchBookCover(
  title: string,
  author?: string
): Promise<BookCoverResult> {
  try {
    // Construct search query
    const query = author ? `intitle:${encodeURIComponent(title)}+inauthor:${encodeURIComponent(author)}` : `intitle:${encodeURIComponent(title)}`
    
    // Fetch from Google Books API
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=1`
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch book data')
    }
    
    const data = await response.json()
    
    if (data.items && data.items.length > 0) {
      const book = data.items[0]
      const volumeInfo = book.volumeInfo
      
      // Get the highest quality image available
      // Google Books API provides: thumbnail, small, medium, large, extraLarge
      // Enhance thumbnail URLs to get higher quality (replace zoom=1 with zoom=5)
      let coverUrl = volumeInfo.imageLinks?.extraLarge || 
                     volumeInfo.imageLinks?.large || 
                     volumeInfo.imageLinks?.medium || 
                     volumeInfo.imageLinks?.small ||
                     volumeInfo.imageLinks?.thumbnail ||
                     null
      
      // Enhance image quality by replacing zoom parameter if it's a thumbnail
      if (coverUrl && coverUrl.includes('zoom=')) {
        coverUrl = coverUrl.replace(/zoom=\d+/, 'zoom=5')
      } else if (coverUrl && coverUrl.includes('books.google.com')) {
        // For Google Books images, try to get higher quality
        coverUrl = coverUrl.replace('&edge=curl', '').replace('&edge=curl', '')
      }
      
      const thumbnailUrl = volumeInfo.imageLinks?.thumbnail || null
      
      // Construct Goodreads search URL
      const searchQuery = encodeURIComponent(`${title} ${author || ''}`.trim())
      const goodreadsUrl = `https://www.goodreads.com/search?q=${searchQuery}`
      
      return {
        coverUrl,
        thumbnailUrl,
        goodreadsUrl,
      }
    }
    
    // Fallback: construct Goodreads search URL even if book not found
    const searchQuery = encodeURIComponent(`${title} ${author || ''}`.trim())
    const goodreadsUrl = `https://www.goodreads.com/search?q=${searchQuery}`
    
    return { coverUrl: null, thumbnailUrl: null, goodreadsUrl }
  } catch (error) {
    console.error(`Error fetching cover for "${title}":`, error)
    // Construct Goodreads search URL even on error
    const searchQuery = encodeURIComponent(`${title} ${author || ''}`.trim())
    const goodreadsUrl = `https://www.goodreads.com/search?q=${searchQuery}`
    return { coverUrl: null, thumbnailUrl: null, goodreadsUrl }
  }
}

/**
 * Fetches multiple book covers in parallel
 */
export async function fetchBookCovers(
  books: Array<{ title: string; author?: string }>
): Promise<Map<string, BookCoverResult>> {
  const results = new Map<string, BookCoverResult>()
  
  // Fetch all covers in parallel
  const promises = books.map(async (book) => {
    const cover = await fetchBookCover(book.title, book.author)
    return { title: book.title, cover }
  })
  
  const fetchedCovers = await Promise.all(promises)
  
  fetchedCovers.forEach(({ title, cover }) => {
    results.set(title, cover)
  })
  
  return results
}
