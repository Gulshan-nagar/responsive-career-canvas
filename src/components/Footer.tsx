
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Portfolio<span className="text-teal">.</span>
            </h2>
            <p className="mt-2 text-gray-300">
              Building digital experiences that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-teal text-navy px-6 py-3 rounded flex items-center gap-2 hover:bg-white transition-colors"
            >
              Back to Top <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-teal transition-colors mr-6"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-teal transition-colors mr-6"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-teal transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
