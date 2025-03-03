
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">TM</span>
          </div>
          <span className="font-medium text-lg">Truckee Meadows Handyman</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#services" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            className={cn(
              "relative px-5 py-2.5 rounded-md text-sm font-medium transition-all",
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-primary hover:bg-white/90 shadow-sm"
            )}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
