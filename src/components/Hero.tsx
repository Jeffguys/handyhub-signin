
import { useState, useEffect } from 'react';
import { useDelayedAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle } from 'lucide-react';
import MobileTransfer from '@/components/MobileTransfer';
import { Link } from 'react-router-dom';

const Hero = () => {
  console.log("Hero component starting to render"); // Debug log outside JSX
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Simple component for fallback
  const SimplifiedContent = () => (
    <div className="text-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-4">Welcome to Truckee Meadows Handyman</h2>
      <p className="mb-4">Professional handyman services for all your needs</p>
      <Link to="/submit-job">
        <Button size="lg" className="mt-4">Submit a Job Request</Button>
      </Link>
    </div>
  );
  
  useEffect(() => {
    console.log("Hero component mounted");
  }, []);
  
  // Log outside the JSX
  console.log("Hero section rendering");
  
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center py-12 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Simplified Logo Area */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Truckee Meadows Handyman</h1>
            <p className="text-lg text-gray-600">Professional Services with 5 Year Warranty</p>
          </div>
          
          {/* Simple Job Request Button */}
          <div className="w-full max-w-md mx-auto">
            <Link to="/submit-job" className="block">
              <Button size="lg" className="w-full">Submit a Job Request</Button>
            </Link>
          </div>
          
          {/* Simplified Content */}
          <div className="mt-8">
            <SimplifiedContent />
          </div>
          
          {/* QR Code */}
          <div className="mt-8 max-w-md mx-auto">
            <MobileTransfer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
