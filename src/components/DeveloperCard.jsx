import { Building, Calendar, MapPin } from 'lucide-react';
import developerLogos from '../assets/developer-logos.jpg';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="bg-white rounded-xl card-shadow hover:shadow-xl transition-all duration-300 overflow-hidden p-6 text-center border-2 border-gray-400">
      {/* Developer Logo */}
      <div className="bg-primary rounded-lg p-4 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
        <span className="text-white font-bold text-2xl">
          {developer.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
        </span>
      </div>

      {/* Developer Info */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{developer.name}</h3>
      
      <div className="flex items-center justify-center text-gray-600 mb-4">
        <MapPin size={16} className="mr-1" />
        <span className="text-sm">{developer.location}</span>
      </div>

      {/* Stats */}
      <div className="flex justify-center space-x-6 mb-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Calendar size={16} className="mr-1" />
          <span>Established: {developer.established}</span>
        </div>
        <div className="flex items-center">
          <Building size={16} className="mr-1" />
          <span>Total Projects: {developer.totalProjects}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors duration-200">
        View Projects
      </button>
    </div>
  );
};

export default DeveloperCard;