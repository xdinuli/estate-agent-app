import { useDrop } from 'react-dnd';
import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesPanel() {
    const { 
        favorites, 
        addFavorites, 
        removeFavorite, 
        clearFavorites 
    } = useFavorites();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'property',
        drop: (item) => addFavorites(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div 
            ref={drop}
            className="favorites-panel"
            style={{ backgroundColor: isOver ? '#f0f0f0' : 'white' }}>

            <h2>Favorites ❤</h2>
            {favorites.length === 0 && <p>No favorite properties yet. Drag and drop a property here to add it to your favorites.</p>}

            {favorites.map((property) => (
                <div 
                key={property.id} 
                className="favorite-item">
                    <span>
                        <h3>{property.title}</h3>
                        £{property.price.toLocaleString()} — {property.post}
                    </span>
                    
                    <button onClick={() => removeFavorite(property.id)}>
                        Remove
                    </button>
                </div>
            ))}

            {favorites.length > 0 && (
                <button
                onClick={clearFavorites} 
                className="clear-btn">
                    Clear All Favorites
                </button>
            )}
        </div>
    );
}