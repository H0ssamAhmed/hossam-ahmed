import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CursorCircle from './components/CursorCircle ';
import Home from './components/home';
import Articles from './pages/articles/Articles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects/projects';

function App() {
  return (
    <div className='dark:bg-primary-background roboto-normal  selection:bg-primary selection:text-primary-background'>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
      <CursorCircle />
    </div>
  );
}

export default App;
