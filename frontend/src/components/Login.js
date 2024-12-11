import React, { useState } from "react"; // Importing necessary hooks from React
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import authService from "../services/authService"; // Importing authService to handle login logic
import "../styles/loginstyles.css"; // Importing the CSS for styling the login form

const Login = () => {
    // useNavigate hook for navigating to different pages
    const navigate = useNavigate();
    
    // useState hooks to manage the state of username, password, role, and message
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer"); // Default role is 'customer'
    const [message, setMessage] = useState(""); // State to store any messages (like error messages)

    // handleLogin function to handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        try {
            // Calling authService.login to authenticate the user
            const response = await authService.login(username, password, role);
    
            // Based on the role, navigate to the appropriate page
            if (role === "customer") {
                navigate("/Homepageforcustomer"); // Redirect to homepage for customers
            } else if (role === "vendor") {
                navigate("/Homepageforvendor"); // Redirect to homepage for vendors
            }
    
            // Set the message state with the response data (can be a success message)
            setMessage(response.data);
            console.log(password); // Debugging line (can be removed in production)
        } catch (error) {
            console.log(error); // Log any error that occurs during login
            setMessage("Login failed. Please check your credentials."); // Set error message if login fails
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
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
                        id="selectop"
                    >
                        <option value="customer">Customer</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            {message && <p className="error-message">{message}</p>} {/* Show error message if login fails */}
            <div className="signup-prompt">
                <p>Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p> {/* Link to sign-up page */}
            </div>
        </div>
    );
};

export default Login;
