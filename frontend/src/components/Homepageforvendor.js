// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import "../styles/home.css"; // Importing the CSS for the homepage

function Homepageforvendor() {
    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="header">
                {/* Navbar */}
                <div className="navbar">
                    <div className="logo">
                        <h1>Ticket Pool(Vendor Section)</h1> {/* Logo of the application */}
                    </div>
                    <nav className="nav-links">
                        {/* Navigation Links */}
                        <Link to="/Homepageforvendor" className="nav-link">Home</Link> {/* Link to the Home page */}
                        <Link to="#" className="nav-link">About Us</Link> {/* Placeholder link for About Us */}
                        <Link to="#" className="nav-link">Contact Us</Link> {/* Placeholder link for Contact Us */}
                        <Link to="/configform" className="nav-link">Simulation</Link> {/* Link to the Simulation page */}
                        <Link to="/" className="nav-link nav-button">Logout</Link> {/* Link to log out and return to the main page */}
                    </nav>
                </div>
                {/* Header Content */}
                <div className="header-content">
                    <h2>Welcome to the Ticket Pool System</h2> {/* Welcome heading */}
                    <p>Your one-stop solution for managing event ticketing in real-time.</p> {/* Description of the app */}
                </div>
            </header>

            {/* Events Section */}
            <section className="events-section">
                <h2>Upcoming Events</h2> {/* Section heading for upcoming events */}
                <div className="events-grid">
                    {/* Event Cards */}
                    <div className="event-card">
                        <img src="https://visitlitchfield.com/wp-content/uploads/2024/03/carnival-1-1024x576.jpg" alt="Carnival" /> {/* Image for Carnival event */}
                        <div className="event-info">
                            <h3>Carnival</h3> {/* Event title */}
                            <p>Experience the joy of vibrant parades, thrilling rides, and live entertainment.</p> {/* Event description */}
                            <Link to="#" className="event-link">Learn More</Link> {/* Link to learn more about the event */}
                        </div>
                    </div>
                    <div className="event-card">
                        <img src="https://img.freepik.com/premium-photo/generative-ai-concert-stage-with-drum-set-chairs_634053-3140.jpg?w=360" alt="Indoor Music Concert" /> {/* Image for Indoor Music Concert */}
                        <div className="event-info">
                            <h3>Indoor Music Concert</h3>
                            <p>Enjoy live music performances from top artists in a cozy indoor setting.</p>
                            <Link to="#" className="event-link">Learn More</Link>
                        </div>
                    </div>
                    <div className="event-card">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/032/583/001/small_2x/indian-women-in-colorful-saris-holding-colorful-lanterns-ai-generated-free-photo.jpg" alt="Tamil Festival" /> {/* Image for Tamil Festival */}
                        <div className="event-info">
                            <h3>Tamil Festival</h3>
                            <p>Celebrate Tamil culture with traditional food, music, and dance performances.</p>
                            <Link to="#" className="event-link">Learn More</Link>
                        </div>
                    </div>
                    <div className="event-card">
                        <img src="https://t4.ftcdn.net/jpg/07/39/00/15/360_F_739001578_Sz2geB80cvHnRA6CRSrZRUqGpZbDlS5l.jpg" alt="Sinhala Festival" /> {/* Image for Sinhala Festival */}
                        <div className="event-info">
                            <h3>Sinhala Festival</h3>
                            <p>Discover the rich Sinhala heritage through vibrant festivities and cuisine.</p>
                            <Link to="#" className="event-link">Learn More</Link> {/* Link to learn more about the event */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>© 2024 Ticket Pool. All rights reserved.</p> {/* Footer text */}
                {/* <p>Contact: <a href="#">support@ticketpool.com</a></p> */}
            </footer>
        </div>
    );
}

export default Homepageforvendor;
