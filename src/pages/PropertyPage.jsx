import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import TabsSection from "../components/TabsSection";
import "../App.css";

export default function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) return <p>Property not found!</p>;

  return (
    <div className="property-details-container">
      
      {/* 1. Header Section */}
      <div className="property-header">
        <h1>
          Rs. {property.price.toLocaleString()}
        </h1>
        <h2>
          {property.type} in {property.title}
        </h2> 
      </div>

      {/* 2. Gallery */}
      <ImageGallery images={property.images} />

      {/* 3. Description */}
      <div className="full-description">
        <h3>About this property</h3>
        <p>{property.longDescription}</p>
      </div>

      {/* 4. Tabs (Floorplan, Map) */}
      <TabsSection property={property} />
      
    </div>
  );
}