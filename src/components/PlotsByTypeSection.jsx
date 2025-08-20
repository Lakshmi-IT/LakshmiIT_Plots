import { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';

const PlotsByTypeSection = () => {
  const [activeTab, setActiveTab] = useState('residential');

  const plotTypes = [
    { id: 'residential', name: 'Residential Plots', count: 150 },
    { id: 'commercial', name: 'Commercial Plots', count: 75 },
    { id: 'industrial', name: 'Industrial Plots', count: 45 },
    { id: 'agricultural', name: 'Agricultural Plots', count: 30 }
  ];

  const residentialPlots = [
    {
      id: 1,
      title: "Green Valley Residency",
      location: "Kompally, Hyderabad",
      developer: "Vertex Constructions",
      area: "25 Acres",
      type: "DTCP",
      propertyType: "Residential",
      details: "150 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "₹25 Lakhs",
      image: "residential-plot-1"
    },
    {
      id: 2,
      title: "Sunrise Garden Plots",
      location: "Medchal, Hyderabad",
      developer: "Golden Homes",
      area: "18 Acres",
      type: "HMDA",
      propertyType: "Residential",
      details: "200 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "₹35 Lakhs",
      image: "residential-plot-2"
    },
    {
      id: 3,
      title: "Royal Gardens",
      location: "Shamirpet, Hyderabad",
      developer: "Elite Developers",
      area: "30 Acres",
      type: "DTCP",
      propertyType: "Residential",
      details: "Available",
      detailsType: "Loan Facility",
      price: "₹28 Lakhs",
      image: "residential-plot-3"
    },
    {
      id: 4,
      title: "Paradise Hills",
      location: "Kandlakoya, Hyderabad",
      developer: "Prime Estates",
      area: "22 Acres",
      type: "HMDA",
      propertyType: "Residential",
      details: "180 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "₹32 Lakhs",
      image: "residential-plot-4"
    }
  ];

  const commercialPlots = [
    {
      id: 5,
      title: "Business Hub Central",
      location: "Gachibowli, Hyderabad",
      developer: "Commercial Ventures",
      area: "15 Acres",
      type: "HMDA",
      propertyType: "Commercial",
      details: "500 Sq.Yrd",
      detailsType: "Plot Size From",
      price: "₹85 Lakhs",
      image: "commercial-plot-1"
    },
    {
      id: 6,
      title: "Trade Center Plots",
      location: "Kondapur, Hyderabad",
      developer: "Metro Developers",
      area: "12 Acres",
      type: "DTCP",
      propertyType: "Commercial",
      details: "Available",
      detailsType: "Loan Facility",
      price: "₹75 Lakhs",
      image: "commercial-plot-2"
    }
  ];

  const getCurrentPlots = () => {
    switch (activeTab) {
      case 'residential':
        return residentialPlots;
      case 'commercial':
        return commercialPlots;
      default:
        return residentialPlots;
    }
  };

  return (
    <section id="plots-type" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            <span className="text-primary">🏘️ Plots By Type</span>
          </h2>

          {/* Plot Type Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {plotTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === type.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {type.name}
                <span className="ml-2 text-sm">({type.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getCurrentPlots().map((plot) => (
            <PropertyCard key={plot.id} property={plot} />
          ))}
        </div>

      
        <Link to={"/projects"}>
          <div className="text-center mt-12">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Load More Properties
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PlotsByTypeSection;