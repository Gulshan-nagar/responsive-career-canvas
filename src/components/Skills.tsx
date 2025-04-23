import React, { useEffect } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all reveal elements
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Replace with your actual skills
  const skills: Skill[] = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'frontend' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
  ];

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const tools = skills.filter(skill => skill.category === 'tools');

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 reveal">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>

        <div className="mb-16 reveal">
          <h3 className="text-2xl font-bold text-navy mb-6">Frontend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {frontendSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mb-4"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = 'https://via.placeholder.com/64?text=Icon+Not+Found'} // Fallback image
                />
                <span className="font-medium text-charcoal">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 reveal">
          <h3 className="text-2xl font-bold text-navy mb-6">Backend Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {backendSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mb-4"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = 'https://via.placeholder.com/64?text=Icon+Not+Found'} // Fallback image
                />
                <span className="font-medium text-charcoal">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-bold text-navy mb-6">Tools & Platforms</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {tools.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-16 h-16 mb-4"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = 'https://via.placeholder.com/64?text=Icon+Not+Found'} // Fallback image
                />
                <span className="font-medium text-charcoal">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
