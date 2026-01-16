import { useState } from "react";
import SearchForm from "../components/SearchForm";
import properties from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import FavoritesPanel from "../components/FavoritesPanel";

export default function SearchPage() {
  const [filters, setFilters] = useState({
    type: "Any",
    price: [200000, 1000000],
    bedrooms: "Any",
    date: null,
    location: "Any"
  });

  const filteredProperties = properties.filter((property) => {
    // Type Filter
    if (filters.type !== "Any" && property.type !== filters.type) {
      return false;
    }

    // Price Filter
    if (
      property.price < filters.price[0] ||
      property.price > filters.price[1]
    ) {
      return false;
    }

    // Bedroom Filter
    if (filters.bedrooms !== "Any") {
      if (property.bedrooms < filters.bedrooms) {
        return false;
      }
    }

    // Date Filter
    if (filters.date) {
      const added = new Date(property.dateAdded);
      if (added < filters.date) {
        return false;
      }
    }

    // Location Filter
    if (filters.location !== "Any") {
      if (!property.title.includes(filters.location)) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="layout">
        <div className="main">
            <h1 style={{ marginBottom: '20px' }}>Find Your Dream Home</h1>
            <SearchForm filters={filters} setFilters={setFilters} />

            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
                Search Results ({filteredProperties.length})
            </h2>

            <div className="results-grid">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                    <PropertyCard 
                        key={property.id} 
                        property={property} />
                    ))
                ) : (
                    <p>No properties match your search criteria.</p>
                )}
            </div>
        </div>
        
        <FavoritesPanel />          
      </div>
  );
}