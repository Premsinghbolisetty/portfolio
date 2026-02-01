import { Code } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "YOLO",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Matplotlib",
      ],
    },
    {
      title: "Web & Backend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Linux (Exposure)",
        "Streamlit",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-6 h-6 text-gray-400" />
          <h2 className="text-3xl font-light tracking-wide text-gray-900">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white p-8 rounded-sm border border-gray-200"
            >
              <h3 className="text-xl font-light text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-light border border-gray-200 rounded-sm hover:border-gray-400 transition-colors"
                  >
                    {skill}
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
