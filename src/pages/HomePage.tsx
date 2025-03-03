
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
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                Professional Handyman Services in Truckee Meadows
              </h1>
              <p className="text-xl text-muted-foreground">
                Quality repairs, installations, and maintenance with a 5-year warranty
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/services">
                  <Button size="lg" className="w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/40 p-8 h-64 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 shadow-md">
                  <Wrench className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Info & Photo Upload Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-xl animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Get a Quick Quote
                </CardTitle>
                <CardDescription>
                  Tell us about your project and upload photos to receive a fast, accurate quote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="job-description" className="text-sm font-medium">
                      Job Description
                    </label>
                    <textarea 
                      id="job-description"
                      className="w-full min-h-24 p-3 border rounded-md bg-white"
                      placeholder="Describe what needs to be fixed or installed..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="job-location" className="text-sm font-medium">
                      Location
                    </label>
                    <input 
                      type="text"
                      id="job-location"
                      className="w-full p-3 border rounded-md bg-white"
                      placeholder="Where is the job located?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="job-timeline" className="text-sm font-medium">
                      Preferred Timeline
                    </label>
                    <select 
                      id="job-timeline"
                      className="w-full p-3 border rounded-md bg-white"
                    >
                      <option value="">Select timeline...</option>
                      <option value="urgent">Urgent (ASAP)</option>
                      <option value="1week">Within 1 week</option>
                      <option value="2weeks">Within 2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-xl animate-fade-in-up animation-delay-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-6 w-6 text-primary" />
                  Upload Photos
                </CardTitle>
                <CardDescription>
                  Add photos of the area or issue to help us assess your job more accurately
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:bg-primary/5 transition-colors cursor-pointer relative">
                  <input 
                    type="file" 
                    id="photo-upload" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    accept="image/*" 
                    multiple 
                    onChange={handlePhotoUpload}
                  />
                  <Upload className="h-12 w-12 text-primary/70 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Drag photos here or click to upload</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for JPG, PNG, HEIC (max 10MB each)
                  </p>
                </div>

                {previewUrls.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-medium">Uploaded Photos ({previewUrls.length})</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group aspect-square bg-secondary/30 rounded-md overflow-hidden">
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
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Home Repairs', 'Installation Services', 'Maintenance'].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl">{service}</h3>
                  <p className="text-muted-foreground">
                    Professional and reliable {service.toLowerCase()} services for your home or business.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">5-Year Warranty</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with an industry-leading 5-year warranty on all services.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Prompt Service</h3>
                <p className="text-muted-foreground">
                  We show up on time and complete jobs according to schedule with minimal disruption.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">Expert Craftsmen</h3>
                <p className="text-muted-foreground">
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
      <section className="py-16 bg-primary/10">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground">
              Contact us today for a free consultation and estimate on your project.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button size="lg">Contact Us Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
