
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
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

  return (
    <section id="about" className="section-padding bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">About Me</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto reveal">
          <p className="text-lg mb-6">
            Dynamic and adept Full Stack Web Developer skilled in the MERN stack, coupled with strong problem solving and collaboration abilities. Proficient utilizing Generative AI for modern development techniques.
          </p>
          <p className="text-lg mb-6">
            Committed to staying ahead with the latest technologies and swiftly adapting to new tech stacks.
          </p>
          
          <div className="flex flex-wrap gap-3 mt-8">
            {['javascript', 'react.js', 'redux', 'node.js', 'express.js', 'mongoDB', 'mongoose', 'html', 'css', 'bootstrap', 'tailwind', 'git', 'github'].map((skill) => (
              <span key={skill} className="bg-teal/20 text-teal px-4 py-2 rounded-full text-sm">
                #{skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href="https://www.linkedin.com/in/gulshan-nagar-b9b847283" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Gulshan-nagar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
              GitHub
            </a>
            <a href="https://x.com/nag62534" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal transition-colors">
              Twitter
            </a>
            <a href="mailto:gulshannagar5525@gmail.com" className="text-white hover:text-teal transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
