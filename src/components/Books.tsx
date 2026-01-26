import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { currentlyReading, bookRecommendations, goodreadsLink } from '../data/portfolioData'
import { fetchBookCover, BookCoverResult } from '../utils/bookCovers'

const Books = () => {
  const recommendations = bookRecommendations
  const [currentlyReadingCover, setCurrentlyReadingCover] = useState<BookCoverResult | null>(null)
  const [recommendationCovers, setRecommendationCovers] = useState<Map<string, BookCoverResult>>(new Map())
  const [loading, setLoading] = useState(true)

  // Fetch covers when component mounts or data changes
  useEffect(() => {
    const loadCovers = async () => {
      setLoading(true)
      
      // Fetch currently reading cover
      const currentCover = await fetchBookCover(
        currentlyReading.title,
        currentlyReading.author
      )
      setCurrentlyReadingCover(currentCover)
      
      // Fetch recommendation covers
      const covers = new Map<string, BookCoverResult>()
      for (const book of recommendations) {
        const cover = await fetchBookCover(book.title, book.author)
        covers.set(book.title, cover)
      }
      setRecommendationCovers(covers)
      
      setLoading(false)
    }
    
    loadCovers()
  }, [currentlyReading.title, currentlyReading.author, recommendations])

  return (
    <section
      id="books"
      className="min-h-screen py-20 px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-white"
        >
          Books
        </motion.h2>

        {/* Currently Reading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Book Cover */}
            {loading ? (
              <div className="w-32 h-48 bg-gray-700 rounded-lg animate-pulse flex-shrink-0" />
            ) : currentlyReadingCover?.coverUrl ? (
              <a
                href={currentlyReadingCover.goodreadsUrl || `https://www.goodreads.com/search?q=${encodeURIComponent(`${currentlyReading.title} ${currentlyReading.author}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={currentlyReadingCover.coverUrl}
                  alt={`${currentlyReading.title} cover`}
                  className="w-32 h-48 object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    // Hide image if it fails to load
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </a>
            ) : null}
            
            {/* Book Info */}
            <div className="text-center md:text-left">
              <p className="text-xl text-white/80 mb-2">
                <span className="text-lime font-semibold">
                  Currently Reading:
                </span>
              </p>
              <p className="text-2xl font-serif font-bold mb-1 text-white">{currentlyReading.title}</p>
              <p className="text-lg text-white/60">by {currentlyReading.author}</p>
            </div>
          </div>
        </motion.div>

        {/* Top Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-serif font-bold mb-8 text-center text-white">
            My Top Book Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((book, index) => {
              const cover = recommendationCovers.get(book.title)
              return (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-lime/20 transition-all duration-300 hover:scale-105"
                >
                  {/* Book Cover */}
                  {loading ? (
                    <div className="w-full h-80 bg-gray-700 rounded-lg animate-pulse mb-4" />
                  ) : cover?.coverUrl ? (
                    <a
                      href={cover.goodreadsUrl || book.goodreadsUrl || `https://www.goodreads.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <img
                        src={cover.coverUrl}
                        alt={`${book.title} cover`}
                        className="w-full h-80 object-contain rounded-lg shadow-lg bg-gray-800/50"
                        onError={(e) => {
                          // Hide image if it fails to load
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </a>
                  ) : null}
                  
                  {/* Book Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-lime text-dark-bg rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                      #{book.rank}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-serif font-bold mb-1 text-white">{book.title}</h4>
                      <p className="text-white/60">by {book.author}</p>
                    </div>
                  </div>
                  
                  {/* Why I Like It */}
                  {book.whyILikeIt && (
                    <div className="pt-3 border-t border-white/10">
                      <p className="text-sm font-semibold text-cyan mb-2">Why I like it:</p>
                      <p className="text-sm text-white/80 leading-relaxed">{book.whyILikeIt}</p>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Goodreads Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={goodreadsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-dark transition-colors text-lg font-semibold hover:underline"
          >
            <span>Link to my Goodreads</span>
            <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Books
