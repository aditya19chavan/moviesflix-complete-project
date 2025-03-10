import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const TopRated = () => {
    //https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1
     const [movies, setMovies] = useState([]);

  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const fetchTopRatedMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`
      )
      .then((response) => {
          console.log(response.data.results);
          setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

    return (
      <>
        <div className="container mb-5 mt-5">
          <div className="row mb-3 mt-3">
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => {
                return (
                  <div className="col-xl-3">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      className="img-fluid"
                    />
                    <h4>{movie.title}</h4>
                    <p>
                      Rating<strong>{movie.vote_average}</strong>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
};



export default TopRated;
