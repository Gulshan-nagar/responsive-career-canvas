
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
      description: "This is a project built using the MERN stack. In this Expense Tracker app, users can add their income and expenses. The app calculates and displays the total balance. Built with MongoDB, Express, React, and Node.js for seamless tracking and management of personal finances.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["MongoDB", "Express", "React", "Node.js", "HTML", "CSS", "Tailwind", "JavaScript"],
      demo: "https://expense-tracker-vg8p.onrender.com"
    },
    {
      id: 2,
      title: "Calori-Scan",
      subtitle: "Scan your food calorie",
      description: "Winner of our Hackathon project – Calori-Scan helps users scan food items to track calories instantly. Built using modern web technologies and image recognition. A smart, health-focused solution to promote mindful eating and fitness tracking.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React", "Node", "Express", "MongoDB"],
      demo: "https://calori-scan-frontend.vercel.app/"
    },
    {
      id: 3,
      title: "JScript",
      subtitle: "Programming Language",
      description: "In this project, I developed a new language called JScript by combining JavaScript and Python. I used concepts like variables, functions, loops, conditionals, and arrays to create an interactive and user-friendly interface, blending the strengths of both languages.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "https://jscript-programming-language.netlify.app"
    },
    {
      id: 4,
      title: "Library Explorers",
      subtitle: "Library Management App",
      description: "This is our Construct Week project at Masai. We built a Library Management System where users can manage books and records. The project uses Firebase for backend services like authentication and database. Built with HTML, CSS, JavaScript, React and Firebase.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      demo: "https://library-explorers.netlify.app/"
    },
    {
      id: 5,
      title: "GitScout",
      subtitle: "Analyze GitHub Profiles",
      description: "Analyze GitHub profiles with advanced AI-based insights. Whether you're a recruiter or a student looking to improve your GitHub presence, GitScout offers intuitive tools for data-driven decision making.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
      technologies: ["React", "JavaScript", "Tailwind", "Python", "FastAPI", "Docker", "GitHub"],
      demo: "https://voluble-mooncake-8b0889.netlify.app/"
    },
    {
      id: 6,
      title: "Nike Clone",
      subtitle: "Shoes Website",
      description: "A responsive Nike website clone showcasing modern web design practices and e-commerce features.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      technologies: ["HTML", "CSS", "Bootstrap", "Netlify", "Figma"],
      demo: "https://super-seahorse-5a8ae8.netlify.app/"
    },
    {
      id: 7,
      title: "Diwali Project",
      subtitle: "Diwali Crackers Simulation",
      description: "This project demonstrates a virtual Diwali celebration with interactive fireworks and animations. It aims to bring the festive spirit online, allowing users to experience the joy of Diwali through a web-based simulation.",
      image: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d",
      technologies: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "Figma"],
      demo: "https://spiffy-selkie-49e7bb.netlify.app/"
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
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card overflow-hidden flex flex-col reveal ${index % 2 === 0 ? '' : 'md:mt-12'}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <h4 className="text-gray-600 mb-3">{project.subtitle}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-6 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-navy/10 text-navy text-sm px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-4 py-2 rounded hover:bg-teal hover:text-navy transition-colors flex items-center gap-2 flex-grow justify-center"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-navy text-navy px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors flex-grow text-center"
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
