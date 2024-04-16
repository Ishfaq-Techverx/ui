// import "./App.css";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import RoboLeft from "./Components/RoboLeft";
import TrustedCustomers from "./Components/TrustedCustomers";

function App() {
  return (
    <div className="app">
      <section className="firstsection" style={{ position: "relative" }}>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
      </section>
      <Header />
      <Profile />
      <section className="secondsection" style={{ position: "relative" }}>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <Features />
        <TrustedCustomers />
        <RoboLeft />
        <Footer />
      </section>
    </div>
  );
}

export default App;
