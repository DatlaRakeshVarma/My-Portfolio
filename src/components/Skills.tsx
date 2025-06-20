
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Next.js", level: 75 },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git/GitHub", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Deployment", level: 90 },
        { name: "Problem Solving", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A versatile set of technical skills built through hands-on experience in competitive programming, DSA and full-stack projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
