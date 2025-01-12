import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Users, Award, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [counters, setCounters] = useState({ interviews: 0, teams: 0 });
  
  // Animate counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        interviews: prev.interviews < 10000 ? prev.interviews + 100 : prev.interviews,
        teams: prev.teams < 5000 ? prev.teams + 50 : prev.teams
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CodeConnect
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Join Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Your Gateway to Coding
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect with fellow developers, practice interviews, and build amazing projects together.
          </p>
          <button className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-transform hover:scale-105">
            Explore Features
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Calendar className="w-12 h-12 mb-4 text-blue-400" />, title: "Schedule Mock Interviews" },
              { icon: <Users className="w-12 h-12 mb-4 text-purple-400" />, title: "Team Formation" },
              { icon: <MessageCircle className="w-12 h-12 mb-4 text-green-400" />, title: "Community Forums" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="p-8 bg-gray-800 rounded-xl">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {counters.interviews.toLocaleString()}+
              </div>
              <div className="text-gray-400">Mock Interviews Completed</div>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {counters.teams.toLocaleString()}+
              </div>
              <div className="text-gray-400">Teams Formed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-transform hover:scale-105 font-semibold">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-gray-400">Building the future of collaborative coding.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">FAQ</h3>
            <p className="text-gray-400">Find answers to common questions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Get in touch with our team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;