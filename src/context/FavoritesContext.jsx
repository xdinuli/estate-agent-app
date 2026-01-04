import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    if (!favorites.find((property) => property.id === property.id)) {
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
        clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}