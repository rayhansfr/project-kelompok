import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './views/Home';
import Community from './views/Community';
import Place from './views/Place';
import Recipe from './views/Recipe';
import Footer from './component/Footer';

function App() {
  return (
    <div className='App'>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Resep" element={<Recipe />} />
              <Route path="/Lokasi" element={<Place/>} />
              <Route path="/Komunitas" element={<Community />} />
            </Routes>
          </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
