import "./Home.css";
import axios from "axios";
import React from "react";
import { useState } from "react";

const Home = () => {
  const [serach, setserach] = useState("apple");
  const [info, setinfo] = useState([]);
  const inputHandle = (e) => {
    setserach(e.target.value);
  };
  const get = async () => {
    const options = {
      method: "GET",
      url: "https://calorieninjas.p.rapidapi.com/v1/nutrition",
      params: { query: `${serach}` },
      headers: {
        "x-rapidapi-host": "calorieninjas.p.rapidapi.com",
        "x-rapidapi-key": "7411a7765dmsh4c826bbf8aad02dp17f4d4jsn214ae9ecccce",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.items[0]);
        setinfo(response.data.items[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="form col-md-5  m-auto my-5">
        <div className=" d-flex">
          <input
            type="text"
            placeholder="plese enter iteam"
            value={serach}
            onChange={inputHandle}
          />
          <button className="mx-5 px-2 py-1" onClick={get}>
            get information
          </button>
        </div>
        <div className="card  my-5">
          <div className="card-header">{serach.toUpperCase()}</div>
          <div className="card-body">
            <h5>
              <span>calories</span>: {"  " + info.calories}{" "}
            </h5>
            <h5>
              <span> sugar_g </span>: {" " + info.sugar_g}{" "}
            </h5>
            <h5>
              <span> serving_size_g</span>: {" " + info.serving_size_g}{" "}
            </h5>
            <h5>
              <span>carbohydrates_g </span>: {" " + info.carbohydrates_total_g}{" "}
            </h5>
            <h5>
              <span>fiber_g</span>: {" " + info.fiber_g}{" "}
            </h5>
            <h5>
              <span>fat_total_g</span>: {" " + info.fat_total_g}{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
