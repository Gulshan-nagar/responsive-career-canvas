
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';

const GithubStats = () => {
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

    // Load GitHub calendar script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js';
    document.head.appendChild(script);

    // Load GitHub calendar CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css';
    document.head.appendChild(link);

    // Initialize GitHub calendar when the script is loaded
    script.onload = () => {
      // @ts-ignore - GitHub calendar is loaded from external script
      if (typeof GitHubCalendar !== 'undefined') {
        // @ts-ignore
        GitHubCalendar(".github-calendar", "Gulshan-nagar", { responsive: true });
      }
    };

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="github-stats" className="section-padding bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 reveal">GitHub Statistics</h2>
          <div className="w-20 h-1 bg-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-white shadow-md reveal">
            <h3 className="text-navy text-xl font-bold mb-4">GitHub Stats</h3>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=Gulshan-nagar&show_icons=true&theme=default"
                alt="GitHub Stats"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </Card>

          <Card className="p-6 bg-white shadow-md reveal">
            <h3 className="text-navy text-xl font-bold mb-4">Most Used Languages</h3>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gulshan-nagar&layout=compact&theme=default"
                alt="Most Used Languages"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-white shadow-md reveal">
          <h3 className="text-navy text-xl font-bold mb-4">Contribution Calendar</h3>
          <div className="github-calendar w-full">Loading GitHub calendar data...</div>
        </Card>
      </div>
    </section>
  );
};

export default GithubStats;
