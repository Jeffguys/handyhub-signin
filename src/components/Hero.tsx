
import { useState, useEffect } from 'react';
import { useDelayedAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle } from 'lucide-react';
import JobSubmission from '@/components/JobSubmission';

const Hero = () => {
  const isVisible = useDelayedAnimation(100);
  const isSubtitleVisible = useDelayedAnimation(600);
  const isButtonVisible = useDelayedAnimation(1000);
  const isLogoVisible = useDelayedAnimation(300);
  const isLeftTextVisible = useDelayedAnimation(400);
  const isRightTextVisible = useDelayedAnimation(500);
  const isChatbotVisible = useDelayedAnimation(200);
  
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-20 pb-20 fancy-blur-bg overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo with text on both sides - Modified for left alignment */}
          <div 
            className={`w-full flex flex-col md:flex-row items-start justify-start max-w-[800px] mx-auto mb-4 transition-all duration-700 ${
              isLogoVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Logo positioned on left */}
            <div className="flex flex-row items-center">
              <img
                src="/lovable-uploads/694b803a-91a0-433b-a00b-ea7d9d9144fc.png"
                alt="Truckee Meadows Handyman Logo"
                className="w-[150%] max-w-[200px] h-auto max-h-[170px] object-contain drop-shadow-2xl my-4 md:my-0"
              />
              
              {/* Left text - "Got Work?" - next to logo */}
              <div 
                className={`font-bold text-3xl md:text-4xl lg:text-5xl text-primary transition-all duration-700 hover:scale-105 ml-4 ${
                  isLeftTextVisible ? "opacity-100 md:translate-x-0" : "opacity-0 md:-translate-x-10"
                }`}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-600">
                  Got Work?
                </span>
              </div>
            </div>
            
            {/* Right text - "5 Year Warranty" - kept on right side */}
            <div 
              className={`font-bold text-3xl md:text-4xl lg:text-5xl text-primary transition-all duration-700 hover:scale-105 md:ml-auto ${
                isRightTextVisible ? "opacity-100 md:translate-x-0" : "opacity-0 md:translate-x-10"
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-primary">
                5 Year Warranty
              </span>
            </div>
          </div>
          
          {/* Chatbot Button - Positioned under logo */}
          <div 
            className={`transition-all duration-700 mb-4 self-start ${
              isChatbotVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button 
              size="lg"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-6 rounded-full shadow-lg"
            >
              <MessageCircle size={28} />
              <span className="font-bold text-lg">Ask our Chatbot</span>
            </Button>
          </div>
          
          {/* Job Submission Form */}
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
              <span className="block mt-2 font-bold text-primary">
                <strong>Licensed and Insured Locally</strong>
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
