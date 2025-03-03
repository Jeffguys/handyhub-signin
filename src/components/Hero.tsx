
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MobileTransfer from '@/components/MobileTransfer';

const Hero = () => {
  // Debug log outside JSX
  console.log("Hero component rendering");
  
  return (
    <section className="relative py-12 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Truckee Meadows Handyman</h1>
            <p className="text-lg text-gray-600">Professional Services with 5 Year Warranty</p>
          </div>
          
          {/* Call to Action Button */}
          <div className="w-full max-w-md mx-auto">
            <Link to="/submit-job" className="block">
              <Button size="lg" className="w-full">Submit a Job Request</Button>
            </Link>
          </div>
          
          {/* Services Summary */}
          <div className="mt-8 p-6 border border-gray-200 rounded-lg shadow-sm bg-white max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Welcome to Truckee Meadows Handyman</h2>
            <p className="mb-4">Professional handyman services for all your needs</p>
            <Link to="/submit-job">
              <Button size="lg" className="mt-4">Submit a Job Request</Button>
            </Link>
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
