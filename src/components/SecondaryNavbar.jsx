import { Filter, SortDesc } from 'lucide-react';

const SecondaryNavbar = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'plots-city', name: 'Plots By City' },
    { id: 'enquiry', name: '❓ Enquiry Now' },
    { id: 'site-visit', name: '📅 Book Free Site Visit' },
    { id: 'plots-projects', name: 'Plots By Projects' }
  ];

  return (
    <div className="bg-primary-dark shadow-md sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Secondary Navigation */}
          <div className="flex items-center space-x-6 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange && onSectionChange(section.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-primary-light'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Filter and Sort */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white hover:text-accent-orange transition-colors duration-200">
              <Filter size={18} />
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center space-x-2 text-white hover:text-accent-orange transition-colors duration-200">
              <SortDesc size={18} />
              <span className="hidden sm:inline">Sort By</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;