import { useState } from 'react';
import Navbar from '../components/Navbar';
import SecondaryNavbar from '../components/SecondaryNavbar';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import DeveloperCard from '../components/DeveloperCard';
import FeaturesSection from '../components/FeaturesSection';
import PlotsByTypeSection from '../components/PlotsByTypeSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('plots-city');

  const properties = [
    {
      id: 1,
      title: "Garnett Segment",
      location: "Yadadri",
      developer: "Jsr Suncity",
      area: "14 Acres",
      type: "DTCP",
      propertyType: "Residential",
      details: "P02000002101",
      detailsType: "Rera Number",
      price: "On Request",
      image: "residential-plot-1",
      status: null
    },
    {
      id: 2,
      title: "Landmark Agastya Pride",
      location: "Yadadri",
      developer: "Landmark Group",
      area: "100 Acres",
      type: "DTCP",
      propertyType: "Residential",
      details: "Loan Facility",
      detailsType: "Loan Facility",
      price: "On Request",
      image: "residential-plot-2"
    },
    {
      id: 3,
      title: "Sunrise Infra Nature Gold",
      location: "Shadnagar",
      developer: "Sunrise Infra",
      area: "5 Acres",
      type: "DTCP",
      propertyType: "Residential",
      details: "183 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "On Request",
      image: "commercial-plot-1"
    },
    {
      id: 4,
      title: "MP Hill Ridge",
      location: "Maheshwaram",
      developer: "MOP Infra Developers",
      area: "58 Acres",
      type: "DTCP",
      propertyType: "Residential",
      details: "12346",
      detailsType: "Rera Number",
      price: "On Request",
      image: "residential-plot-1",
      status: "Live Availability"
    }
  ];

  const developers = [
    {
      id: 1,
      name: "Suchir India",
      location: "Banjara Hills, Hyderabad",
      established: "2006",
      totalProjects: "15"
    },
    {
      id: 2,
      name: "Silpa Infratech",
      location: "Jubilee Hills, Hyderabad",
      established: "2010",
      totalProjects: "12"
    },
    {
      id: 3,
      name: "MOP Infra Developers",
      location: "Kothaguda, Hyderabad",
      established: "1997",
      totalProjects: "8"
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Iconic Infra Group RRR County",
      location: "Choutuppal, Chouthuppal",
      developer: "Iconic Infra Group",
      area: "85 Acres",
      type: "HMDA",
      propertyType: "Residential",
      details: "160 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "On Request",
      image: "hero-property"
    },
    {
      id: 2,
      title: "Suchirindia Giza Polis",
      location: "Kothur",
      developer: "Suchir India",
      area: "11 Acres",
      type: "HMDA",
      propertyType: "Residential",
      details: "Available",
      detailsType: "Loan Facility",
      price: "On Request",
      image: "residential-plot-2"
    },
    {
      id: 3,
      title: "Medha County",
      location: "Pedda Amberpet",
      developer: "Aduri Group",
      area: "101 Acres",
      type: "HMDA",
      propertyType: "Residential",
      details: "200 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "On Request",
      image: "commercial-plot-1"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar />
      <SecondaryNavbar activeSection={activeSection} onSectionChange={setActiveSection} /> */}
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Plots By Type Section */}
        <PlotsByTypeSection />

        {/* Featured Properties Section */}
        <section id="projects" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                <span className="text-primary">🏢 Featured</span>{' '}
                <span className="text-accent-orange">Properties</span>
              </h2>
              <div className="bg-primary text-white inline-block px-4 py-2 rounded-lg mb-8">
                Suchirindia Giza Polis
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

       

    
    
        {/* Features Section */}
        <FeaturesSection />

      
      </main>
    </div>
  );
};

export default Index;