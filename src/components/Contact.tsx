import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Mail className="w-6 h-6 text-gray-400" />
          <h2 className="text-3xl font-light tracking-wide text-gray-900">Get In Touch</h2>
        </div>
        <p className="text-lg font-light text-gray-600 mb-12 max-w-2xl mx-auto">
          I am actively seeking opportunities with Japanese companies.
          Feel free to reach out if you would like to discuss potential opportunities or collaborations.
        </p>
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="premsinghbolisetty@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="font-light">Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bolisetty-prem-singh-%E3%83%97%E3%83%AC%E3%83%A0-78414826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-light">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Premsinghbolisetty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-light">GitHub</span>
          </a>
        </div>
        <div className="w-24 h-px bg-gray-300 mx-auto my-12"></div>
        <p className="text-sm font-light text-gray-400">
          © 2026 Prem Singh Bolisetty.
        </p>
      </div>
    </section>
  );
}
