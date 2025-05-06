import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { theme } from "./utils/colors";
import Card from "./components/card/Card";
import Homepage from "./pages/home/Homepage";

const App = () => {
  const bgColor = {
    backgroundColor: theme?.colors?.primary,
  };
  return (
    <div className={` w-full h-screen`} style={bgColor}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
