import React from "react";
import { useNavigate } from "react-router-dom";
 

const Service = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Video Detection", description: "Analyze video files with AI. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, debitis." },
    { title: "Image Detection", description: "Analyze image files with AI." },
    { title: "Audio Detection", description: "Analyze audio files with AI." }, 
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black border-t-2 border-b-2 border-gray-900">
      <h1 className="text-4xl font-bold text-pritam-400 mb-28 mt-32">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-11/12 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 shadow-md rounded-lg border border-gray-900 hover:transform hover:bg-gray-900 hover:scale-105 transition-all duration-300 mb-64"
          >
            <h2 className="text-xl font-semibold text-gray-50 mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button
              onClick={() => navigate("/batch-detection")}
              className="bg-pritam-400 border border-gray-600 text-black px-4 py-2 rounded hover:bg-black hover:text-pritam-400"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
