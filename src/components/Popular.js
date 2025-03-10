import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  //https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);      
    const navigate = useNavigate();

  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const fetchPopularMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=${page}`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    };
    

    const handlePre = () => {
        if (page > 1) {
            setPage(page - 1);
            window.scrollTo(0, 0);
   }
    }

    const handleNext = () => {
        setPage(page + 1);
         window.scrollTo(0, 0);
    };

    const handleMovie = (id) => {
        console.log(id);
        navigate(`/movie?q=${id}`);
    };

  useEffect(() => {
      fetchPopularMovies();
      
  }, [page])
    
  return (
    <>
      <div className="container mb-5 mt-5">
        <div className="row mb-3 mt-3 ">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="col-xl-3 text-center p-3" onClick={()=>handleMovie(movie.id)}>
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
        {movies.length > 0 && (
          <div className="pagination">
            <button className="btn btn-outline-danger" onClick={handlePre}>
              Previous
            </button>
            <button className="btn btn-outline-danger">{page}</button>
            <button className="btn btn-outline-danger" onClick={handleNext}>
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Popular;
