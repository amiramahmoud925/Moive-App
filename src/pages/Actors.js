// pages/Actors.js
import { useEffect, useState } from "react";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/person/popular?api_key=9813ce01a72ca1bd2ae25f091898b1c7")
      .then((res) => res.json())
      .then((data) => {
        setActors(data.results);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading actors...</p>;

  return (
    <div>
    <h2>Popular Actors</h2>
    <div className="actor-list">
      {actors.map((actor) => (
        <div key={actor.id} className="actor-card">
          <h3>{actor.name}</h3>
          <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Actors;
