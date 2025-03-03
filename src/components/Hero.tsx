
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Truckee Meadows Handyman</h1>
          <p className="text-lg text-gray-600">Professional Services with 5 Year Warranty</p>
          
          <div className="w-full max-w-md mx-auto mt-8">
            <Link to="/submit-job" className="block">
              <Button size="lg" className="w-full">Submit a Job Request</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
