import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsSection({ property }) {
  return (
    <Tabs className="property-tabs">
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Location on Map</Tab>
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
          {property.floorPlan ? (
             <img 
                src={property.floorPlan} 
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
            // Fixed the URL syntax here to be a standard embed
            src={`https://maps.google.com/maps?q=${property.lat || 51.505},${property.lng || -0.09}&z=14&output=embed`}
          />
        </div>
      </TabPanel>
    </Tabs>
  );
}
