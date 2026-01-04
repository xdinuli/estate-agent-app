import { useState } from "react";

export default function ImageGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="gallery">
      <img
        src={mainImage}
        alt="Property"
        className="main-image"
      />

      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={img === mainImage ? "active" : ""}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
