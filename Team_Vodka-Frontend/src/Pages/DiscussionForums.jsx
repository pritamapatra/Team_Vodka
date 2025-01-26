import React, { useState } from 'react';
import { MessageSquare, TrendingUp, ThumbsUp, ThumbsDown, MessageCircle, BarChart, Clock, Plus, ChevronUp, ChevronDown } from 'lucide-react';

const DiscussionForum = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showNewThreadForm, setShowNewThreadForm] = useState(false);
  const [selectedThread, setSelectedThread] = useState(null);

  // Sample categories
  const categories = [
    {
      id: 1,
      name: "General Discussion",
      icon: MessageSquare,
      color: "blue",
      threads: 234,
      description: "General programming discussions and questions"
    },
    {
      id: 2,
      name: "Frontend Development",
      icon: BarChart,
      color: "purple",
      threads: 156,
      description: "All about frontend technologies and frameworks"
    },
    {
      id: 3,
      name: "Career Advice",
      icon: TrendingUp,
      color: "green",
      threads: 189,
      description: "Career growth and job search discussions"
    }
  ];

  // Sample threads
  const activeThreads = [
    {
      id: 1,
      title: "Best practices for React state management in 2025",
      category: "Frontend Development",
      author: "Alex Chen",
      upvotes: 45,
      comments: 23,
      timeAgo: "2 hours ago",
      content: "I've been exploring different state management solutions...",
      tags: ["react", "javascript", "state-management"]
    },
    {
      id: 2,
      title: "Preparing for Senior Developer interviews",
      category: "Career Advice",
      author: "Sarah Miller",
      upvotes: 32,
      comments: 18,
      timeAgo: "4 hours ago",
      content: "What are the key areas to focus on...",
      tags: ["career", "interviews", "senior-dev"]
    }
  ];

  // Sample comments
  const comments = [
    {
      id: 1,
      author: "David Kim",
      content: "I've found Redux Toolkit to be the most practical solution...",
      upvotes: 12,
      timeAgo: "1 hour ago",
      replies: [
        {
          id: 2,
          author: "Emily Wang",
          content: "Agreed! The built-in utilities save so much time.",
          upvotes: 8,
          timeAgo: "45 minutes ago"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="text-xl font-semibold">Discussion Forums</span>
            <button className="text-gray-300 hover:text-white transition-colors">Dashboard</button>
            <button className="text-blue-400">Browse Forums</button>
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
        {/* Categories */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Categories</h2>
            <button 
              onClick={() => setShowNewThreadForm(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              <span>New Thread</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="bg-gray-800 rounded-xl p-6 hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <category.icon className={`text-${category.color}-400 h-8 w-8 mb-3`} />
                    <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className="text-sm text-gray-400">
                      <MessageSquare className="inline mr-2 h-4 w-4" />
                      {category.threads} threads
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Threads */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Trending Discussions</h2>
          <div className="space-y-4">
            {activeThreads.map((thread) => (
              <div 
                key={thread.id}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors cursor-pointer"
                onClick={() => setSelectedThread(thread)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center space-y-1">
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <ChevronUp size={20} className="text-gray-400 hover:text-blue-400" />
                    </button>
                    <span className="font-medium">{thread.upvotes}</span>
                    <button className="p-1 hover:bg-gray-700 rounded">
                      <ChevronDown size={20} className="text-gray-400 hover:text-blue-400" />
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{thread.title}</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                          <span>{thread.category}</span>
                          <span>•</span>
                          <span>by {thread.author}</span>
                          <span>•</span>
                          <span>{thread.timeAgo}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <MessageCircle size={20} />
                        <span>{thread.comments}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-3">{thread.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {thread.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Thread Form */}
        {showNewThreadForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-gray-800 rounded-xl p-6 w-full max-w-2xl">
              <h2 className="text-xl font-semibold mb-6">Create New Thread</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Title</label>
                  <input 
                    type="text"
                    className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter thread title..."
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Category</label>
                  <select className="w-full p-3 bg-gray-700 rounded-lg">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Content</label>
                  <textarea 
                    className="w-full p-3 bg-gray-700 rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your post..."
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={() => setShowNewThreadForm(false)}
                    className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Create Thread
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Thread View with Comments */}
        {selectedThread && (
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Comments</h2>
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/api/placeholder/32/32" 
                          alt={comment.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="font-medium">{comment.author}</div>
                          <div className="text-sm text-gray-400">{comment.timeAgo}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-600 rounded">
                          <ThumbsUp size={16} className="text-gray-400 hover:text-blue-400" />
                        </button>
                        <span className="text-sm">{comment.upvotes}</span>
                        <button className="p-1 hover:bg-gray-600 rounded">
                          <ThumbsDown size={16} className="text-gray-400 hover:text-red-400" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                  {/* Nested Replies */}
                  {comment.replies?.map((reply) => (
                    <div key={reply.id} className="ml-8 bg-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <img 
                            src="/api/placeholder/32/32" 
                            alt={reply.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium">{reply.author}</div>
                            <div className="text-sm text-gray-400">{reply.timeAgo}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-1 hover:bg-gray-600 rounded">
                            <ThumbsUp size={16} className="text-gray-400 hover:text-blue-400" />
                          </button>
                          <span className="text-sm">{reply.upvotes}</span>
                          <button className="p-1 hover:bg-gray-600 rounded">
                            <ThumbsDown size={16} className="text-gray-400 hover:text-red-400" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300">{reply.content}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionForum;