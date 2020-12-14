import React, { useState } from "react";
import "./styles.css";
var topeRateMovie = {
  Bollywood: [
    { name: " Tanhaji(2020)", rating: "7.6" },
    { name: "Chhapaak (2020)", rating: "5.1" },
    { name: " Panga (2020)", rating: "6.8" },
    { name: "Jawaani Jaaneman (2020)", rating: "6.6" }
  ],
  sandalwood: [
    { name: "Avane Srimannarayana(2019)", rating: "7.0" },
    { name: "Pailwaan(2019)", rating: "6.4" },
    { name: "Kurukshetra(2019)", rating: "7.0" },
    { name: "Yajamana(2019)", rating: "6.0" }
  ],
  Tollywood: [
    { name: "Colour Photo (2020)", rating: "8.3" },
    { name: "Uma Maheswara Ugra Roopasya(2020)", rating: "7.9" },
    { name: "Aakasham Nee Haddhu Ra(2020)", rating: "8.8" },
    { name: "Ala Vaikunthapurramuloo (2020)", rating: "7.1" }
  ],
  Kollywood: [
    { name: " Kavalthurai Ungal Nanban (2020)", rating: "8.1" },
    { name: " Soorarai Pottru (2020)", rating: "8.8" },
    { name: " Andhaghaaram (2020)", rating: "7.9" },
    { name: "Oh My Kadavule (2020)", rating: "8.1" }
  ]
};
var movieWeknow = Object.keys(topeRateMovie);

export default function App() {
  var [selectedMove, setMove] = useState("Bollywood");
  function getBg(index) {
    if (index % 2 === 1) {
      return "white";
    }
    return "gray";
  }
  function movieClikeHandler(movie) {
    // console.log("clckied",movie);

    setMove(movie)
  }

  return (
    <div className="App">
      <h1
        style={{
          color: "#34D399",
          fontWeight: "bolder",
          textAlign: "center",
          fontSize:"3.5rem"
        }}
      >
        Tope rating movie in IMDB
      </h1>
      <h4
        style={{
          color: "#4C1D95",
          textAlign: "center",
          fontWeight: "bolder",
          padding: "1rem",
          fontSize: "2.2rem"
        }}
      >
        Here the some top rating movie
      </h4>
      {movieWeknow.map((movie) => {
        return <button onClick={()=>movieClikeHandler(movie)}    style={{
          cursor: "pointer",
          backgroundColor: "#10B981",
          borderRadius: "0.5rem",
          margin: "1rem 0.3rem",
          fontWeight: "bolder",
          fontSize: "larger",
          textAlign: "center",
          padding: "0.5rem  1rem",
          border: "2px solid black"
          
        }}> {movie} </button>;
      })}
      <div>
        <ul>
          {topeRateMovie[selectedMove].map((movie, index) => (
            <li key={movie.name} style={{
              listStyle: "none",
              padding: "0.6rem",
              margin: "0.5rem 0rem",
              borderRadius: "1rem",
              backgroundColor: getBg(index),
              boxShadow: "gray",
              border: "1.4px solid #D1D5DB",
              width: "60%",
              
            }}>
              {""}
              <div>
                Dash name:{movie.name}
                {""}
              </div>
              <div>
                Dash rating:{movie.rating}
                {""}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
