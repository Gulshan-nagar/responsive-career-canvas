
import { useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const Projects = () => {
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

  // Replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing features.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce.netlify.app"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app to manage tasks with features like drag-and-drop, priority levels, due dates, and team collaboration.",
      image: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://your-taskmanager.vercel.app"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A responsive dashboard that integrates with multiple social media APIs to display analytics and engagement metrics.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      technologies: ["React", "TypeScript", "ChartJS", "REST APIs"],
      github: "https://github.com/yourusername/socialdashboard",
      demo: "https://your-socialdashboard.netlify.app"
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "A comprehensive fitness app that allows users to track workouts, set goals, and visualize progress with customizable charts.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      technologies: ["React Native", "Express", "MongoDB", "D3.js"],
      github: "https://github.com/yourusername/fitnessapp",
      demo: "https://your-fitnessapp.vercel.app"
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 reveal">My Projects</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto reveal">
            Here are some of the projects I've worked on recently. Feel free to check out the code or view the live demos.
          </p>
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
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
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
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy text-white px-4 py-2 rounded hover:bg-teal hover:text-navy transition-colors flex-grow text-center"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-navy text-navy px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors flex-grow text-center"
                  >
                    Live Demo
                  </a>
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
