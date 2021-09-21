import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import DateInput from "./DateInput";
import { AiOutlineHeart } from "react-icons/ai";
import Loader from "./Loader";

import Footer from "./Footer";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState();
  const [date, setDate] = useState("");
  const [like, setLike] = useState(
    localStorage.getItem("liked-button") === "true"
  );

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("liked-button", like);
  }, [like]);

  if (!photoData) return <Loader />;

  async function getPhoto(date) {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`
    );
    const data = await res.json();
    setPhotoData(data);
    console.log(data);
    setLike("");
  }

  const changeDate = (e) => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    setDate(dateFromInput);
    getPhoto(dateFromInput);
  };

  function handleClick() {
    setLike(!like);
  }

  return (
    <>
      <NavBar />
      <DateInput changeDate={changeDate} />
      <div className="nasa-photo">
        {photoData.media_type === "image" ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div>
          <h1>{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="explanation">{photoData.explanation}</p>
          <div className="like-div">
            <button
              className={like ? "like-button-true" : "like-button-false"}
              type="button"
              onClick={handleClick}
            >
              {" "}
              <AiOutlineHeart />
              &nbsp;
              <span>me</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
