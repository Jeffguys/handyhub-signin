
import { Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header 
      className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm py-3 z-50"
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
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(255,153,0,0.5)] transition-all flex items-center gap-1"
          >
            <Building className="h-4 w-4" />
            <span>About Company</span>
          </a>
          <a 
            href="#services" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(255,153,0,0.5)] transition-all"
          >
            Services
          </a>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(255,153,0,0.5)] transition-all"
          >
            How It Works
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-muted-foreground hover:text-primary hover:shadow-[0_0_10px_rgba(255,153,0,0.5)] transition-all"
          >
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-primary border-primary hover:bg-primary/10"
          >
            Log In
          </Button>
          <Button 
            className="px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary/90"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
