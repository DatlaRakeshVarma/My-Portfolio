
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 md:p-12 border border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                I'm always interested in new opportunities, challenging projects, and 
                collaborating with like-minded developers. Whether you have a project in mind 
                or just want to connect, feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a
                href="mailto:datla.rakeshvarma@gmail.com"
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300 border border-gray-600"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300 text-sm">datla.rakeshvarma@gmail.com</p>
              </a>

              <a
                href="https://www.linkedin.com/in/datla-rakesh-varma-367b83258"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300 border border-gray-600"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
                <p className="text-gray-300 text-sm">Connect with me</p>
              </a>

              <a
                href="https://github.com/DatlaRakeshVarma"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300 border border-gray-600"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">GitHub</h4>
                <p className="text-gray-300 text-sm">@DatlaRakeshVarma</p>
              </a>
            </div>

            <div className="text-center">
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <h4 className="text-white font-semibold">Location</h4>
                </div>
                <p className="text-gray-300">Visakhapatnam, India</p>
                <p className="text-gray-400 text-sm mt-2">Open to remote opportunities worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2025 Datla Rakesh Varma. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
