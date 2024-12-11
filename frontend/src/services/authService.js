import axios from "axios"; // Import axios for making HTTP requests

const API_URL = "http://localhost:8080/api/users"; // Base URL for user-related API calls

// Signup API call
const signup = (username, password, role) => {
    // Sends a POST request to the backend to create a new user with the provided details
    return axios.post(API_URL, {
        username,  // The username of the user
        password,  // The password of the user
        role,      // The role of the user (either 'customer' or 'vendor')
    });
};

// Login API call (POST request)
const login = (username, password, role) => {
    // Sends a POST request to the backend to log in the user
    // Passes the username, password, and role as query parameters
    return axios.post(`${API_URL}/login`, null, {
        params: { username, password, role } // Parameters to be sent in the query string
    }).then((response) => {
        // If the login is successful, return the response data (success message)
        return { data: response.data };
    }).catch((error) => {
        // If there is an error, improve error handling by checking for response data
        const errorMessage = error.response?.data || "Login failed. Please check your credentials."; 
        throw new Error(errorMessage); // Throw the error with the message
    });
};

// Export the signup and login functions for use in other parts of the application
export default {
    signup,
    login,
};
