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
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
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
              <img
                src={currentlyReadingCover.coverUrl}
                alt={`${currentlyReading.title} cover`}
                className="w-32 h-48 object-cover rounded-lg shadow-lg flex-shrink-0"
                onError={(e) => {
                  // Hide image if it fails to load
                  e.currentTarget.style.display = 'none'
                }}
              />
            ) : null}
            
            {/* Book Info */}
            <div className="text-center md:text-left">
              <p className="text-xl text-gray-300 mb-2">
                <span className="text-nyu-purple-light font-semibold">
                  Currently Reading:
                </span>
              </p>
              <p className="text-2xl font-bold mb-1">{currentlyReading.title}</p>
              <p className="text-lg text-gray-400">by {currentlyReading.author}</p>
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
          <h3 className="text-3xl font-bold mb-8 text-center">
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
                  className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-nyu-purple/20 transition-all duration-300 hover:scale-105"
                >
                  {/* Book Cover */}
                  {loading ? (
                    <div className="w-full h-64 bg-gray-700 rounded-lg animate-pulse mb-4" />
                  ) : cover?.coverUrl ? (
                    <img
                      src={cover.coverUrl}
                      alt={`${book.title} cover`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  
                  {/* Book Info */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-nyu-purple text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                      #{book.rank}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1">{book.title}</h4>
                      <p className="text-gray-400">by {book.author}</p>
                    </div>
                  </div>
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
            className="inline-flex items-center gap-2 text-nyu-purple-light hover:text-nyu-purple transition-colors text-lg font-semibold hover:underline"
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
