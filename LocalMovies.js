import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const LocalMovies = () => {

    const [movies, setMovies] = useState([]);

    const fetchLocalMovies = () => {
        axios
          .get("http://localhost:8086/movie/all")
          .then((response) => {
              console.log(response.data);
              setMovies(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    useEffect(() => {
        fetchLocalMovies();
    },[])


  return (
      <>
      <div className="container mb-5 mt-5">
        <div className="row mb-3 mt-3">
          <h2 className="text-center">Local Movies</h2>
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="col-xl-3 text-center p-3 single">
                  <img
                    src={movie.posterUrl}
                    alt=""
                    className="img-fluid"
                  />
                  <h4 className="mt-3">{movie.title}</h4>
                  <p>
                    Rating: <strong>{movie.avgVote}</strong>
                  </p>
                </div>
              );
            })}
        </div>
        {/* {movies.length > 0 && (
          <div className="pagination">
            <button className="btn btn-danger" onClick={handlePre}>
              ◀️ Previous
            </button>
            <button className="btn btn-danger">{page}</button>
            <button className="btn btn-danger" onClick={handleNext}>
              Next ▶️
            </button>
          </div>
        )} */}
      </div>
      </>
  )
}
