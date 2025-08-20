import { Users, Building2, Home, Shield, Eye, DollarSign, HeadphonesIcon, Zap, Award, Clock, CheckCircle, UserCheck } from 'lucide-react';

const FeaturesSection = () => {
  const features = {
    customers: [
      {
        icon: <HeadphonesIcon className="w-6 h-6" />,
        title: "Dedicated Support",
        description: "Our Dedicated Agents Help You From Site Visit to Registration"
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Genuine & Verified",
        description: "We Listed Out Only Verified Properties and Developers"
      },
      {
        icon: <Eye className="w-6 h-6" />,
        title: "Transparency",
        description: "Transparent in All Our Process: From Site Visit to Registration"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "No Broker Fee",
        description: "Save Money, Deal Directly"
      }
    ],
    agents: [
      {
        icon: <Award className="w-6 h-6" />,
        title: "Earn Lucrative Commissions",
        description: "Unlock a World of High Income Opportunities"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "No Efforts For Leads Generation",
        description: "We Will Generate, You Don't Worry"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Dedicated Team Support",
        description: "A Professional Team to Handle Initial Communications"
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Lifetime Free Subscription",
        description: "Access Platform Everyday Without Any Subscription Fees Ever"
      }
    ],
    developers: [
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Get Started for Free",
        description: "Free & Easy Developer Account Set Up"
      },
      {
        icon: <Home className="w-6 h-6" />,
        title: "Showcase Unlimited Properties",
        description: "List as Many as You Want For Free"
      },
      {
        icon: <UserCheck className="w-6 h-6" />,
        title: "Find New Opportunities",
        description: "Get Leads without Spending a Rupee"
      },
      {
        icon: <Award className="w-6 h-6" />,
        title: "Enjoy a Lifetime of Free Access",
        description: "No Subscription Fees Ever"
      }
    ]
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-primary">❤️ Why We Are</span>{' '}
            <span className="text-accent-orange">Best For</span>
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm">English</span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm">Telugu</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Customers */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
              Customers
            </h3>
            <div className="space-y-6">
              {features.customers.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                  <div className="bg-primary text-white p-2 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agents */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
              Agents
            </h3>
            <div className="space-y-6">
              {features.agents.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                  <div className="bg-primary text-white p-2 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Developers */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
              Developers
            </h3>
            <div className="space-y-6">
              {features.developers.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                  <div className="bg-primary text-white p-2 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors duration-200">
            Enquiry Now
          </button>
          <button className="bg-accent-orange hover:bg-accent-orange-light text-white px-8 py-3 rounded-lg transition-colors duration-200">
            Book Free Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;