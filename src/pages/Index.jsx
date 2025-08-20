import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import DeveloperCard from '../components/DeveloperCard';
import FeaturesSection from '../components/FeaturesSection';

const Index = () => {
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
      image: "/lovable-uploads/d295d007-5ef8-49dd-b4d6-19200360a44a.png",
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
      image: "/lovable-uploads/c1eff6c6-bcbd-4919-bd36-632c7cf154a5.png"
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
      image: "/lovable-uploads/c1eff6c6-bcbd-4919-bd36-632c7cf154a5.png"
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
      image: "/lovable-uploads/c1eff6c6-bcbd-4919-bd36-632c7cf154a5.png",
      status: "Live Availability"
    }
  ];

  const developers = [
    {
      id: 1,
      name: "Suchir India",
      location: "Banjara Hills, Hyderabad",
      established: "2006",
      totalProjects: "15",
      logo: "/lovable-uploads/50001e5c-3c7b-4b2b-a0c4-93aa313fffa3.png"
    },
    {
      id: 2,
      name: "Silpa Infratech",
      location: "Jubilee Hills, Hyderabad",
      established: "2010",
      totalProjects: "12",
      logo: "/lovable-uploads/50001e5c-3c7b-4b2b-a0c4-93aa313fffa3.png"
    },
    {
      id: 3,
      name: "MOP Infra Developers",
      location: "Kothaguda, Hyderabad",
      established: "1997",
      totalProjects: "8",
      logo: "/lovable-uploads/50001e5c-3c7b-4b2b-a0c4-93aa313fffa3.png"
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Iconic Infra Group RRR County",
      location: "Choutuppal, Choutuppal",
      developer: "Iconic Infra Group",
      area: "85 Acres",
      type: "HMDA",
      propertyType: "Residential",
      details: "160 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "On Request",
      image: "/lovable-uploads/cf834ea0-909b-47c9-a44b-c15360050885.png"
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
      image: "/lovable-uploads/cf834ea0-909b-47c9-a44b-c15360050885.png"
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
      image: "/lovable-uploads/cf834ea0-909b-47c9-a44b-c15360050885.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

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

        {/* Best Open Plot Ventures Section */}
        <section id="resale-plots" className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                🔍 Best Open Plot Ventures in Hyderabad
              </h2>
              <div className="text-lg mb-4">106 Results Found</div>
              
              {/* Filter Tabs */}
              <div className="flex justify-center space-x-4 mb-8">
                <button className="bg-white text-primary px-6 py-2 rounded-full">
                  Ongoing (100)
                </button>
                <button className="bg-primary-light text-white px-6 py-2 rounded-full">
                  Upcoming (0)
                </button>
                <button className="bg-primary-light text-white px-6 py-2 rounded-full">
                  Completed (6)
                </button>
              </div>

              {/* Search and Sort */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="px-4 py-2 rounded-lg text-gray-700 w-64"
                />
                <button className="bg-primary-dark text-white px-6 py-2 rounded-lg">
                  Search
                </button>
                <select className="px-4 py-2 rounded-lg text-gray-700">
                  <option>Sort By</option>
                </select>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        {/* Developers Section */}
        <section id="developers" className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                <span className="text-primary">🏛️ Best Open Plot Developers in Hyderabad</span>
              </h2>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search Company/Developer Name..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developers.map((developer) => (
                <DeveloperCard key={developer.id} developer={developer} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Action Buttons */}
        <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 flex justify-center space-x-4">
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Enquiry Now
          </button>
          <button className="bg-accent-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-orange-light transition-colors duration-200">
            Book Free Site Visit
          </button>
        </div>
      </main>
    </div>
  );
};

export default Index;