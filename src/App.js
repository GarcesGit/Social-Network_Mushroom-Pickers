import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
