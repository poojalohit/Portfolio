/**
 * Script to fetch currently reading book from Goodreads RSS feed
 * and update the portfolio data
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const GOODREADS_USER_ID = '118553692';
const RSS_URL = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=currently-reading`;

function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function parseBookFromRSS(xml) {
  // Extract first item from RSS feed
  const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/);
  if (!itemMatch) {
    return null;
  }
  
  const item = itemMatch[1];
  
  // Extract title - handle both plain and CDATA formats
  let title = null;
  const titleCDataMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
  const titlePlainMatch = item.match(/<title>([^<]+)<\/title>/);
  if (titleCDataMatch) {
    title = titleCDataMatch[1].trim();
  } else if (titlePlainMatch) {
    title = titlePlainMatch[1].trim();
  }
  
  if (title) {
    // Remove series info like "(Series Name, #1)"
    title = title.replace(/\s*\([^)]*#\d+[^)]*\)\s*$/, '').trim();
  }
  
  // Extract author
  const authorMatch = item.match(/<author_name>([^<]+)<\/author_name>/);
  const author = authorMatch ? authorMatch[1].trim() : null;
  
  // Extract book cover image - try multiple patterns
  let coverUrl = null;
  
  // Try book_large_image_url first (highest quality) - handle CDATA
  const largeImageMatch = item.match(/<book_large_image_url><!\[CDATA\[(.*?)\]\]><\/book_large_image_url>/);
  if (largeImageMatch && largeImageMatch[1]) {
    coverUrl = largeImageMatch[1].trim();
  }
  
  // Fallback to book_image_url with CDATA
  if (!coverUrl) {
    const imageMatch = item.match(/<book_image_url><!\[CDATA\[(.*?)\]\]><\/book_image_url>/);
    if (imageMatch && imageMatch[1]) {
      coverUrl = imageMatch[1].trim();
    }
  }
  
  // Fallback to image in description
  if (!coverUrl) {
    const descMatch = item.match(/<description>[\s\S]*?<!\[CDATA\[([\s\S]*?)\]\]>[\s\S]*?<\/description>/);
    if (descMatch) {
      const imgMatch = descMatch[1].match(/src="([^"]+)"/);
      if (imgMatch) {
        coverUrl = imgMatch[1];
      }
    }
  }
  
  // Upgrade cover URL to larger size if it's a Goodreads image
  if (coverUrl && coverUrl.includes('gr-assets.com')) {
    // Replace small/medium image indicators with large
    // Convert _SY75_ or _SX98_ or _SY475_ to a larger size
    coverUrl = coverUrl.replace(/\._S[XY]\d+_\./, '.');
  }
  
  // Extract ISBN for Open Library fallback
  const isbnMatch = item.match(/<isbn>([^<]+)<\/isbn>/);
  const isbn = isbnMatch ? isbnMatch[1].trim() : null;
  
  // Extract book_id for Goodreads link
  const bookIdMatch = item.match(/<book_id>([^<]+)<\/book_id>/);
  const bookId = bookIdMatch ? bookIdMatch[1].trim() : null;
  
  if (!title || !author) {
    return null;
  }
  
  return {
    title,
    author,
    coverUrl,
    isbn,
    bookId,
    goodreadsUrl: bookId ? `https://www.goodreads.com/book/show/${bookId}` : null
  };
}

function updatePortfolioData(book) {
  const dataFilePath = path.join(__dirname, '..', 'src', 'data', 'portfolioData.tsx');
  let content = fs.readFileSync(dataFilePath, 'utf8');
  
  // Build the new currentlyReading object
  const coverLine = book.coverUrl ? `\n  coverUrl: '${book.coverUrl}',` : '';
  const goodreadsLine = book.goodreadsUrl ? `\n  goodreadsUrl: '${book.goodreadsUrl}',` : '';
  
  const newCurrentlyReading = `export const currentlyReading = {
  title: '${book.title.replace(/'/g, "\\'")}',
  author: '${book.author.replace(/'/g, "\\'")}',${coverLine}${goodreadsLine}
}`;
  
  // Replace the existing currentlyReading export
  const regex = /export const currentlyReading = \{[\s\S]*?\n\}/;
  
  if (regex.test(content)) {
    content = content.replace(regex, newCurrentlyReading);
    fs.writeFileSync(dataFilePath, content, 'utf8');
    console.log(`✓ Updated currently reading to: "${book.title}" by ${book.author}`);
    return true;
  } else {
    console.error('Could not find currentlyReading export in portfolioData.tsx');
    return false;
  }
}

async function main() {
  try {
    console.log('Fetching Goodreads RSS feed...');
    const xml = await fetchRSS(RSS_URL);
    
    console.log('Parsing book data...');
    const book = parseBookFromRSS(xml);
    
    if (!book) {
      console.log('No book currently being read, or could not parse RSS feed.');
      process.exit(0);
    }
    
    console.log(`Found: "${book.title}" by ${book.author}`);
    if (book.coverUrl) {
      console.log(`Cover URL: ${book.coverUrl}`);
    }
    
    const updated = updatePortfolioData(book);
    
    if (updated) {
      console.log('Portfolio data updated successfully!');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
