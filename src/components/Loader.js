import React from "react";
import GifLoader from "react-gif-loader";

function Loader() {
  return (
    <div className="loader">
      <p className="loader-para">
        Doggo's also waiting for NASA to respond... <br />
        Please be patient!
      </p>

      <GifLoader
        loading={true}
        alt="Dog in space-shuttle"
        imageSrc="https://media3.giphy.com/media/9tx0gy37p7oXu/200w.webp?cid=ecf05e477oexhjw5ymg8ojsi1vcjazqd0wmz90bgftq57uwm&rid=200w.webp&ct=g"
        imageStyle={{
          width: "60vw",
          marginTop: "25vh",
          borderRadius: "50px",
        }}
        overlayBackground="rgba(0,0,0,0.5)"
      />
    </div>
  );
}

export default Loader;
