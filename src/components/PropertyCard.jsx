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
        src={property.images && property.images.length > 0 ? property.images[0] : property.picture} // Ensure your JSON has 'images' array, or use 'picture'
        alt={property.type} 
        className="property-image" />

            <div className="property-info">
                <h2 className="property-title">📍{property.title}</h2>
                <h4 className="property-price">£{property.price.toLocaleString()}</h4>
                <h4 className="property-type">{property.type} 
                    <span style={{ fontWeight: 'normal', fontSize: '0.85em', color: '#777', marginLeft: '8px' }}>
                        • {new Date(property.dateAdded).toLocaleDateString()}
                    </span>
                </h4>
                <p> {property.bedrooms} Beds </p>
                <p className="property-desc">{property.shortDescription}</p>
                
                
                <button onClick={() => addFavorite(property)}>
                    Add to Favorites ❤
                </button>
                <Link to={`/property/${property.id}`} className="view-btn">
                    View Property
                </Link>
            </div>
        </div>
    </div>
    );
}