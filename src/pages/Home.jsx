import React from 'react';
import { Link } from 'react-router-dom';
import EventsSection from '../components/EventsSection';

function HomePage() {


    // const [events, setEvents] = useState([]);
    const events = [
        {
            id: 1,
            title: "Workshop on Financial Modeling",
            description: "Learn the fundamentals of financial modeling and its applications in various industries.",
            date: "TBD",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 2,
            title: "Guest Lecture on Management Consulting",
            description: "Gain insights into the world of management consulting and its role in shaping businesses.",
            date: "TBD",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 3,
            title: "Networking Mixer with Industry Professionals",
            description: "Connect with professionals from the finance and consulting sectors and explore collaboration opportunities.",
            date: "TBD",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 4,
            title: "Seminar on Investment Banking",
            description: "Learn about the latest trends and strategies in investment banking.",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 5,
            title: "Panel Discussion on Corporate Finance",
            description: "Join industry experts as they discuss the challenges and opportunities in corporate finance.",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 6,
            title: "Workshop on Data Analytics in Finance",
            description: "Discover how data analytics is transforming the finance industry.",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 7,
            title: "Networking Event with Finance Professionals",
            description: "Connect with professionals from various finance sectors and expand your network.",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 8,
            title: "Case Study Competition",
            description: "Put your problem-solving skills to the test in our annual case study competition.",
            imageUrl: "https://via.placeholder.com/400",
        },
        {
            id: 9,
            title: "Consulting Bootcamp",
            description: "Get hands-on experience and insights into the consulting industry.",
            imageUrl: "https://via.placeholder.com/400",
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <main className="py-8">
                {/* Landing Section */}
                <section className="landing-section h-screen flex flex-col justify-center items-center mb-8 bg-blue-600 text-white rounded-lg shadow-md p-6 md:p-8 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">Finance and Consulting Club</h1>
                    <p className="text-xl md:text-3xl font-mono">Empowering students with knowledge and skills</p>
                </section>

                {/* About Us Section */}
                <section className="about-section mb-8 bg-slate-200 rounded-lg shadow-md p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About Us</h2>
                            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                                Welcome to the FCC - Finance and Consulting Club, IIT Hyderabad. We are a student-run club dedicated to fostering interest and providing opportunities in the fields of finance and consulting.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed mt-4 text-gray-700">
                                Our mission is to empower students with the knowledge and skills needed to excel in these competitive industries. We organize various workshops, seminars, and networking events throughout the year to achieve this goal.
                            </p>
                        </div>
                        <div className="md:order-1 flex justify-center">
                            <img src="https://via.placeholder.com/400" alt="About Us" className="max-w-full rounded-md shadow-md" />
                        </div>
                    </div>
                </section>



                {/* Events Section */}
                <EventsSection events={events} />

                {/* Join Us Section */}
                <section className="join-section mb-8 bg-gray-200 rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Join Us</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                        If you're a student at IIT Hyderabad and interested in finance or consulting, we'd love to have you join our club!
                    </p>
                    <Link to="/signup" className="button mt-4 inline-block bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md">Sign Up</Link>
                </section>
            </main>
            <footer className="text-center py-4">
                <p>&copy; 2024 FCC - Finance and Consulting Club, IIT Hyderabad</p>
            </footer>
        </div>
    );
}

export default HomePage;
