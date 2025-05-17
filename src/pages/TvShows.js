// pages/TvShows.js
import { useEffect, useState } from "react";

const TvShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then((res) => res.json())
      .then((data) => {
        setShows(data.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading TV shows...</p>;

  return (
    <div>
      <h2>Popular TV Shows</h2>
      <div className="tvshow-list">
        {shows.map((show) => (
          <div key={show.id} className="tvshow-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="tvshow-image"
            />
            <h3>{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvShows;
