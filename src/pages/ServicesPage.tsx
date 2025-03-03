
import React from 'react';
import { CheckCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Home Repairs",
    description: "We fix everything from minor repairs to major renovations.",
    features: [
      "Drywall repair and installation",
      "Door and window repair",
      "Bathroom and kitchen repairs",
      "Floor repair and installation"
    ]
  },
  {
    title: "Installation Services",
    description: "Professional installation for all your home needs.",
    features: [
      "TV mounting and setup",
      "Furniture assembly",
      "Shelving and cabinet installation",
      "Smart home device installation"
    ]
  },
  {
    title: "Maintenance",
    description: "Regular maintenance to keep your home in top shape.",
    features: [
      "Seasonal maintenance checks",
      "Gutter cleaning",
      "Pressure washing",
      "Deck and fence maintenance"
    ]
  }
];

const locations = [
  "Reno",
  "Sparks",
  "Hidden Valley",
  "South Meadows",
  "Spanish Springs",
  "Cold Springs",
  "Lemmon Valley",
  "Sun Valley",
  "Verdi",
  "Mogul"
];

const ServicesPage = () => {
  return (
    <div className="py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional handyman services for all your home improvement and repair needs.
          </p>
        </div>

        {/* Service Area Highlight */}
        <div className="mb-16 bg-orange-50 rounded-xl p-8 border border-orange-200 shadow-orange">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-orange-800 mb-3">Services In Truckee Meadows Metro Area Reno/Sparks</h2>
              <p className="text-orange-700 mb-4">
                We proudly serve the entire Truckee Meadows region, including Reno, Sparks, and surrounding communities.
                Our team is locally based and can quickly respond to service calls throughout the area.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white px-3 py-2 rounded-md text-orange-700 text-sm font-medium border border-orange-200 shadow-sm">
                    {location}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6 space-y-4">
                <h3 className="font-bold text-2xl">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a custom service?</h2>
          <p className="text-lg mb-6">
            We offer custom solutions for unique projects. Contact us to discuss your specific needs.
          </p>
          <Link to="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
