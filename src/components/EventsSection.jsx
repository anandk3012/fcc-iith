import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import EventCard from './EventCard';

const EventsSection = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(events.length / 3) - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(events.length / 3) - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="events-section mb-8 mx-4 bg-slate-200 rounded-lg shadow-md p-6 md:p-8 relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Upcoming Events</h2>
      <div className="flex overflow-hidden">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-md p-5 md:p-6 z-10" onClick={handlePrevClick}>
          <IoIosArrowBack />
        </button>
        <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full overflow-x-hidden">
          {events.slice(currentIndex * 3, currentIndex * 3 + 3).map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              onRegister={() => handleRegister(event.id)}
              onKnowMore={() => handleKnowMore(event.id)}
              className="p-4 rounded-lg shadow-md w-1/3 md:w-auto "
            />
          ))}
        </div>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full shadow-md p-5 md:p-6 z-10" onClick={handleNextClick}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default EventsSection;
