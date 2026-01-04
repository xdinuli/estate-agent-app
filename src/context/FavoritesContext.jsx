import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    // 1. REMOVED the "Max 3" check
    // Now we only check for duplicates.

    // 2. Check for Duplicates
    const isDuplicate = favorites.find((item) => item.id === property.id);
    
    if (!isDuplicate) {
        setFavorites([...favorites, property]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((property) => property.id !== id));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ 
        favorites, 
        addFavorite, 
        removeFavorite, 
        clearFavorites 
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}