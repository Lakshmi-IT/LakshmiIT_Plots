import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Plots By Type', href: '#plots-type' },
    { name: 'Developers', href: '#developers' },
    { name: 'Resale Plots', href: '#resale-plots' }
  ];

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/cf834ea0-909b-47c9-a44b-c15360050885.png" 
                alt="My Open Plots" 
                className="h-8 w-auto"
              />
              <div className="text-xl font-bold">
                <span className="text-accent-orange">My</span>{' '}
                <span className="text-accent-orange">Open</span>{' '}
                <span className="text-primary-foreground">Plots</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground hover:text-accent-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-primary-dark text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-light transition-colors duration-200">
              Agent Hiring
            </button>
            <button className="bg-accent-orange text-white px-4 py-2 rounded-lg hover:bg-accent-orange-light transition-colors duration-200">
              Post Project
            </button>
            <button className="bg-primary-dark text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-light transition-colors duration-200">
              Developer Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-accent-orange"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground hover:text-accent-orange block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <button className="bg-primary-dark text-primary-foreground px-4 py-2 rounded-lg">
                  Agent Hiring
                </button>
                <button className="bg-accent-orange text-white px-4 py-2 rounded-lg">
                  Post Project
                </button>
                <button className="bg-primary-dark text-primary-foreground px-4 py-2 rounded-lg">
                  Developer Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;