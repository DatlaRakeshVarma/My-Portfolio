
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Computer Science Student | Coder | Web Developer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm currently pursuing my Bachelor of Technology in Computer Science and Engineering 
                at Vignan's Institute Of Information Technology, Visakhapatnam. 
              </p>
              <p>
                My journey in tech began with a fascination for problem-solving and has evolved into a passion for 
                creating impactful web applications.
              </p>
              <p>
                With expertise in the MERN stack and strong problem solving skills, I've 
                completed over 600 coding problems across various platforms and built several 
                real-world applications that solve genuine problems.
              </p>
              <p>
                I believe in continuous learning and contributing to meaningful projects that 
                drive technological advancement while enhancing user experiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-2">600+</div>
              <div className="text-gray-300 text-sm">Coding Problems Solved In Various Platforms</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-2">3 Star</div>
              <div className="text-gray-300 text-sm">CodeChef</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-gray-300 text-sm">Major Projects</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-2xl font-bold text-blue-400 mb-2">2 Months</div>
              <div className="text-gray-300 text-sm">Intern Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
