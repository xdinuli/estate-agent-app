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
            
            {/* Drop Zone */}
            <div 
                ref={drop} 
                className={`drop-zone ${isOver ? 'active' : ''}`}
            >
                <p>
                    {isOver ? "Release to Add!" : "Drag Properties Here +"}
                </p>
            </div>

            <hr className="fav-separator" />

            <div className="favorites-list">
                {favorites.length === 0 && (
                    <p className="empty-message">No favorite properties saved yet.</p>
                )}

                {favorites.map((property) => (
                    <div key={property.uniqueId} className="favorite-item">
                        <div className="favorite-info">
                            <h4 style={{ margin: 0 }}>{property.type} in {property.title}</h4>
                            <p className="price" style={{ margin: 0, color: '#2563eb', fontWeight: 'bold' }}>
                                Rs {property.price.toLocaleString()}
                            </p>
                        </div>
                        
                        <button 
                            className="remove-btn"
                            onClick={() => removeFavorite(property.uniqueId)}
                            aria-label="Remove property"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>

            {favorites.length > 0 && (
                <button onClick={clearFavorites} className="clear-btn" style={{ marginTop: '20px' }}>
                    Clear All Favorites
                </button>
            )}
        </div>
    );
}