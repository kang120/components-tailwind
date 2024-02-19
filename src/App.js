import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Button1 from "./components/Button1";
import Image1 from "./components/Image1";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Text1 from "./components/Text1";
import Text2 from "./components/Text2";
import Navbar3 from "./components/Navbar3";
import Testing from "./components/Testing";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar1 />} />
          <Route path="/navbar1" element={<Navbar1 />} />
          <Route path="/navbar2" element={<Navbar2 />} />
          <Route path="/navbar3" element={<Navbar3 />} />
          <Route path="/image1" element={<Image1 />} />
          <Route path="/button1" element={<Button1 />} />
          <Route path="/text1" element={<Text1 />} />
          <Route path="/text2" element={<Text2 />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
