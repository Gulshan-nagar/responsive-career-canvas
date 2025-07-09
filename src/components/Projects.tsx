import { ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  demo: string;
  github?: string;
}

const Projects = () => {
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Expense Tracker",
      subtitle: "Track your expense",
      description: "Track income and expenses using the MERN stack. Displays total balance for personal finance management.",
      image: "/expense tracker.png",
      technologies: ["MongoDB", "Express", "React", "Node.js", "HTML", "CSS", "Tailwind", "JavaScript"],
      demo: "https://expense-tracker-vg8p.onrender.com",
      github: "https://github.com/Gulshan-nagar/Expense-tracker"
    },
    {
      id: 2,
      title: "Calori-Scan",
      subtitle: "Scan your food calorie",
      description: "Scan food items to track calories instantly. Built with image recognition and modern web technologies.",
      image: "/CaloriScan.png",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node", "Express", "MongoDB"],
      demo: "https://calori-scan-frontend.vercel.app/",
      github: "https://github.com/TheApostle-07/CaloriScan"
    },
    {
      id: 3,
      title: "JScript",
      subtitle: "Programming Language",
      description: "A hybrid language combining JavaScript and Python with support for variables, loops, and functions.",
      image: "/JScript.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "https://jscript-programming-language.netlify.app",
      github: "https://github.com/Gulshan-nagar/jscript"
    },
    {
      id: 4,
      title: "Library Explorers",
      subtitle: "Library Management App",
      description: "A system to manage books and records. Built using React and Firebase during Masai's Construct Week.",
      image: "/Library Management System.png",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      demo: "https://library-explorers.netlify.app/",
      github: "https://github.com/imakash13/The_code_explorers"
    },
    {
      id: 5,
      title: "GitScout",
      subtitle: "Analyze GitHub Profiles",
      description: "AI-powered GitHub profile analyzer for recruiters and developers to gain insights.",
      image: "/GitScout.png",
      technologies: ["React", "JavaScript", "Tailwind", "Python", "FastAPI", "Docker", "GitHub"],
      demo: "https://voluble-mooncake-8b0889.netlify.app/",
      github: "https://github.com/TheApostle-07/gitscout"
    },
    {
      id: 6,
      title: "puma Clone",
      subtitle: "Shoes Website",
      description: "A modern, responsive e-commerce puma website clone.",
      image: "/puma Clone.png",
      technologies: ["HTML", "CSS", "Bootstrap", "Netlify"],
      demo: "https://pumaclonebygulshan.netlify.app/",
      github: "https://github.com/Gulshan-nagar/puma-clone"
    },
    {
      id: 7,
      title: "Diwali Project",
      subtitle: "Diwali Crackers Simulation",
      description: "Web-based Diwali celebration with interactive fireworks and animations.",
      image: "/Diwali Project.png",
      technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "Figma"],
      demo: "https://spiffy-selkie-49e7bb.netlify.app/",
      github: "https://github.com/Gulshan-nagar/Diwali_project"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 reveal">My Projects</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="project-card flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden reveal h-full">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <h4 className="text-gray-600 mb-2">{project.subtitle}</h4>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-navy/10 text-navy text-xs px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-4 py-2 rounded hover:bg-teal hover:text-navy transition-colors flex items-center gap-2 flex-grow justify-center text-sm"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-navy text-navy px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors flex-grow text-center text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
