import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useDrag } from 'react-dnd';

export default function PropertyCard({ property }) {
    const { addFavorite } = useFavorites();
    
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'property',
        item: property, 
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

  return (
    <div
        ref={drag} 
        className="property-card" 
        style={{ opacity: isDragging ? 0.5 : 1 }}>

        <div className="card-image-container">
            <img 
            src={property.images && property.images.length > 0 ? property.images[0] : property.picture} 
            alt={property.type} 
            className="property-image" />

            <div className="property-info">
                <h3 className="property-title">📍 {property.title}</h3>
                <h4 className="property-price">Rs {property.price.toLocaleString()}</h4>
                
                <div className="property-type">
                    {property.type} • {property.bedrooms} Beds
                    <br/>
                    <span style={{ fontSize: '0.85em', color: '#888' }}>
                       Added: {new Date(property.dateAdded).toLocaleDateString()}
                    </span>
                </div>

                <p className="property-desc">
                    {property.shortDescription}
                </p>
                
                <button onClick={() => addFavorite(property)}>
                    ❤ Add to Favorites
                </button>
                <Link to={`/property/${property.id}`} className="view-btn">
                    View Details
                </Link>
            </div>
        </div>
    </div>
    );
}