import React, { useState, useEffect } from "react"; // Importing necessary hooks from React
import axios from "axios"; // Importing axios for making HTTP requests
import "../styles/logdisplay.css"; // Importing the CSS for styling the log display

const LogDisplay = () => {
  // State hook to store ticket availability data
  const [ticketAvailability, setTicketAvailability] = useState(null);

  // useEffect hook to fetch ticket availability data at regular intervals
  useEffect(() => {
    // Set an interval to fetch data every 500 milliseconds
    const intervalId = setInterval(() => {
      // Make a GET request to fetch ticket availability
      axios.get("http://localhost:8080/api/tickets/status")
        .then(response => {
          // Update the state with the response data (ticket availability)
          setTicketAvailability(response.data);
          //console.log(response.data)  // Debugging log, can be removed in production
        })
        .catch(error => {
          // Log an error if the request fails
          console.error("Error fetching ticket availability", error);
        });
    }, 500); // Interval set to 500 milliseconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once when the component is mounted

  return (
    <div className="log-container">
      <h4 className="log-header">Real-Time Ticket Availability</h4> {/* Header of the log display */}
      <div className="log-content">
        {ticketAvailability !== null ? (
          <p className="log-data">{`Tickets Available: ${ticketAvailability}`}</p> // Display ticket availability if fetched
        ) : (
          <p className="log-loading">Fetching ticket availability...</p> // Show loading message while fetching data
        )}
      </div>
    </div>
  );
};

export default LogDisplay;
