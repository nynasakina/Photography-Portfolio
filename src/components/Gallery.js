import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [bigImage, setBigImage] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  function handleClick(event) {
    setBigImage(event.target.src);
  }

  const fetchUrl = (category) => {
    return `https://firestore.googleapis.com/v1/projects/project2-ga-b08dc/databases/(default)/documents/${category}`;
  };

  const handleClickCat = (e) => {
    fetchPost(fetchUrl(e.target.name));
    console.log(e.target.name);
  };

  useEffect(() => {
    fetchPost(fetchUrl("wedding"));
    // fetchPost(fetchUrl("images"));
  }, []);

  const fetchPost = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.documents[0].fields.img.stringValue);
    console.log(data.documents[5].fields.img.stringValue);
    setThumbnails(data.documents);
    setBigImage(data.documents[0].fields.img.stringValue);
  };

  return (
    <>
      <br />
      <center>
        <h6>Click the buttons below to view gallery</h6>
        <button onClick={handleClickCat} name="wedding">
          Wedding
        </button>
        <button onClick={handleClickCat} name="outdoor">Prewedding</button>
        <button onClick={handleClickCat} name="travel">Travel</button>
      </center>
      <br />
      <div className="thumbnails" />
      {/* insert thumbnails pictures here */}
      {thumbnails.map((data, index) => {
        return (
          <img
            key={index}
            src={data.fields.img.stringValue}
            onClick={handleClick}
          ></img>
        );
      })}

      <div className="bigImage">
        <img src={bigImage} />
      </div>
    </>
  );
};

export default Gallery;

// https://firestore.googleapis.com/v1/projects/project2-ga-b08dc/databases/(default)/documents/images
