import React from "react";
import axios from "axios";
import { useState } from "react";
// import "./movie.css";

const Movie = () => {
  const [movie, setmovie] = useState([]);
  const [searchv, setsearchv] = useState("avatar");
  const search = () => {
    const options = {
      method: "GET",
      url: `https://data-imdb1.p.rapidapi.com/titles/search/keyword/${searchv}`,
      params: { info: "mini_info", limit: "10", page: "1", titleType: "movie" },
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "7411a7765dmsh4c826bbf8aad02dp17f4d4jsn214ae9ecccce",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.results);
        setmovie(response.data.results);
        console.log(movie);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="form d-flex col-md-4 m-auto mb-5">
        <input
          value={searchv}
          onChange={(e) => setsearchv(e.target.value)}
          type="text"
          className="form-control ml-5"
        />
        <button className="btn btn-success  " onClick={search}>
          search
        </button>
      </div>
      <div className="col-md-12">
        <div className="row">
          {movie.map((item, index) => {
            return (
              <div className="card col-md-3 mx-3 mt-4">
                <div className="card-header">{item.titleText.text}</div>
                <div className="card-body">
                  <h4>{item.titleText.text}</h4>

                  <img
                    className="img-fluid"
                    src={item?.primaryImage?.url}
                    alt="sry"
                  />
                </div>
                <button
                  className="btn btn-warning w-50"
                  data-bs-toggle="collapse"
                  data-bs-target="#example"
                >
                  more info
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
