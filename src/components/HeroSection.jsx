import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-bg relative min-h-[600px] flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
          Now Find Your Dream Open Plot
        </h1>
        
        {/* Search bar */}
        <div className="bg-white rounded-lg shadow-lg p-2 flex items-center max-w-3xl mx-auto mb-12">
          <input
            type="text"
            placeholder="City / Area / Project / Developer"
            className="flex-1 px-4 py-3 text-gray-700 placeholder-gray-500 border-none outline-none rounded-l-lg"
          />
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200">
            <Search size={20} />
            Search Properties
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
            <div className="text-sm md:text-base">Properties</div>
            <div className="text-xs text-gray-200">Offering Verified Properties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm md:text-base">Developers</div>
            <div className="text-xs text-gray-200">Trusted & Verified Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
            <div className="text-sm md:text-base">Cities</div>
            <div className="text-xs text-gray-200">Wide Range of Cities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">10,000+</div>
            <div className="text-sm md:text-base">Customers</div>
            <div className="text-xs text-gray-200">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;