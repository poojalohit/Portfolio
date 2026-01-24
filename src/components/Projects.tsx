import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  category: 'Published Work' | 'Projects' | 'Case Studies' | 'Initiatives'
  description: string | JSX.Element
  link?: string
  linkText?: string
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Published Work')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['Published Work', 'Projects', 'Case Studies', 'Initiatives']

  const projects: Project[] = [
    {
      title: 'Machine Learning Algorithms',
      category: 'Published Work',
      description: 'Co-authored the paper: Analysis of Machine Learning Algorithms in Smart Manufacturing. IEEE published. Presented at ICRITO 2020.',
      link: 'https://ieeexplore.ieee.org/document/9198017/',
      linkText: 'Click here to access',
    },
    {
      title: 'Human-Computer Interaction',
      category: 'Published Work',
      description: 'Co-authored the chapter: Challenges in Human-Computer Interaction in the book "Industry 4.0 and Intelligent Business Analytics for Healthcare". Published by Nova Publishers. Feb 2022.',
      link: 'https://novapublishers.com/shop/industry-4-0-and-intelligent-business-analytics-for-healthcare/',
      linkText: 'Click here to access',
    },
    {
      title: 'Tableau Analysis: Dietary Patterns & Biometric Outcomes',
      category: 'Projects',
      description: (
        <div className="space-y-4">
          <div>
            <span className="font-semibold text-nyu-purple-light">🗂 Project Overview</span>
            <p className="mt-1">
              This interactive dashboard was designed for clinical nutritionists to identify correlations between patient lifestyle habits (Diet, Cooking Method, Workout Type) and key biometric health outcomes (BMI, Cholesterol, Sodium levels, and Metabolic Efficiency).
            </p>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">🎯 The Business Question</span>
            <p className="mt-1">
              How can we move beyond generic diet prescriptions to find specific combinations of cooking methods and activity levels that maximize caloric deficit while minimizing cardiovascular risk?
            </p>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">🛠 Tools & Techniques</span>
            <ul className="mt-1 space-y-1 list-disc list-inside">
              <li>Tool: Tableau Public</li>
              <li>Data Structure: Aggregated tabular lifestyle data</li>
              <li>Key Features: Linked Highlighting, Cross-Filtering, Parameter Actions</li>
              <li>Accessibility: Implemented Orange-Blue Diverging and Viridis color palettes to ensure full readability for color-blind users (Deuteranopia/Protanopia safe).</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">💡 Key Insights & Findings</span>
            <p className="mt-1">Through cross-tabulated analysis, three major patterns emerged that challenge standard dietary advice:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li><strong>The "Grill & Burn" Sweet Spot:</strong> Analysis reveals that a Grilled, Low-Carb diet offers the highest probability of maintaining an Ideal BMI while keeping cholesterol below average.</li>
              <li><strong>The Metabolic Threshold:</strong> Hydration efficiency is non-linear. Metabolic burn efficiency remains stagnant until patients cross a threshold of 3.0L per day.</li>
              <li><strong>Intensity over Duration:</strong> HIIT delivers the most consistent net caloric deficit compared to Strength training.</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">🚀 Conclusion</span>
            <p className="mt-1">
              To achieve optimal health outcomes, the data supports a protocol of Grilled Low-Carb nutrition combined with HIIT activity, supported by a strict &gt;3L daily hydration target.
            </p>
          </div>
        </div>
      ),
      link: 'https://public.tableau.com/views/DietaryPatternsBiometricOutcomes/Dashboard3?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    },
    {
      title: 'ReSKUe: An AI-Powered Platform to Reduce Retail Food Waste',
      category: 'Projects',
      description: (
        <div className="space-y-3">
          <p>
            In a 24-hour Product Management Case Competition, our team developed ReSKUe to combat the urgent issue of retail food waste.
          </p>
          <p>
            Our platform integrates with a store's existing inventory system to proactively identify fresh produce nearing its expiration date. It then empowers retailers with two simple choices: use our AI-powered tool to suggest optimal price markdowns for a quick sale, or seamlessly connect with a network of local donation partners to arrange for pickup.
          </p>
          <p>
            Ultimately, ReSKUe helps retailers recover lost revenue, significantly reduce waste, and build a more sustainable food system.
          </p>
        </div>
      ),
    },
    {
      title: 'Instagram Events',
      category: 'Projects',
      description: (
        <div>
          <p>Case study on Instagram Events feature. Detailed analysis available on Notion.</p>
        </div>
      ),
      link: 'https://available-ambert-6b8.notion.site/Case-Study-Insta-Events-2a8e3bcc284480e1831ed423f349bee0?source=copy_link',
      linkText: 'View Case Study',
    },
    {
      title: 'Economic Analysis: How AI and M&As are Forcing a New Business Model for Cybersecurity Vendors',
      category: 'Case Studies',
      description: (
        <div className="space-y-4">
          <p>
            Conducted an in-depth strategic analysis of the structural transformation within the US Cybersecurity Software industry, investigating how Artificial Intelligence is driving a market-wide shift from fragmented "best-of-breed" tools toward integrated "National Champion" platforms.
          </p>
          <div>
            <span className="font-semibold text-nyu-purple-light">Frameworks Applied:</span>
            <p className="mt-1">
              Leveraged PESTEL and Porter's Five Forces to analyze macro-environmental trends and industry rivalry, identifying a transition toward a protected oligopoly.
            </p>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">Case Study:</span>
            <p className="mt-1">
              Performed an internal business model analysis of Palo Alto Networks (PANW) using the Business Model Canvas and Resource-Based View to evaluate "platformization" as a survival strategy.
            </p>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">Key Insights:</span>
            <p className="mt-1">
              Identified critical structural vulnerabilities, including high supplier dependency on cloud compute/GPUs and technical debt from aggressive M&A.
            </p>
          </div>
          <div>
            <span className="font-semibold text-nyu-purple-light">Strategic Recommendations:</span>
            <p className="mt-1">
              Proposed six targeted initiatives to optimize resource disposal and long-term profitability.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Behind the Build with Pooja Lohit',
      category: 'Initiatives',
      description: (
        <div>
          <p>
            A weekly LinkedIn series called "Behind the Build", where I feature one founder's answer to a single, insightful question about their experience building from scratch.
          </p>
        </div>
      ),
      link: 'https://www.linkedin.com/in/pooja-lohit/',
      linkText: 'Link to my LinkedIn',
    },
  ]

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
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
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
                  ? 'bg-nyu-purple text-white shadow-lg shadow-nyu-purple/50'
                  : 'glass text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="glass-strong rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-nyu-purple/20 transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-nyu-purple-light">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {typeof project.description === 'string'
                    ? project.description
                    : 'Click to view details...'}
                </p>
                {project.link && (
                  <div className="mt-4 text-nyu-purple-light text-sm flex items-center gap-2">
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

              <h3 className="text-3xl font-bold mb-4 text-nyu-purple-light">
                {selectedProject.title}
              </h3>

              <div className="text-gray-300 space-y-4">
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
                  className="mt-6 inline-flex items-center gap-2 text-nyu-purple-light hover:text-nyu-purple transition-colors font-semibold"
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
