import { Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Founder Scholarship Recipient',
      organization: 'SRM University',
      description: 'Awarded the Founder Scholarship for outstanding performance in the SRMJEEE entrance examination.',
      year: '2022',
    },
    {
      title: 'Active Member – Environmental Club',
      organization: 'SRM University AP',
      description: 'Actively contributed to environmental awareness initiatives and sustainability-driven activities organized by the college Environmental Club.',
      year: '2022 – Present',
    },
    {
      title: 'Frontend Development Intern',
      organization: 'InternPe',
      description: 'Completed a frontend development internship focusing on building responsive user interfaces using HTML, CSS, and JavaScript, with hands-on project experience.',
      year: '2022',
    },
    {
      title: 'MongoDB Node.js Developer Certification',
      organization: 'MongoDB University (SmartBridge)',
      description: 'Certified in the MongoDB Node.js Developer Path through SmartBridge, with hands-on experience in building and integrating MongoDB-based applications using Node.js.',
      year: '2025',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-6 h-6 text-gray-400" />
          <h2 className="text-3xl font-light tracking-wide text-gray-900">Achievements</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-sm border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-light text-gray-900">{achievement.title}</h3>
                <span className="text-sm font-light text-gray-500 whitespace-nowrap ml-4">{achievement.year}</span>
              </div>
              <p className="text-sm font-light text-gray-500 mb-4">{achievement.organization}</p>
              <div className="w-12 h-px bg-gray-300 my-4"></div>
              <p className="text-gray-600 font-light leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
