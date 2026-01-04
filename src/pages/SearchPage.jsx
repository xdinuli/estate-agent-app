import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

export default function SearchPage() {
  return (
    <div className="container">
      <h1>Property Search</h1>
      <div className="results-grid">
        {properties.map((property) => (
          <PropertyCard 
          key={property.id} 
          property={property} />
        ))}
      </div>
    </div>
  );
}