import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import { projectsData, projectCategories } from '../data/portfolioData'

interface Project {
  title: string
  category: 'Published Work' | 'Projects' | 'Initiatives'
  description: string | JSX.Element
  link?: string
  linkText?: string
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Published Work')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = projectCategories

  // Convert data file projects to component format
  const projects: Project[] = projectsData.map(proj => {
    let description: string | JSX.Element
    
    if (typeof proj.description === 'string') {
      description = proj.description
    } else {
      // Call the function to get JSX element
      description = proj.description()
    }
    
    return {
      title: proj.title,
      category: proj.category,
      description,
      link: proj.link,
      linkText: proj.linkText,
    }
  })

  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  )

  return (
    <section
      id="projects"
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
          Projects
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-lime text-dark-bg shadow-lg shadow-lime/50'
                  : 'glass text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className={filteredProjects.length < 3 
          ? 'flex flex-wrap justify-center gap-6' 
          : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        }>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`glass-strong rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-lime/20 transition-all duration-300 hover:scale-105 ${
                  filteredProjects.length < 3 ? 'w-full max-w-md' : ''
                }`}
              >
                <h3 className="text-xl font-serif font-bold mb-3 text-lime">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-3">
                  {typeof project.description === 'string'
                    ? project.description
                    : 'Click to view details...'}
                </p>
                {project.link && (
                  <div className="mt-4 text-cyan text-sm flex items-center gap-2">
                    <FaExternalLinkAlt className="text-xs" />
                    <span>View Project</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-2xl p-8 max-w-3xl max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-2xl" />
              </button>

              <h3 className="text-3xl font-serif font-bold mb-4 text-lime">
                {selectedProject.title}
              </h3>

              <div className="text-white/80 space-y-4">
                {typeof selectedProject.description === 'string' ? (
                  <p>{selectedProject.description}</p>
                ) : (
                  selectedProject.description
                )}
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-cyan hover:text-cyan-dark transition-colors font-semibold"
                >
                  <FaExternalLinkAlt />
                  <span>{selectedProject.linkText || 'View Project'}</span>
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
