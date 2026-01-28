import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { currentlyReading, bookRecommendations, goodreadsLink } from '../data/portfolioData'

const Books = () => {
  const recommendations = bookRecommendations

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
          className="text-4xl md:text-5xl font-light mb-16 text-center text-text-primary"
        >
          Books
        </motion.h2>

        {/* Currently Reading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="glass-strong rounded-2xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Book Info */}
            <div className="text-center md:text-left">
              <p className="text-xl text-text-secondary mb-2">
                <span className="text-accent-gold font-light">
                  Currently Reading:
                </span>
              </p>
              <p className="text-2xl font-light mb-1 text-text-primary">{currentlyReading.title}</p>
              <p className="text-lg text-text-muted">by {currentlyReading.author}</p>
            </div>
          </div>
        </motion.div>

        {/* Top Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-light mb-8 text-center text-text-primary">
            My Top Book Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {recommendations.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent-blue/20 transition-all duration-300 hover:scale-105 focus-ring"
              >
                {/* Book Cover */}
                {book.coverUrl && (
                  <a
                    href={book.goodreadsUrl || `https://www.goodreads.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img
                      src={book.coverUrl}
                      alt={`${book.title} cover`}
                      className="w-full h-80 object-contain rounded-lg shadow-lg bg-surface/50"
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </a>
                )}
                
                {/* Book Info */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-accent-gold text-charcoal rounded-full w-10 h-10 flex items-center justify-center font-light shadow-lg flex-shrink-0">
                    #{book.rank}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-light mb-1 text-text-primary">{book.title}</h4>
                    <p className="text-text-muted">by {book.author}</p>
                  </div>
                </div>
                
                {/* Why I Like It */}
                {book.whyILikeIt && (
                  <div className="pt-3 border-t border-surface-light/20">
                    <p className="text-sm font-light text-accent-blue mb-2">Why I like it:</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{book.whyILikeIt}</p>
                  </div>
                )}
              </motion.div>
            ))}
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
            className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-hover transition-colors text-lg font-light hover:underline focus-ring"
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
