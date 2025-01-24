import React, { useState } from 'react';
import { Calendar, Award, BookOpen, Users, MessageCircle, Bell, Search, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const [notifications, setNotifications] = useState(3);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Sample user data
  const userData = {
    name: "Alex Thompson",
    role: "Full Stack Developer",
    interviews: 24,
    badges: 15,
    mentorships: 8,
    bio: "Passionate developer focusing on React and Node.js. Always eager to learn and help others grow in their coding journey."
  };

  // Sample achievements data
  const achievements = [
    { category: "Web Development", badges: [
      { name: "React Master", color: "text-blue-400" },
      { name: "CSS Ninja", color: "text-purple-400" },
      { name: "API Expert", color: "text-green-400" }
    ]},
    { category: "Data Science", badges: [
      { name: "Python Pro", color: "text-yellow-400" },
      { name: "ML Beginner", color: "text-pink-400" }
    ]}
  ];

  // Sample events data
  const events = [
    { title: "Mock Interview: System Design", date: "2025-01-12", type: "interview" },
    { title: "Mentorship Session", date: "2025-01-13", type: "mentorship" },
    { title: "Team Project Meeting", date: "2025-01-14", type: "meeting" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CodeConnect
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <Calendar size={20} />
                <span>Schedule</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <MessageCircle size={20} />
                <span>Messages</span>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
              <Bell size={20} />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center space-x-2">
              <img 
                src="/api/placeholder/40/40" 
                alt="Profile" 
                className="h-8 w-8 rounded-full ring-2 ring-blue-500"
              />
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Profile Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2 bg-gray-800 rounded-xl p-6">
            <div className="flex items-start space-x-6">
              <img 
                src="/api/placeholder/120/120" 
                alt="Profile" 
                className="w-24 h-24 rounded-xl ring-4 ring-blue-500"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
                <p className="text-gray-400 mb-4">{userData.role}</p>
                <p className="text-gray-300">{userData.bio}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-2xl font-bold text-blue-400">{userData.interviews}</div>
                <div className="text-sm text-gray-400">Interviews</div>
              </div>
              <div className="text-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-2xl font-bold text-purple-400">{userData.badges}</div>
                <div className="text-sm text-gray-400">Badges</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((category, idx) => (
              <div key={idx} className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.badges.map((badge, badgeIdx) => (
                    <span 
                      key={badgeIdx}
                      className={`px-3 py-1 rounded-full bg-gray-600 ${badge.color} text-sm font-medium hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {badge.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events and Quick Links */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div 
                  key={idx}
                  className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <div className={`p-2 rounded-lg ${
                    event.type === 'interview' ? 'bg-blue-500/20 text-blue-400' :
                    event.type === 'mentorship' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    <Calendar size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-gray-400">{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="space-y-4">
              <button className="w-full p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Calendar size={20} />
                <span>Book Interview</span>
              </button>
              <button className="w-full p-4 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Users size={20} />
                <span>Join Mentorship</span>
              </button>
              <button className="w-full p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <MessageCircle size={20} />
                <span>Forums</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;