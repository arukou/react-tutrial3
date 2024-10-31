import { useState } from "react";

export default function App() {
    const images = [
        {src:"images/pic1.jpg", alt:"Closeup of a human eye"},
        {src:"images/pic2.jpg", alt:"Rock that looks like a wave"},
        {src:"images/pic3.jpg", alt:"Purple and white pansies"},
        {src:"images/pic4.jpg", alt:"Section of wall from a pharoah's tomb"},
        {src:"images/pic5.jpg", alt:"Large moth on a leaf"}
    ];
    
    const [fullSrc, setFullSrc] = useState("images/pic1.jpg");
    const [fullAlt, setFullAlt] = useState("Closeup of a human eye");
    const handleImageClick = (image) => {
      setFullSrc(image.src);
      setFullAlt(image.alt);
    }

    const [darklight, setDarklight] = useState("Darken")
    const handleOverlayClick = () => {
      if(darklight === "Darken") {
        setDarklight("Lighten");
      }else{
        setDarklight("Darken");
      }
    }

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={fullSrc}
            alt={fullAlt}
          />
          {darklight === "Lighten" && <div className="overlay"></div>}
          <button className="dark" onClick={handleOverlayClick}>{darklight}</button>
        </div>
        <div className="thumb-bar">
          {images.map((image) => {
            return(
              <img key={image.src} src={image.src} alt={image.alt}
                onClick={() => handleImageClick(image)}
              />
            );
          })}
        </div>
      </>
    );
  }