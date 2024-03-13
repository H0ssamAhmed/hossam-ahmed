import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import CursorCircle from './components/CursorCircle ';
import Home from './components/home';
import Articles from './pages/articles/Articles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects/projects';
import Error from './pages/error/error';
import ArticleOne from './pages/articles/articleOne/articleOne';

function App() {
  return (
    <div className='dark:bg-primary-background roboto-normal  selection:bg-primary selection:text-primary-background'>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<>
            <Outlet />
          </>} >
            <Route path='' element={<Articles />} />
            {/* <Route path=':artice-name' element={<ArticleOne />} /> */}
          </Route>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
      <CursorCircle />
    </div>
  );
}

export default App;
