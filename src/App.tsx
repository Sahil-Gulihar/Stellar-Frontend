import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SignIn from "./components/SignIn";
import SignupComp from "./components/Signup";

import LandingPage from "./components/Landing";
import Dasboard from "./components/Dashboard";
import Freelancer from "./components/Freelancer";
import About from "./components/Aboutus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignupComp />} />
        <Route path="/search" element={<Dasboard />} />
        <Route path="/gigs" element={<Freelancer />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
