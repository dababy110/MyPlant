import React from "react";
import Tabs from "./src/components/Tabs";
import { PlantProvider } from "./src/components/PlantContext";

import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer style={{backgroundColor: "#fff",}}>
      <PlantProvider>
        <Tabs />
      </PlantProvider>
    </NavigationContainer>
  );
};

export default App;
