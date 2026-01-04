import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import FavoritesPanel from "../components/FavoritesPanel";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    type: "Any",
    price: [200000, 1000000],
    bedrooms: "",
    date: null,
    postcode: ""
  });

  const filteredProperties = properties.filter((property) => {
    if (filters.type !== "Any" && property.type !== filters.type) {
      return false;
    }

    if (
      property.price < filters.price[0] ||
      property.price > filters.price[1]
    ) {
      return false;
    }

    if (filters.bedrooms !== "Any" && filters.bedrooms !== "") {
      if (property.bedrooms !== filters.bedrooms) {
        return false;
      }
    }

    if (filters.date) {
      const added = new Date(property.date);
      if (added < filters.date) {
        return false;
      }
    }

    if (filters.postcode !== "Any" && filters.postcode !== "") {
      if (property.postcode !== filters.postcode) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="layout">
        <div className="main">
            <h1>Property Search</h1>
            <SearchForm filters={filters} setFilters={setFilters} />

            <h2>Search Results ({filteredProperties.length})</h2>

            <div className="results-grid">
                {filteredProperties.map((property) => (
                <PropertyCard 
                    key={property.id} 
                    property={property} />
                ))}
            </div>
        </div>
        
        <FavoritesPanel />          
      </div>
  );
}