import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsSection({ property }) {
  return (
    <Tabs className="property-tabs">
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Location</Tab>
      </TabList>

      {/* Panel 1: Long Description */}
      <TabPanel>
        <div className="tab-content">
          <p>{property.longDescription}</p>
        </div>
      </TabPanel>

      {/* Panel 2: Floor Plan */}
      <TabPanel>
        <div className="tab-content center-content">
          {/* FIX 1: Ensure casing matches your JSON (floorPlan) in both places */}
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

      {/* Panel 3: Location (Google Map) */}
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
            // FIX 2 & 3: Fixed the ${} syntax and used a standard embed URL
            src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&hl=es&z=14&output=embed`}
          />
        </div>
      </TabPanel>
    </Tabs>
  );
}