import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Star, ChevronDown, CheckCircle, MessageCircle } from 'lucide-react';

const InterviewBooking = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Sample data
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Scientist", "DevOps Engineer"];
  const difficulties = ["Entry Level", "Mid Level", "Senior Level"];
  const timeSlots = ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];
  
  const feedbackHistory = [
    {
      date: "Jan 8, 2025",
      interviewer: "Sarah Johnson",
      role: "Frontend Developer",
      rating: 4,
      feedback: "Great understanding of React concepts. Need to work on system design patterns."
    },
    {
      date: "Dec 15, 2024",
      interviewer: "Mike Chen",
      role: "Full Stack Developer",
      rating: 5,
      feedback: "Excellent problem-solving skills. Very strong in both frontend and backend concepts."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="text-xl font-semibold">Mock Interview Portal</span>
            <button className="text-gray-300 hover:text-white transition-colors">Dashboard</button>
            <button className="text-blue-400">Book Interview</button>
          </div>
          <div className="flex items-center space-x-4">
            <img 
              src="/api/placeholder/32/32" 
              alt="Profile" 
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Booking Form */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Schedule Your Interview</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Select Role</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 bg-gray-700 rounded-lg appearance-none cursor-pointer hover:bg-gray-600 transition-colors"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="">Choose a role...</option>
                    {roles.map((role, idx) => (
                      <option key={idx} value={role}>{role}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Select Difficulty</label>
                <div className="relative">
                  <select 
                    className="w-full p-3 bg-gray-700 rounded-lg appearance-none cursor-pointer hover:bg-gray-600 transition-colors"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    <option value="">Choose difficulty...</option>
                    {difficulties.map((diff, idx) => (
                      <option key={idx} value={diff}>{diff}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Select Time Slot</label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time, idx) => (
                    <button
                      key={idx}
                      className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedTime === time 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full p-4 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Check Availability
              </button>
            </div>
          </div>

          {/* Calendar */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Available Slots</h2>
            <div className="bg-gray-700 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-7 gap-1">
                {[...Array(31)].map((_, idx) => (
                  <button
                    key={idx}
                    className={`aspect-square rounded-lg p-2 text-sm font-medium transition-all hover:scale-105 ${
                      idx % 3 === 0 
                        ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' 
                        : idx % 7 === 5 || idx % 7 === 6 
                          ? 'bg-gray-600/50 text-gray-500 cursor-not-allowed'
                          : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                    disabled={idx % 7 === 5 || idx % 7 === 6}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600/20 mr-2"></div>
                Available
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-600/50 mr-2"></div>
                Unavailable
              </div>
            </div>
          </div>
        </div>

        {/* Resources and History */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Preparation Resources */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Preparation Resources</h2>
            <div className="space-y-4">
              {['System Design Basics', 'Data Structures', 'Algorithm Deep Dive'].map((resource, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="flex items-center space-x-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <BookOpen className="text-blue-400" />
                  <span>{resource}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Feedback History */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Interview History</h2>
            <div className="space-y-4">
              {feedbackHistory.map((feedback, idx) => (
                <div key={idx} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">{feedback.role}</div>
                      <div className="text-sm text-gray-400">with {feedback.interviewer}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(feedback.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{feedback.feedback}</p>
                  <div className="text-sm text-gray-400 mt-2">{feedback.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewBooking;