import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Star, 
  Users, 
  CheckCircle, 
  XCircle, 
  Play, 
  Book, 
  HelpCircle,
  Bell,
  LogOut,
  Menu,
  ChevronDown
} from 'lucide-react';

const MentorDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('today');

  // Sample data
  const mentorData = {
    name: "Dr. Sarah Chen",
    title: "AI and ML Expert",
    avatar: "/api/placeholder/150/150",
    bio: "AI and ML Expert with 10+ years of experience in deep learning and neural networks. Previously at Google AI and Stanford.",
    stats: {
      totalSessions: 156,
      avgRating: 4.9,
      status: "Available"
    }
  };

  const todaySessions = [
    { id: 1, time: "10:00 AM", student: "John Doe", topic: "Neural Networks", status: "Completed" },
    { id: 2, time: "2:00 PM", student: "Alice Smith", topic: "Deep Learning", status: "Upcoming" },
    { id: 3, time: "4:30 PM", student: "Bob Johnson", topic: "Machine Learning", status: "Upcoming" }
  ];

  const pendingRequests = [
    { id: 1, student: "Emma Wilson", topic: "AI Ethics", time: "Tomorrow, 11:00 AM" },
    { id: 2, student: "Mike Brown", topic: "Computer Vision", time: "Wed, 3:00 PM" }
  ];

  const feedback = [
    { id: 1, student: "David Lee", rating: 5, comment: "Excellent session! Clear explanations.", date: "2 days ago" },
    { id: 2, student: "Sarah Jones", rating: 5, comment: "Very knowledgeable and patient.", date: "1 week ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-blue-500 text-2xl font-bold">Mentor.io</span>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-4">
                  <a className="text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sessions</a>
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resources</a>
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Settings</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <Bell size={20} />
              </button>
              <div className="relative">
                <button 
                  className="flex items-center gap-2 text-sm text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={mentorData.avatar}
                    alt={mentorData.name}
                  />
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Mentor Overview */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-6">
            <img
              src={mentorData.avatar}
              alt={mentorData.name}
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">{mentorData.name}</h1>
              <p className="text-blue-400 mb-2">{mentorData.title}</p>
              <p className="text-gray-400 mb-4">{mentorData.bio}</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-1">Total Sessions</div>
                  <div className="text-white text-xl font-bold">{mentorData.stats.totalSessions}</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-1">Average Rating</div>
                  <div className="text-white text-xl font-bold flex items-center gap-1">
                    {mentorData.stats.avgRating}
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm mb-1">Status</div>
                  <div className="text-green-400 text-xl font-bold">{mentorData.stats.status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg flex items-center gap-3 transition duration-200">
            <Play size={24} />
            <span className="font-medium">Start Session</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg flex items-center gap-3 transition duration-200">
            <Book size={24} />
            <span className="font-medium">View Resources</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg flex items-center gap-3 transition duration-200">
            <HelpCircle size={24} />
            <span className="font-medium">Guidelines</span>
          </button>
        </div>

        {/* Today's Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Today's Schedule</h2>
            <div className="space-y-4">
              {todaySessions.map(session => (
                <div key={session.id} className="bg-gray-700/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-600 p-2 rounded-lg">
                      <Clock size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{session.student}</div>
                      <div className="text-gray-400 text-sm">{session.topic}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">{session.time}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      session.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Session Requests</h2>
            <div className="space-y-4">
              {pendingRequests.map(request => (
                <div key={request.id} className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <div className="text-white font-medium">{request.student}</div>
                    <div className="text-gray-400 text-sm">{request.time}</div>
                  </div>
                  <div className="text-gray-400 text-sm mb-3">{request.topic}</div>
                  <div className="flex gap-2">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition duration-200">
                      <CheckCircle size={16} />
                      Accept
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition duration-200">
                      <XCircle size={16} />
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Feedback */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feedback.map(item => (
              <div key={item.id} className="bg-gray-700/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <div className="text-white font-medium">{item.student}</div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{item.rating}.0</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-2">{item.comment}</p>
                <div className="text-gray-500 text-sm">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;