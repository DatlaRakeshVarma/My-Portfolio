
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hackathon Hub",
      description: "A centralized platform to aggregate and showcase hackathons from regional engineering colleges, offering detailed event info including registration links, deadlines, and schedules.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Node-cron"],
      features: [
        "Intuitive UI for hackathon discovery with search and filter functionality",
        "JWT-based admin authentication for submission approvals",
        "Node-cron for auto-updating event statuses in real time"
      ],
      liveUrl: "https://hackathon-hub-one.vercel.app/",
      githubUrl: "https://github.com/DatlaRakeshVarma/Hackathon-Hub",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Expense Tracker",
      description: "A comprehensive expense tracking application with intelligent categorization and detailed analytics to help users manage their finances effectively.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Chart.js", "JWT"],
      features: [
        "Real-time expense tracking and categorization",
        "Interactive charts and financial analytics",
        "Secure user authentication and export functionality"
      ],
      liveUrl: "https://expense-tracker-flow.vercel.app/",
      githubUrl: "https://github.com/DatlaRakeshVarma/Expense-Tracker",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "YT Video Summarizer",
      description: "An AI-powered web application that generates intelligent summaries of YouTube videos, enabling users to quickly extract key points, chapters, and tags from long-form content.",
      technologies: ["React", "TypeScript", "YouTube API", "Google Gemini", "Framer Motion"],
      features: [
        "AI-powered video summarization with multiple format options",
        "Integration with YouTube Data API v3 and Google Gemini 1.5",
        "Modern UI with smooth animations, user authentication and history tracking"
      ],
      liveUrl: "https://yt-video-summarizer-tool.vercel.app/",
      githubUrl: "https://github.com/DatlaRakeshVarma/YT-VideoSummarizer",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Driven by creativity and real-world impact, here are some of the standout projects I've built to solve meaningful problems and sharpen my development skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
