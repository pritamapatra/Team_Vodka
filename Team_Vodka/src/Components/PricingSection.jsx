import React from 'react';

const PricingSection = () => {
  return (
    <div className="bg-black py-16 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Safely collect, process, and share your data with the plan that's right for you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-gray-50 mb-4 inline-block">
            <span className="text-2xl text-pritam-400 font-bold">₹0</span> / month
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Free</h3>
          <p className="text-gray-400 mb-4">
            Explore the product and power small, personal projects.
          </p>
          <ul className="text-left text-gray-400 mb-6">
            <li className="flex items-center mb-2">
              <span className="mr-2">500 Encrypts</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">500 Decrypts</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">250 Cage Runs</span>
            </li>
          </ul>
          <button className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-colors">
            Get Started
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-gray-50 mb-4 inline-block">
            <span className="text-2xl text-pritam-400 font-bold">₹395</span> / month
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Pro</h3>
          <p className="text-gray-400 mb-4">
            Run production apps with full functionality.
          </p>
          <ul className="text-left text-gray-400 mb-6">
            <li className="flex items-center mb-2">
              <span className="mr-2">Unlimited Encrypts</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">5,000 Decrypts</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">2,500 Cage Runs</span>
            </li>
          </ul>
          <button className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-colors">
            Start Free Trial
          </button>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="text-gray-50 mb-4 inline-block">
            <span className="text-2xl text-pritam-400 font-bold">Custom</span> Pricing
          </div>
          <h3 className="text-2xl font-semibold text-white mb-3">Enterprise</h3>
          <p className="text-gray-400 mb-4">
            Run compliant production apps with full functionality, onboarding and support.
          </p>
          <ul className="text-left text-gray-400 mb-6">
            <li className="flex items-center mb-2">
              <span className="mr-2">Unlimited Encrypts</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">Custom Decrypts</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">Custom Cage Runs</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="mr-2">Fast-tracked PCI & HIPAA</span>
            </li>
          </ul>
          <button className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;