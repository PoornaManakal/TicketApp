import React, { useState } from "react"; // Import React and useState hook
import axios from "axios"; // Import axios for making HTTP requests
//import { ToastContainer, toast } from "react-toastify"; // Optional for toast notifications
import "react-toastify/dist/ReactToastify.css"; // Import the styles for react-toastify (commented out for now)
import "../styles/configform.css"; // Import custom CSS for the configuration form styling
import LogDisplay from "./LogDisplay"; // Import the LogDisplay component to show real-time logs

const ConfigurationForm = ({ onStart }) => {
  // State hooks to store the values of input fields
  const [totalTickets, setTotalTickets] = useState(""); 
  const [ticketReleaseRate, setTicketReleaseRate] = useState(""); 
  const [customerRetrievalRate, setCustomerRetrievalRate] = useState(""); 
  const [maxTicketCapacity, setMaxTicketCapacity] = useState(""); 

  // handleSubmit function to handle the form submission for starting the system
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      // Make POST request to start the system with the provided values
      const response = await axios.post(
        `http://localhost:8080/api/tickets/start?totalTickets=${totalTickets}&ticketReleaseRate=${ticketReleaseRate}&customerRetrievalRate=${customerRetrievalRate}&maxTicketCapacity=${maxTicketCapacity}`
      );
      alert("System started successfully!"); // Alert on successful system start
      // If onStart is passed as a function, call it with the provided values
      if (typeof onStart === "function") {
        onStart(
          totalTickets,
          ticketReleaseRate,
          customerRetrievalRate,
          maxTicketCapacity
        );
      }
    } catch (error) {
      // If an error occurs during system start, alert the user
      alert("Failed to start the system.");
    }
  };

  // handleStop function to handle stopping the system
  const handleStop = async () => {
    try {
      // Make POST request to stop the system
      const response = await axios.post(
        "http://localhost:8080/api/tickets/stop"
      );
      alert("System stopped successfully!"); // Alert on successful system stop
    } catch (error) {
      // If an error occurs during system stop, alert the user
      alert("Failed to stop the system.");
    }
  };

  return (
    <div className="config-container">
      <div className="form-container">
        <h2 className="form-header">Configure Ticket Pool System</h2>
        <form onSubmit={handleSubmit} className="configuration-form">
          {/* Form input fields for configuring the ticket system */}
          <div className="form-group">
            <label htmlFor="totalTickets" className="form-label">
              Total Tickets:
            </label>
            <input
              required
              min={0}
              type="number"
              id="totalTickets"
              value={totalTickets}
              onChange={(e) => setTotalTickets(e.target.value)} // Update totalTickets state
              className="form-input"
              placeholder="Enter total tickets"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ticketReleaseRate" className="form-label">
              Ticket Release Rate (sec):
            </label>
            <input
              required
              min={0}
              type="number"
              id="ticketReleaseRate"
              value={ticketReleaseRate}
              onChange={(e) => setTicketReleaseRate(e.target.value)} // Update ticketReleaseRate state
              className="form-input"
              placeholder="Enter release rate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="customerRetrievalRate" className="form-label">
              Customer Retrieval Rate (sec):
            </label>
            <input
              required
              min={0}
              type="number"
              id="customerRetrievalRate"
              value={customerRetrievalRate}
              onChange={(e) => setCustomerRetrievalRate(e.target.value)} // Update customerRetrievalRate state
              className="form-input"
              placeholder="Enter retrieval rate"
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxTicketCapacity" className="form-label">
              Max Ticket Capacity:
            </label>
            <input
              required
              min={0}
              type="number"
              id="maxTicketCapacity"
              value={maxTicketCapacity}
              onChange={(e) => setMaxTicketCapacity(e.target.value)} // Update maxTicketCapacity state
              className="form-input"
              placeholder="Enter max capacity"
            />
          </div>

          {/* Buttons for starting and stopping the system */}
          <div className="form-buttons">
            <button type="submit" className="btn-start">
              Start System
            </button>
            <button type="button" onClick={handleStop} className="btn-stop">
              Stop System
            </button>
          </div>
        </form>
      </div>
      <div className="log-display-container">
        {/* Displaying real-time ticket availability logs */}
        <LogDisplay />
      </div>
      {/* <ToastContainer /> */} {/* Optional ToastContainer for notifications (currently commented out) */}
    </div>
  );
};

export default ConfigurationForm;
