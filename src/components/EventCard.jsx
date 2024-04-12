import React from 'react';

const EventCard = ({ title, description, imageUrl, onRegister, onKnowMore }) => {
  return (
    <div className="w-auto rounded-lg overflow-hidden shadow-lg p-3 bg-white">
      <img className="w-auto mx-auto p-6" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button onClick={onRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Register</button>
        <button onClick={onKnowMore} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Know More</button>
      </div>
    </div>
  );
};

export default EventCard;
