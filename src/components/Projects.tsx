import { Briefcase, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "undo-and-redo",
      description:
        "This project demonstrates how undo and redo operations work using a stack in C. When data is deleted, it is stored in a stack. The undo operation retrieves deleted data, and redo adds it back again.",
      technologies: ["C", "Data structures"],
      period: "2023",
      github: "https://github.com/Premsinghbolisetty/undo-and-redo",
      live: "",
    },
    {
      title: "red-black-tree",
      description:
        "This project uses a Red-Black Tree to store numbers and find a given number efficiently. It helps in understanding how balanced trees improve search performance compared to normal binary search trees.",
      technologies: ["C", "Data structures"],
      period: "2023",
      github: "https://github.com/Premsinghbolisetty/red-black-tree",
      live: "",
    },
    {
      title: "heart-disease-prediction",
      description:
        "This project predicts whether a person has heart disease using Python. It uses KNN and Decision Tree algorithms on a heart disease dataset from Kaggle to compare accuracy.",
      technologies: ["Python", "KNN", "Decision Tree", "Pandas"],
      period: "2024",
      github: "https://github.com/Premsinghbolisetty/heart-disease-prediction",
      live: "",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-gray-400" />
          <h2 className="text-3xl font-light tracking-wide text-gray-900">
            Projects
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-sm border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              {/* Title + Year + Links */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-light text-gray-900">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-light text-gray-500">
                    {project.period}
                  </span>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900"
                      title="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-gray-700 text-sm font-light border border-gray-300 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
