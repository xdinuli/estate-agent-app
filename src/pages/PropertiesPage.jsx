import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";

export default function PropertiesPage() {
  return (
    <div className="layout">
      <div className="main">
        <h1>All Properties</h1>
        <p>Browse our complete collection of exclusive listings.</p>

        <div className="results-grid">
          {properties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}