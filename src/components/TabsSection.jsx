import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsSection({ property }) {
  return (
    <Tabs className="property-tabs">
      <TabList>
        <Tab>Key Details</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Location on Map</Tab>
      </TabList>

      {/* 2. Key Details */}
      <TabPanel>
        <div className="tab-content">
          <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", lineHeight: "2" }}>
            <li style={{ borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                <strong>Property Type:</strong> <span>{property.type}</span>
            </li>
            <li style={{ borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                <strong>Bedrooms:</strong> <span>{property.bedrooms}</span>
            </li>
            <li style={{ borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                <strong>Price:</strong> <span>Rs {property.price.toLocaleString()}</span>
            </li>
            <li style={{ borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                <strong>Location:</strong> <span>{property.title}</span>
            </li>
            <li style={{ borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between" }}>
                <strong>Date Listed:</strong> <span>{new Date(property.dateAdded).toLocaleDateString()}</span>
            </li>
          </ul>
        </div>
      </TabPanel>

      {/* 3. Floor Plan */}
      <TabPanel>
        <div className="tab-content center-content">
          {property.floorplan ? (
             <img 
                src={property.floorplan} 
                alt="Property Floor Plan" 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} 
             />
          ) : (
             <p>Floor plan not available for this property.</p>
          )}
        </div>
      </TabPanel>

      {/* 4. Location (Maps) */}
      <TabPanel>
        <div className="tab-content">
          <iframe
            title="Property Location"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&hl=en&z=14&output=embed`}
          />
        </div>
      </TabPanel>   
    </Tabs>
  );
}