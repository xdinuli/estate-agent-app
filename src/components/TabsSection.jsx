import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function TabsSection({ property }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Map</Tab>
      </TabList>

      <TabPanel>
        <p>{property.longDescription}</p>
      </TabPanel>

      <TabPanel>
        <img
          src={property.floorPlan}
          alt="Floor plan"
          className="floorplan"
        />
      </TabPanel>

      <TabPanel>
        <iframe
          title="Google Map"
          width="100%"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${property.lat},${property.lng}&output=embed`}
        />
      </TabPanel>
    </Tabs>
  );
}
