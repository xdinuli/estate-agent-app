import { useState } from "react";

export default function ImageGallery({ images }) {
  // We track the INDEX now, not just the string, so we can do Next/Prev
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="gallery-container">
      {/* 1. Main "Swipe-able" Area */}
      <div className="main-image-wrapper">
        <button className="nav-btn prev" onClick={prevImage}>&#10094;</button>
        
        <img
          src={images[currentIndex]}
          alt={`View ${currentIndex + 1}`}
          className="main-image"
        />
        
        <button className="nav-btn next" onClick={nextImage}>&#10095;</button>
        
        <div className="image-counter">
            {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* 2. Thumbnails Grid underneath */}
      <div className="thumbnails-grid">
        {images.map((img, index) => (
          <button
            key={index}
            className={`thumbnail-btn ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}