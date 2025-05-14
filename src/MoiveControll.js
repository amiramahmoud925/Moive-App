import axios from "axios";
import MovieModel from "./MoiveModel";

class MovieController {
    static async fetchMovies() {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7");
            return response.data.results.map((movie) => {
                return new MovieModel(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.poster_path,
                    movie.release_date,
                    movie.vote_average
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export default MovieController