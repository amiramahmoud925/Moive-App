import './App.css';
import MovieList from './view/MovieList';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Users from './pages/Users';
import Actors from './pages/Actors';
import TvShows from './pages/TvShows';

// Navbar Component
const Navbar = () => {
  return (
    <nav id="navbar">
      <NavLink to="/movies"><button>Movies</button></NavLink>
      <NavLink to="/users"><button>Users</button></NavLink>
      <NavLink to="/actors"><button>Actors</button></NavLink>
      <NavLink to="/tvshows"><button>TV Shows</button></NavLink>
    </nav>
  );
};


function App() {
  return (

 <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/movies" element={<MovieList/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/tvshows" element={<TvShows />} />
        </Routes>
      </div>
    </Router>
  /*  <div className="App">
      <Navbar />
      <MovieList />
    </div>*/
  );
}

export default App;
