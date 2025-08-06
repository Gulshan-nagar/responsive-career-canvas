
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gulshanImage from "./gulshanPic3.png"; // Make sure the image is in the same folder

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1mrDXpANmp-HI2TVGTCyuLPrRP1oJ6MmB/view?usp=sharing";
    
    // Open in new tab
    window.open(resumeUrl, "_blank");
    
    // Create a download link for the PDF version
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1wEWX4Mc88QfSemj7SgBvRX5J1GAaST0o";
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Gulshan_Nagar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center section-padding pt-28"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div
            className={`md:w-1/2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-700`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-teal">Gulshan Nagar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-navy font-medium mb-6">
              MERN Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-md">
              Dynamic and adept Full Stack Web Developer skilled in the MERN stack,
              with strong problem solving abilities and expertise in modern
              development techniques.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-navy text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-teal hover:text-navy transition-colors"
              >
                View Projects <ArrowRight size={18} />
              </button>
              <button
                onClick={handleDownloadResume}
                className="border border-navy text-navy px-6 py-3 rounded-md hover:bg-navy hover:text-white transition-colors"
              >
                View Resume
              </button>
            </div>
          </div>
          <div
            className={`md:w-1/2 flex justify-center ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } transition-all duration-700 delay-300`}
          >
            <div className="relative">
              <div className="absolute -z-10 w-72 h-72 md:w-80 md:h-80 bg-teal/20 rounded-full -top-6 -left-6"></div>
              <img
                src={gulshanImage}
                alt="Gulshan Nagar"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
