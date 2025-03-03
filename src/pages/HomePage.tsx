
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Wrench, Clock, Award, Camera, Upload, FileText } from 'lucide-react';
import EmailForm from '@/components/EmailForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const [jobPhotos, setJobPhotos] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newFiles = Array.from(files);
    setJobPhotos([...jobPhotos, ...newFiles]);
    
    // Create preview URLs
    const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with gradient background */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-orange-900">
                Professional Handyman Services in Truckee Meadows
              </h1>
              <p className="text-xl text-orange-800 font-medium">
                Services in Truckee Meadows Metro Area Reno/Sparks/Incline
              </p>
              <p className="text-xl text-orange-800">
                Quality repairs, installations, and maintenance with a 5-year warranty
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-orange-600 text-orange-600 hover:bg-orange-50">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl animate-fade-in transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-400/20 to-orange-500/30 p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/02fd53e8-11af-4e01-9238-4eb50ef3cf3d.png" 
                  alt="Truckee Meadows Handyman Logo" 
                  className="w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Info & Photo Upload Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100 relative">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-card animate-fade-in-up border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <FileText className="h-6 w-6 text-orange-500" />
                  Get a Quick Quote
                </CardTitle>
                <CardDescription className="text-orange-600">
                  Tell us about your project and upload photos to receive a fast, accurate quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="job-description" className="text-sm font-medium text-orange-800">
                      Job Description
                    </label>
                    <textarea 
                      id="job-description"
                      className="w-full min-h-24 p-3 border border-orange-200 rounded-md bg-white focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Describe what needs to be fixed or installed..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="job-location" className="text-sm font-medium text-orange-800">
                      Location
                    </label>
                    <input 
                      type="text"
                      id="job-location"
                      className="w-full p-3 border border-orange-200 rounded-md bg-white focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Where is the job located?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="job-timeline" className="text-sm font-medium text-orange-800">
                      Preferred Timeline
                    </label>
                    <select 
                      id="job-timeline"
                      className="w-full p-3 border border-orange-200 rounded-md bg-white focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select timeline...</option>
                      <option value="urgent">Urgent (ASAP)</option>
                      <option value="1week">Within 1 week</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 shadow-lg">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="glass-card animate-fade-in-up animation-delay-200 border-orange-200 shadow-orange">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <Camera className="h-6 w-6 text-orange-500" />
                  Upload Photos
                </CardTitle>
                <CardDescription className="text-orange-600">
                  Add photos of the area or issue to help us assess your job more accurately
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-8 text-center hover:bg-orange-50 transition-colors cursor-pointer relative">
                  <input 
                    type="file" 
                    id="photo-upload" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    accept="image/*" 
                    multiple 
                    onChange={handlePhotoUpload}
                  />
                  <Upload className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2 text-orange-800">Drag photos here or click to upload</h3>
                  <p className="text-sm text-orange-600">
                    Support for JPG, PNG, HEIC (max 10MB each)
                  </p>
                </div>

                {previewUrls.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-medium text-orange-800">Uploaded Photos ({previewUrls.length})</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group aspect-square bg-orange-100 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all">
                          <img 
                            src={url} 
                            alt={`Uploaded job photo ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button variant="destructive" size="sm" className="text-xs">Remove</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full filter blur-3xl opacity-40 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-200 rounded-full filter blur-3xl opacity-40 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Home Repairs', 'Installation Services', 'Maintenance'].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-orange-50 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 border border-orange-100">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                    <Check className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-xl text-orange-800">{service}</h3>
                  <p className="text-orange-700">
                    Professional and reliable {service.toLowerCase()} services for your home or business.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-orange-400 text-orange-600 hover:bg-orange-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl">5-Year Warranty</h3>
                <p className="text-white/80">
                  We stand behind our work with an industry-leading 5-year warranty on all services.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl">Prompt Service</h3>
                <p className="text-white/80">
                  We show up on time and complete jobs according to schedule with minimal disruption.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl">Expert Craftsmen</h3>
                <p className="text-white/80">
                  Our team consists of skilled professionals with years of experience in their trades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <EmailForm />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-orange-100 to-orange-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-orange-900">Ready to get started?</h2>
            <p className="text-lg text-orange-800">
              Contact us today for a free consultation and estimate on your project.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all">
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
