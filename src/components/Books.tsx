import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Books = () => {
  const recommendations = [
    {
      rank: 1,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705594966i/23692271.jpg',
    },
    {
      rank: 2,
      title: 'Empire of Pain',
      author: 'Patrick Radden Keefe',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602088484i/52770198.jpg',
    },
    {
      rank: 3,
      title: 'Everybody Lies',
      author: 'Seth Stephens-Davidowitz',
      coverUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490807962i/34890015.jpg',
    },
  ]

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
          className="glass-strong rounded-2xl p-8 mb-12 text-center"
        >
          <p className="text-xl text-gray-300 mb-2">
            <span className="text-nyu-purple-light font-semibold">
              Currently Reading:
            </span>{' '}
            <span className="font-semibold">Orbital</span> by Samantha Harvey
          </p>
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
            {recommendations.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong rounded-2xl p-6 hover:shadow-2xl hover:shadow-nyu-purple/20 transition-all duration-300 hover:scale-105"
              >
                <div className="relative mb-4">
                  <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <img
                      src={book.coverUrl}
                      alt={`${book.title} cover`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-gray-400">
                            <div class="text-4xl mb-2">📚</div>
                            <div class="text-sm text-center px-4">${book.title}</div>
                          </div>`
                        }
                      }}
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-nyu-purple text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                    #{book.rank}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1">{book.title}</h4>
                <p className="text-gray-400">by {book.author}</p>
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
            href="https://www.goodreads.com/poojalohit"
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
