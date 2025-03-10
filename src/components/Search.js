import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Search() {
  const movie_name = useSelector((state) => state.search.value);
  const [movies, setMovies] = useState([]); // To store the search results

  const Api_key = "c45a857c193f6302f2b5061c3b85e743"; // Your API key

  const fetchSearchMovie = async (movie_name) => {
    if (!movie_name) return; // Avoid unnecessary API calls if movie_name is empty

    try {
      // Axios GET request to fetch the movies
      let res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${movie_name}&page=1`
      );

      setMovies(res.data.results); // Set the results in the state
      console.log(res.data.results); // For debugging purposes
    } catch (err) {
      console.log(err.message); // Handle errors
    }
  };

  // UseEffect runs when the component mounts or movie_name changes
  useEffect(() => {
    fetchSearchMovie(movie_name); // Fetch movie data when search term changes
  }, [movie_name]); // Add movie_name as a dependency to trigger effect when search term changes

  return (
    <div>
      <h1>Search Results for: {movie_name}</h1>
      <div className="row">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div className="col-xl-3" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid"
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}
