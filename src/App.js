import './App.css';
import MovieList from './view/MovieList';

// Navbar Component
const Navbar = () => {
  return (
    <nav id="navbar">
  <button> Romance </button>
  <button> Action </button>
  <button> Drama </button>
  <button> LoveStory </button>
  <button> Comedy </button>
  <button> Historical </button>
  <button> Musical </button>
  <button> Crime </button>
  <button> Mystery </button>
  <button> Western </button>
    </nav>
   
  );
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
