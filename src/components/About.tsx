import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <User className="w-6 h-6 text-gray-400" />
          <h2 className="text-3xl font-light tracking-wide text-gray-900">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p className="text-lg">
            I am <span className="text-gray-900 font-normal">Prem Singh Bolisetty</span>, a final-year
            engineering student with a strong passion for software development, machine learning,
            and building practical technology-driven solutions. I enjoy transforming ideas into
            clean, efficient, and user-focused applications.
          </p>

          <p className="text-lg">
            My academic journey and hands-on projects have given me a solid foundation in
            full-stack development, data-driven systems, and problem-solving. I value writing
            structured code, continuously improving my skills, and learning from real-world challenges.
          </p>

          <p className="text-lg">
            I am particularly interested in pursuing opportunities with Japanese companies, inspired
            by their emphasis on quality, discipline, teamwork, and continuous improvement
            (<span className="italic">Kaizen</span>). I strongly resonate with the Japanese work culture
            that values precision, dedication, and long-term growth.
          </p>

          <p className="text-lg">
            I am eager to contribute to innovative projects, collaborate in multicultural environments,
            and grow as a global engineer while delivering meaningful and reliable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
