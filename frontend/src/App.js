import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from react-router-dom for routing
import Login from "./components/Login"; // Import the Login component
import Signup from "./components/Signup"; // Import the Signup component
import ConfigurationForm from "./components/ConfigurationForm"; // Import the ConfigurationForm component
import Homepagege from "./components/HomePage"; // Import the Homepage component (presumably for customers)
import Homepageforvendor from "./components/Homepageforvendor"; // Import the Homepageforvendor component for vendors
import Homepageforcustomer from "./components/Homepageforcustomer"; // Import the Homepageforcustomer component for customer

function App() {
  return (
    <Router> {/* Wrap the entire application in Router to enable routing */}
      {/* <Header/> */} {/* Optional header component (commented out) */}
      <Routes>
        {/* Define the routes for the app */}
        
        {/* Default route set to Homepagege component */}
        <Route path="/" element={<Homepagege />} />
        
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />
        
        {/* Route for the Signup page */}
        <Route path="/signup" element={<Signup />} />
        
        {/* Route for the ConfigurationForm page (for system configuration) */}
        <Route path="/configform" element={<ConfigurationForm />} />
        
        {/* Route for the Homepageforvendor page (for vendor users) */}
        <Route path="/Homepageforvendor" element={<Homepageforvendor />} />
        
        {/* Route for the Homepageforcustomer page (for customer users) */}
        <Route path="/Homepageforcustomer" element={<Homepageforcustomer />} />
      
      </Routes>
      {/* <Footer/> */} {/* Optional footer component (commented out) */}
    </Router>
  );
}

export default App; // Export the App component as the default export
