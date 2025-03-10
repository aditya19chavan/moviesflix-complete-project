import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MovieDetails = () => {
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [searchParams] = useSearchParams();
  const movie_id = searchParams.get("q");
  const [movie, setMovie] = useState(null); // Initialize as null for conditional rendering
  const [error, setError] = useState(null); // State to hold error messages
  const [cast, setCast] = useState([]); // Corrected to use useState

  const fetchMovie = async () => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US`
      );
      setMovie(res.data); // Set the movie data to state
    } catch (error) {
      console.log(error);
      setError("Could not fetch movie details."); // Set error message
    }
  };

  const fetchMovieCast = async () => {
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US`
      );
      setCast(res.data.cast);
    } catch (error) {
      console.log(error);
      setError("Could not fetch movie cast."); // Set error message for cast
    }
  };

  useEffect(() => {
    if (movie_id) {
      fetchMovie();
      fetchMovieCast();
    }
  }, [movie_id]);

  // Conditional rendering for loading state and error handling
  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>; // Show loading message while fetching
  }

  return (
    <div className="container mt-5 mb-5 movieDetails">
      <div className="row mt-5 mb-5">
        <div className="col-xl-6">
          <div className="row mt-5 mb-5">
            <div className="col-xl-3">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Use poster_path for the image
                alt={movie.title}
                className="img-fluid"
              />
            </div>
            <div className="col-xl-9">
              <h3>{movie.title}</h3>
              <p>Rating: {movie.vote_average}</p>
              <p>Runtime: {movie.runtime} mins</p>
              <p>
                Genres:{" "}
                {movie.genres &&
                  movie.genres.length > 0 &&
                  movie.genres.map((genre) => genre.name).join(", ")}
              </p>
              <p>Release Date: {movie.release_date}</p>
              <div>
                <h5>Overview</h5>
                <p className="over">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 mt-5">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} // Use backdrop_path for the larger image
            alt={movie.title}
            className="img-fluid"
          />
        </div>
      </div>
      <h2>Movie Cast </h2>
      <div className="row">
        {cast &&
          cast.length > 0 &&
          cast.map((actor) => {
            return (
              <div className="col-xl-2" key={actor.id}>
                {" "}
                {/* Added key prop */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="img-fluid"
                />
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p>Character: {actor.character}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieDetails;
