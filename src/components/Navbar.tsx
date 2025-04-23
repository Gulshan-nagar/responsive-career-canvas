
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a nav link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Resume download handler
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/resume.pdf";
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "Your-Name-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-navy font-heading text-2xl font-bold">
          Portfolio<span className="text-teal">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-charcoal hover:text-teal transition-colors">
            Home
          </a>
          <a href="#about" className="text-charcoal hover:text-teal transition-colors">
            About
          </a>
          <a href="#skills" className="text-charcoal hover:text-teal transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-charcoal hover:text-teal transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-charcoal hover:text-teal transition-colors">
            Contact
          </a>
          <button
            onClick={handleDownloadResume}
            className="bg-navy text-white px-5 py-2 rounded hover:bg-teal hover:text-navy transition-colors"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X size={24} className="text-navy" />
          ) : (
            <Menu size={24} className="text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-charcoal hover:text-teal transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-charcoal hover:text-teal transition-colors"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-charcoal hover:text-teal transition-colors"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-charcoal hover:text-teal transition-colors"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-charcoal hover:text-teal transition-colors"
              onClick={closeMenu}
            >
              Contact
            </a>
            <button
              onClick={() => {
                handleDownloadResume();
                closeMenu();
              }}
              className="bg-navy text-white px-5 py-2 rounded hover:bg-teal hover:text-navy transition-colors w-full"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
