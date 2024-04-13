import React from 'react';

const EventCard = ({ title, description, imageUrl, onRegister, onKnowMore }) => {
  return (
    <div className="w-full sm:w-80 sm:mx-auto bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg text-gray-800 mb-2">{title}</div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button onClick={onRegister} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Register</button>
        <button onClick={onKnowMore} className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Know More</button>
      </div>
    </div>
  );
};

export default EventCard;
