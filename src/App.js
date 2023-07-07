import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './views/Home';
import Community from './views/Community';
import Place from './views/Place';
import Recipe from './views/Recipe';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recipe" element={<Recipe />} />
            <Route path="/Place" element={<Place/>} />
            <Route path="/Community" element={<Community />} />
          </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
