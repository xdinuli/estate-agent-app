import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
        <img 
        src={property.images[0]} 
        alt={property.title} 
        className="property-image" />
        <div className="property-info">
            <h3 className="property-title">{property.title}</h3>
            <h3 className="property-price">${property.price.toLocaleString()}</h3>
            <p className="property-desc">{property.description}</p>
            <p>
                {property.bedrooms} Beds | {property.type} | {property.location}
            </p>

            <Link to={`/property/${property.id}`} className="view-btn">
                View Property
            </Link>
        </div>
    </div>
  );
}