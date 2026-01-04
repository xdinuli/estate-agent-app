import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useDrag } from 'react-dnd';

export default function PropertyCard({ property }) {
    const { addFavorite } = useFavorites();
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'property',
        item: property, // <--- CHANGE: Pass the full property object, not just { id }
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

  return (
    <div
        ref={drag} 
        className="property-card" 
        style={{ opacity: isDragging ? 0.5 : 1 }}>
        <img 
        src={property.images[0]} // Ensure your JSON has 'images' array, or use 'picture'
        alt={property.title} 
        className="property-image" />

        <div className="property-info">
            <h3 className="property-title">{property.title}</h3>
            <h3 className="property-price">£{property.price.toLocaleString()}</h3>
            <p className="property-desc">{property.description}</p>
            <p>
                {property.bedrooms} Beds | {property.type} | {property.location}
            </p>
            
            <button onClick={() => addFavorite(property)}>
                Add to Favorites ❤
            </button>
            <Link to={`/property/${property.id}`} className="view-btn">
                View Property
            </Link>
        </div>
    </div>
  );
}