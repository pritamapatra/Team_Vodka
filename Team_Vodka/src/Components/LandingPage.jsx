import React from 'react';
import { 
  Calendar, 
  Users, 
  Award, 
  MessageCircle, 
  Code, 
  Sparkles,
  Trophy,
  Star,
  ChevronRight
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    { 
      icon: <Users />, 
      title: "Mock Interviews", 
      description: "Practice with peers and get real-time feedback" 
    },
    { 
      icon: <Trophy />, 
      title: "Achievements", 
      description: "Track your progress and earn badges" 
    },
    { 
      icon: <MessageCircle />, 
      title: "Forums", 
      description: "Engage with the community and share knowledge" 
    },
    { 
      icon: <Code />, 
      title: "Code Reviews", 
      description: "Get expert feedback on your code" 
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      image: "/api/placeholder/64/64",
      content: "This platform helped me ace my technical interviews. The mock interviews were incredibly helpful!"
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      image: "/api/placeholder/64/64",
      content: "The community here is amazing. I've learned so much from other developers."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-blue-500">DevMentor</div>
            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white transition">Login</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Your Gateway to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {" "}Coding Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                Join a community of passionate developers. Learn, grow, and excel in your coding journey.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition group">
                  Explore Features
                  <ChevronRight className="group-hover:translate-x-1 transition" />
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Platform Preview" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Platform Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to succeed in your coding journey, all in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:transform hover:-translate-y-2 transition duration-300"
              >
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400">Mock Interviews</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-white mb-2">5,000+</div>
              <div className="text-gray-400">Teams Formed</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-white mb-2">15,000+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">What Our Community Says</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <p className="text-gray-400 mb-4">{testimonial.content}</p>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of developers who are already part of our community.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            © 2025 DevMentor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;