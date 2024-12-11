import React, { useState } from "react"; // Importing React and useState hook
import { useNavigate } from "react-router-dom"; // Importing useNavigate for routing
import authService from "../services/authService"; // Importing the authService to handle the signup logic
import "../styles/signupstyle.css"; // Importing the CSS for styling the signup form

const Signup = () => {
    const navigate = useNavigate(); // useNavigate hook to navigate to different pages
    const [username, setUsername] = useState(""); // State to store the username input
    const [password, setPassword] = useState(""); // State to store the password input
    const [role, setRole] = useState("customer"); // State to store the selected role, default is 'customer'
    const [message, setMessage] = useState(""); // State to store success or error messages
    const [error, setError] = useState(""); // State to store any validation errors

    // validatePassword function to check if the password is at least 6 characters long and contains at least one number
    const validatePassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/; // Regex for password validation
        return regex.test(password);
    };

    // handleSignup function to handle form submission and signup logic
    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // If password is not valid, set the error state and return early
        if (!validatePassword(password)) {
            setError("Password must be at least 6 characters long and one number.");
            return;
        }

        try {
            // Call authService.signup to send the signup request
            const response = await authService.signup(username, password, role);

            // Navigate based on the role after successful signup
            if (role === "customer") {
                navigate("/Homepageforcustomer"); // Redirect to homepage for customers
            } else if (role === "vendor") {
                navigate("/Homepageforvendor"); // Redirect to homepage for vendors
            }

            // Set success message after signup
            setMessage(`Signup successful! Welcome, ${response.data.username}`);
            setError(""); // Clear any previous error messages after successful signup
        } catch (error) {
            // If signup fails, set an error message
            setMessage("Signup failed. Please try again.");
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-header">Signup</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <div className="input-group">
                    <label className="input-label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state on input change
                        className="input-field"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                        className="input-field"
                        required
                    />
                </div>
                <div className="input-group">
                    <label className="input-label">Role:</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)} // Update role state on select change
                        className="input-field"
                    >
                        <option value="customer">Customer</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </div>
                {/* Show error message if password validation fails */}
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="signup-button">Signup</button>
            </form>
            {/* Show success message if signup is successful */}
            {message && <p className="success-message">{message}</p>}
            <div className="login-prompt">
                <p>Already have an account? <a href="/login" className="login-link">Login</a></p> {/* Link to login page */}
            </div>
        </div>
    );
};

export default Signup;
