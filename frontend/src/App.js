
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ConfigurationForm from "./components/ConfigurationForm";
import Homepagege from "./components/HomePage";
//import LogDisplay from './components/LogDisplay';
import MovieSeatsBooking from "./components/MovieSeatsBooking";
import Homepageforvendor from "./components/Homepageforvendor";

function App() {


    return (
        <Router>
            {/* <Header/> */}
            <Routes>
                {/* Default route set to signup */}
                <Route path="/" element={<Homepagege />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/configform" element={<ConfigurationForm />} />
                {/* <Route path="/logDisplay" element={<LogDisplay />} /> */}
                <Route path="/movieSeatsBooking" element={<MovieSeatsBooking/>}/>
                <Route path="/Homepageforvendor" element={<Homepageforvendor/>}/>
            </Routes>
            {/* <Footer/> */}
        </Router>
    );
}

export default App;
