import React, { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clientData = [
  { name: "TechFlow Solutions", logo: "TF", color: "from-blue-500 to-blue-600", description: "Leading provider of enterprise technology solutions and digital transformation services" },
  { name: "DataVault Inc", logo: "DV", color: "from-green-500 to-green-600", description: "Secure data storage and analytics platform for Fortune 500 companies" },
  { name: "InnovateLabs", logo: "IL", color: "from-purple-500 to-purple-600", description: "Research and development hub for cutting-edge software innovations" },
  { name: "FinSecure", logo: "FS", color: "from-orange-500 to-orange-600", description: "Financial technology security solutions and compliance management" },
  { name: "SmartAnalytics", logo: "SA", color: "from-red-500 to-red-600", description: "AI-powered business intelligence and predictive analytics platform" },
  { name: "ManufacturingPlus", logo: "MP", color: "from-indigo-500 to-indigo-600", description: "Industrial automation and smart manufacturing technology solutions" },
  { name: "CloudFirst Corp", logo: "CF", color: "from-teal-500 to-teal-600", description: "Cloud migration and infrastructure management services" },
  { name: "NextGen Systems", logo: "NG", color: "from-pink-500 to-pink-600", description: "Next-generation software development and system integration" },
  { name: "DigitalEdge Co", logo: "DE", color: "from-yellow-500 to-yellow-600", description: "Digital marketing and e-commerce platform development" },
  { name: "FutureTech Labs", logo: "FT", color: "from-cyan-500 to-cyan-600", description: "Emerging technology research and prototype development" },
  { name: "ScaleUp Solutions", logo: "SU", color: "from-emerald-500 to-emerald-600", description: "Scalable software architecture and performance optimization" },
  { name: "AgileWorks Inc", logo: "AW", color: "from-violet-500 to-violet-600", description: "Agile development methodology and project management consulting" },
  { name: "DataStream Pro", logo: "DS", color: "from-rose-500 to-rose-600", description: "Real-time data streaming and processing solutions" },
  { name: "TechVision Ltd", logo: "TV", color: "from-slate-500 to-slate-600", description: "Technology consulting and strategic planning services" },
  { name: "InnovateTech", logo: "IT", color: "from-amber-500 to-amber-600", description: "Innovative technology solutions for modern businesses" },
  { name: "SecureNet Corp", logo: "SN", color: "from-lime-500 to-lime-600", description: "Network security and cybersecurity infrastructure solutions" },
  { name: "CloudTech Solutions", logo: "CT", color: "from-sky-500 to-sky-600", description: "Comprehensive cloud computing and DevOps services" },
  { name: "DataFlow Systems", logo: "DF", color: "from-fuchsia-500 to-fuchsia-600", description: "Data pipeline and workflow automation solutions" },
];

const ClientLogosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [totalSections, setTotalSections] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  // Drag to scroll functionality
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      isDragging.current = true;
      slider.style.cursor = 'grabbing';
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      setIsPaused(true);
    };

    const onMouseLeave = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
      setIsPaused(false);
    };

    const onMouseUp = () => {
      isDragging.current = false;
      slider.style.cursor = 'grab';
      setIsPaused(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // Touch events for mobile
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      setIsPaused(true);
    };

    const onTouchEnd = () => {
      isDragging.current = false;
      setIsPaused(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);
    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchend", onTouchEnd);
    slider.addEventListener("touchmove", onTouchMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
      slider.removeEventListener("touchstart", onTouchStart);
      slider.removeEventListener("touchend", onTouchEnd);
      slider.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  // Calculate sections and track scroll position
  useEffect(() => {
    const updateSections = () => {
      const container = scrollRef.current;
      if (!container) return;

      const cardWidth = 256; // w-64 = 256px
      const gap = 24; // gap-6 = 24px
      const containerWidth = container.offsetWidth;
      const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));
      const totalCards = clientData.length;
      const sections = Math.ceil(totalCards / cardsPerView);
      setTotalSections(sections);
    };

    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const cardWidth = 256;
      const gap = 24;
      const scrollPosition = container.scrollLeft;
      const sectionWidth = (cardWidth + gap) * Math.floor(container.offsetWidth / (cardWidth + gap));
      const currentSec = Math.round(scrollPosition / sectionWidth);
      setCurrentSection(Math.min(currentSec, totalSections - 1));
    };

    updateSections();
    window.addEventListener('resize', updateSections);
    
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('resize', updateSections);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [totalSections]);

  // Auto scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      if (!isDragging.current && scrollRef.current) {
        const container = scrollRef.current;
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth - 1) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 220, behavior: "smooth" });
        }
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused]);

  // Navigate to specific section
  const navigateToSection = (sectionIndex: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 256;
    const gap = 24;
    const cardsPerView = Math.floor(container.offsetWidth / (cardWidth + gap));
    const targetScrollLeft = sectionIndex * cardsPerView * (cardWidth + gap);
    
    container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    setCurrentSection(sectionIndex);
  };

  const duplicatedClients = [...clientData, ...clientData];

  return (
    <section 
      ref={sectionRef}
      className={`py-16 lg:py-24 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Our Clients
          </h3>
          <div className={`w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 rounded-full transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} />
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            From startups to Fortune 500 companies, organizations worldwide choose MangosOrange 
            for their technology and talent needs.
          </p>
        </div>

        <div 
          className="relative overflow-hidden mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab select-none scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`relative flex-shrink-0 w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl group overflow-hidden ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${(index % 6) * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col items-center justify-center h-full p-4 relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${client.color} flex items-center justify-center text-white font-bold text-xl md:text-2xl mb-3 shadow-lg transform group-hover:scale-110 group-hover:blur-sm transition-all duration-300`}>
                    {client.logo}
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300 text-center leading-tight">
                    {client.name}
                  </h4>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ClientLogosSection;