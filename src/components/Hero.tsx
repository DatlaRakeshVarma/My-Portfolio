import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1iGJpXE1r0xYHiuYPZlYEZgNLgB0E5TZk/view?usp=sharing'; 
    link.download = 'Datla_Rakesh_Varma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="block text-gray-400 text-lg md:text-xl font-normal mb-2">Hello, I'm</span>
              Datla Rakesh Varma
            </h1>
            
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium">
              Full-Stack Developer & Problem Solver
            </h2>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Computer Science student passionate about building scalable web applications 
              and solving complex algorithmic challenges with expertise in MERN stack and C++.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:datla.rakeshvarma@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/datla-rakesh-varma-367b83258"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://github.com/DatlaRakeshVarma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
