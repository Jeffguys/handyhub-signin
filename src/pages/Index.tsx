
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmailForm from "@/components/EmailForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="about" className="py-20 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Our Company</h2>
            <p className="text-muted-foreground mb-4 text-center">
              Truckee Meadows Handyman has been serving the Reno/Sparks area with quality repair and maintenance services since 2010.
            </p>
            <p className="text-muted-foreground mb-4 text-center">
              We specialize in a wide range of home repair services, from minor fixes to major renovations.
            </p>
          </div>
        </section>
        <EmailForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
