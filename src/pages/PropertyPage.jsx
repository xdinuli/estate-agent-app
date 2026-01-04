import { useParams } from "react-router-dom";
import properties from "../data/properties.json";
import ImageGallery from "../components/ImageGallery";
import TabsSection from "../components/TabsSection";

export default function PropertyPage() {
  const { id } = useParams();
  const property = properties.find(
    (property) => property.id === parseInt(id)
  );

  if (!property) return <p>Property not found!</p>;

  return (
    <div className="container">
      <h1>
        £{property.price.toLocaleString()} — {property.type}
      </h1>
      <p>{property.postcode}</p>

      <ImageGallery images={property.images} />

      <TabsSection property={property} />
    </div>
  );
}
