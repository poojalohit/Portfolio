import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { projectsData, projectCategories, type BehindTheBuildPost } from '../data/portfolioData'

interface Project {
  title: string
  category: 'Published Work' | 'Projects' | 'Initiatives'
  description: string | JSX.Element
  link?: string
  linkText?: string
  posts?: BehindTheBuildPost[]
  tags?: string[]
}

const getProjectTags = (title: string): string[] => {
  const tagMap: Record<string, string[]> = {
    'AI-First GTM Engineering': ['GTM', 'AI', 'Automation'],
    'Sentiment': ['Marketing', 'Data Science', 'ML'],
    'ReSKUe': ['Product', 'E-Commerce', 'Strategy'],
    'Economic Analysis': ['Economics', 'Finance', 'Research'],
    'Behind the Build': ['Product', 'Content', 'Strategy'],
    'Sharing Excess': ['Volunteering', 'Sustainability', 'Community'],
    'Machine Learning': ['Machine Learning', 'Digital Twins'],
    'Human-Computer Interaction': ['Human-Computer Interaction', 'UX'],
    'OptiSecure': ['NYU VIP', 'Security', 'Research'],
  }
  
  for (const [key, tags] of Object.entries(tagMap)) {
    if (title.toLowerCase().includes(key.toLowerCase())) {
      return tags
    }
  }
  
  if (title.toLowerCase().includes('economic') || title.toLowerCase().includes('finance')) {
    return ['Economics', 'Finance']
  }
  if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('automation')) {
    return ['AI', 'Automation']
  }
  
  return ['Project']
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Published Work')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = projectCategories
  
  // Custom order for Projects category
  const projectOrder: Record<string, number> = {
    'OptiSecure': 1,
    'AI-First GTM Engineering': 2,
    'Economic Analysis': 3,
    'Sentiment': 4,
    'ReSKUe': 5,
  }

  // Convert data file projects to component format
  const projects: Project[] = projectsData.map(proj => {
    let description: string | JSX.Element
    
    if (typeof proj.description === 'string') {
      description = proj.description
    } else {
      // Call the function to get JSX element
      description = proj.description()
    }
    
    // Construct PDF links with base URL if they're PDFs
    let link = proj.link
    if (proj.link && proj.link.startsWith('/pdfs/')) {
      // Remove leading slash and prepend BASE_URL
      link = `${import.meta.env.BASE_URL}pdfs/${proj.link.replace(/^\/pdfs\//, '')}`
    }
    
    return {
      title: proj.title,
      category: proj.category,
      description,
      link,
      linkText: proj.linkText,
      posts: proj.posts,
    }
  })

  const filteredProjects = projects
    .filter((p) => p.category === selectedCategory)
    .sort((a, b) => {
      const orderA = Object.entries(projectOrder).find(([key]) => a.title.includes(key))?.[1] || 99
      const orderB = Object.entries(projectOrder).find(([key]) => b.title.includes(key))?.[1] || 99
      return orderA - orderB
    })

  return (
    <section
      id="projects"
      className="py-20 px-6 relative bg-charcoal"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 border border-surface-light/20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-text-primary">
            Projects
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
className={`px-6 py-3 rounded-full font-light transition-all duration-300 focus-ring ${
                selectedCategory === category
                  ? 'bg-accent-gold text-charcoal shadow-lg shadow-accent-gold/30'
                  : 'bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary border border-surface-light/30'
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
                className={`bg-surface rounded-2xl p-6 cursor-pointer hover:bg-surface-elevated transition-all duration-300 group border border-accent-gold/20 hover:border-accent-gold/40 shadow-lg shadow-accent-gold/5 focus-ring ${
                  filteredProjects.length < 3 ? 'w-full max-w-md' : ''
                }`}
              >
                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {getProjectTags(project.title).map((tag) => (
                    <span
                      key={tag}
                      className="category-tag text-[10px] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-serif mb-3 text-text-primary group-hover:text-accent-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary text-sm line-clamp-3">
                      {typeof project.description === 'string'
                        ? project.description
                        : 'Click to view details...'}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-surface-light/50 flex items-center justify-center group-hover:bg-accent-gold group-hover:text-charcoal transition-all duration-300">
                    <FaArrowRight className="text-sm text-text-muted group-hover:text-charcoal transition-colors" />
                  </div>
                </div>
                
                {project.link && (
                  <div className="mt-4 pt-4 border-t border-surface-light/30 text-accent-blue text-sm flex items-center gap-2 group-hover:text-accent-gold transition-colors">
                    <FaExternalLinkAlt className="text-xs" />
                    <span>View Project</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
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
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors focus-ring"
                aria-label="Close"
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Tags in Modal */}
              <div className="flex flex-wrap gap-2 mb-4">
                {getProjectTags(selectedProject.title).map((tag) => (
                  <span key={tag} className="category-tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-3xl font-serif mb-4 text-text-primary">
                {selectedProject.title}
              </h3>

              <div className="text-text-secondary space-y-4">
                {typeof selectedProject.description === 'string' ? (
                  <p>{selectedProject.description}</p>
                ) : (
                  selectedProject.description
                )}
              </div>

              {selectedProject.posts && selectedProject.posts.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-light text-text-muted mb-4">
                    Click on any episode to view the full post on LinkedIn
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {selectedProject.posts.map((post) => (
                      <a
                        key={post.episode}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg overflow-hidden border border-border hover:border-accent-blue/50 transition-all hover:shadow-lg hover:shadow-accent-blue/20 focus-ring group"
                      >
                        <div className="aspect-[3/4] bg-surface-elevated relative overflow-hidden">
                          <img
                            src={`${import.meta.env.BASE_URL}${post.image}`}
                            alt={`Behind the Build Episode ${post.episode} - ${post.title}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = `https://placehold.co/300x400/1a1a2e/6366f1?text=Episode+${post.episode}`;
                              e.currentTarget.alt = `Episode ${post.episode} placeholder`;
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity">
                            {post.title}
                          </div>
                        </div>
                        <div className="p-2 bg-surface text-center">
                          <span className="text-xs text-accent-blue">Ep. {post.episode}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue-hover transition-colors font-light focus-ring"
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
