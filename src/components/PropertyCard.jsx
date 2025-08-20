import { MapPin, Home, Calendar, Building } from 'lucide-react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl card-shadow hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in">
      {/* Property Image */}
      <div className="relative h-48 bg-gradient-to-r from-blue-400 to-green-400">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg px-2 py-1 text-xs font-semibold">
          Developed By
        </div>
        <div className="absolute top-8 left-4 text-xs text-gray-700 font-medium">
          {property.developer}
        </div>
        {property.status && (
          <div className="absolute top-4 right-4 bg-primary text-white rounded-lg px-2 py-1 text-xs font-semibold">
            {property.status}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Property Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Home size={16} className="mr-2 text-primary" />
            <div>
              <div className="font-semibold">{property.area}</div>
              <div className="text-xs">Project Area</div>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Building size={16} className="mr-2 text-primary" />
            <div>
              <div className="font-semibold">{property.type}</div>
              <div className="text-xs">Layout Type</div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Home size={16} className="mr-2 text-primary" />
            <div>
              <div className="font-semibold">{property.propertyType}</div>
              <div className="text-xs">Property Type</div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-primary" />
            <div>
              <div className="font-semibold">{property.details}</div>
              <div className="text-xs">{property.detailsType}</div>
            </div>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="bg-primary text-white rounded-lg px-3 py-2">
            <div className="text-xs">Price</div>
            <div className="font-semibold">{property.price}</div>
          </div>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;