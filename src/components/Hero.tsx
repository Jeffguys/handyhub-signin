
import { useState, useEffect } from 'react';
import { useDelayedAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import JobSubmission from '@/components/JobSubmission';

const Hero = () => {
  const isVisible = useDelayedAnimation(100);
  const isSubtitleVisible = useDelayedAnimation(600);
  const isButtonVisible = useDelayedAnimation(1000);
  const isLogoVisible = useDelayedAnimation(300);
  
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-20 fancy-blur-bg overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo with text on both sides */}
          <div 
            className={`w-full flex items-center justify-center gap-4 md:gap-8 max-w-[800px] mx-auto mb-4 transition-all duration-700 ${
              isLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Left text - "Got Work?" */}
            <div className="font-bold text-xl md:text-2xl lg:text-3xl text-black">
              Got Work?
            </div>
            
            {/* Logo in center */}
            <img
              src="/lovable-uploads/694b803a-91a0-433b-a00b-ea7d9d9144fc.png"
              alt="Truckee Meadows Handyman Logo"
              className="w-full h-auto max-h-[180px] object-contain drop-shadow-2xl"
            />
            
            {/* Right text - "5 Year Warranty" */}
            <div className="font-bold text-xl md:text-2xl lg:text-3xl text-black">
              5 Year Warranty
            </div>
          </div>
          
          {/* Job Submission Form - Moved closer to logo */}
          <div className="w-full mt-2">
            <JobSubmission />
          </div>
          
          <div className="space-y-4 max-w-3xl">
            <div className="inline-block">
              <span 
                className={`inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium transition-all ${
                  isVisible ? "opacity-100" : "opacity-0 translate-y-4"
                }`}
              >
                Professional Handyman Services
              </span>
            </div>
            
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              Get Your Home Repairs Done 
              <span className="relative">
                <span className="relative z-10"> Right</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 z-0"></span>
              </span>
            </h1>
            
            <p 
              className={`mt-4 text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-300 ${
                isSubtitleVisible ? "opacity-100" : "opacity-0 translate-y-8"
              }`}
            >
              Truckee Meadows Metro Area Reno/Sparks. We provide professional, reliable and affordable handyman services throughout the Truckee Meadows area. Submit your job details above and we'll get back to you quickly.
            </p>
          </div>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto transition-all duration-700 delay-500 ${
              isButtonVisible ? "opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <Button 
              size="lg" 
              className="relative group overflow-hidden"
              onClick={() => {
                const formElement = document.getElementById('contact');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10">More Information</span>
              <span className="absolute inset-0 bg-primary-foreground/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <ChevronRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
