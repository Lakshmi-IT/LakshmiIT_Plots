import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FolderKanban,
  LayoutGrid,
  Building2,
  RefreshCcw,
} from "lucide-react";

const SecondaryNavbar = () => {
  const location = useLocation(); // Get current path

  const sections = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderKanban },
    // { name: "Plots By Type", href: "/plots-type", icon: LayoutGrid },
    { name: "Developers", href: "/developers", icon: Building2 },
    { name: "Resale Plots", href: "/resale", icon: RefreshCcw },
  ];

  return (
    <div className="bg-primary-dark shadow-md sticky top-16 z-40 lg:block hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {sections.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-accent-orange text-white"
                        : "text-primary-foreground hover:text-accent-orange"
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
