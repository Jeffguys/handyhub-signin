
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";

const Index = () => {
  // Add smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* About Company Section */}
        <section id="about" className="py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">About Our Company</h2>
              <div className="prose prose-lg mx-auto">
                <p className="text-muted-foreground mb-4">
                  Truckee Meadows Handyman has been serving the Reno/Sparks area with quality repair and maintenance services since 2010. Our team of skilled professionals is committed to providing exceptional workmanship and customer service.
                </p>
                <p className="text-muted-foreground mb-4">
                  We specialize in a wide range of home repair services, from minor fixes to major renovations. Our goal is to make your home maintenance experience as smooth and stress-free as possible.
                </p>
                <p className="text-muted-foreground">
                  Whether you need help with plumbing, electrical work, carpentry, or general repairs, you can count on us to deliver reliable and professional service every time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="py-20 bg-secondary">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 animate-blur-in">Why Choose Truckee Meadows Handyman?</h2>
              <p className="text-muted-foreground mb-12 animate-blur-in animation-delay-200">
                Truckee Meadows Metro Area Reno/Sparks. We provide professional, reliable and affordable handyman services throughout the Truckee Meadows area.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 rounded-xl animate-fade-in-up animation-delay-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Quality Workmanship</h3>
                  <p className="text-sm text-muted-foreground">
                    Our skilled professionals take pride in delivering high-quality work that meets your expectations.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl animate-fade-in-up animation-delay-400">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Fast Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We respond quickly to your requests and strive to provide timely service to address your needs.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-xl animate-fade-in-up animation-delay-600">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Affordable Rates</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer competitive pricing and transparent quotes with no hidden fees or surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section id="how-it-works" className="py-24 bg-background fancy-blur-bg">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-muted-foreground">
                Getting your repairs done is easy with our simple process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="text-center pt-10 px-4">
                  <h3 className="text-xl font-medium mb-4">Submit Your Request</h3>
                  <p className="text-muted-foreground">
                    Fill out our simple form with details about your project and upload photos of what needs to be fixed.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="text-center pt-10 px-4">
                  <h3 className="text-xl font-medium mb-4">Get a Quote</h3>
                  <p className="text-muted-foreground">
                    Our team will review your request and provide you with a detailed quote for the work needed.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div className="text-center pt-10 px-4">
                  <h3 className="text-xl font-medium mb-4">Schedule Service</h3>
                  <p className="text-muted-foreground">
                    Once you approve the quote, we'll schedule a convenient time to come and complete the work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <EmailForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
