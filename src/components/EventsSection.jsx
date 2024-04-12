import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import EventCard from './EventCard';

const EventsSection = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('transform 0.5s ease-in-out');

  const handlePrevClick = () => {
    setTransition('transform 0.5s ease-in-out');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(events.length / 3) - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setTransition('transform 0.5s ease-in-out');
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(events.length / 3) - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className=" events-section mb-8 bg-slate-200 rounded-lg shadow-md p-6 md:p-8 relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 overflow-hidden"
           style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: transition }}>
        {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              onRegister={() => handleRegister(event.id)}
              onKnowMore={() => handleKnowMore(event.id)}
              className="p-4 rounded-lg shadow-md"
            />
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-md p-5 md:p-6 z-10" onClick={handlePrevClick}>
        <IoIosArrowBack />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-md p-5 md:p-6 z-10" onClick={handleNextClick}>
        <IoIosArrowForward />
      </button>
    </section>
  );
};

export default EventsSection;
