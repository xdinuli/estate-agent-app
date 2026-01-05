import { useDrop } from 'react-dnd';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesPanel() {
    const { 
        favorites, 
        addFavorite, 
        removeFavorite, 
        clearFavorites 
    } = useFavorites();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'property',
        drop: (item) => addFavorite(item), 
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div className="favorites-panel">
            <h2>Favorites ❤</h2>
            
            <div 
                ref={drop} 
                className={`drop-zone ${isOver ? 'active' : ''}`}
            >
                <p>
                    {isOver ? "Drop to Add!" : "Drag Properties Here +"}
                </p>
            </div>

            <div className="favorites-list">
                {favorites.length === 0 && (
                    <p className="empty-message">No favorite properties saved yet.</p>
                )}

                {favorites.map((property) => (
                    <div key={property.id} className="favorite-item">
                        <div className="favorite-info">
                            <h4>{property.type} in {property.location}</h4>
                            <p className="price">£{property.price.toLocaleString()}</p>
                        </div>
                        
                        <button 
                            className="remove-btn"
                            onClick={() => removeFavorite(property.id)}
                            aria-label="Remove property"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>

            {favorites.length > 0 && (
                <button onClick={clearFavorites} className="clear-btn">
                    Clear All Favorites
                </button>
            )}
        </div>
    );
}