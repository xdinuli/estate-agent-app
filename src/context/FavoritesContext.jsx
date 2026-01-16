import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (property) => {
    const newFavorite = { 
        ...property, 
        uniqueId: Date.now() + Math.random() 
    };
    setFavorites((prev) => [...prev, newFavorite]);
  };

  const removeFavorite = (uniqueId) => {
    setFavorites((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}