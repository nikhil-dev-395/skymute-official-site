import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { theme } from "./utils/colors";
import Card from "./components/card/Card";
import Homepage from "./pages/home/Homepage";
import Footer from "./components/footer/Footer";
import { Aboutpage } from "./pages/about/Aboutpage";
import PolicyPrivacy from "./pages/policy/PolicyPrivacy";

const App = () => {
  const bgColor = {
    backgroundColor: theme?.colors?.primary,
  };
  return (
    <div className={` w-full h-full`} style={bgColor}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy-policy" element={<PolicyPrivacy />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<Aboutpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
