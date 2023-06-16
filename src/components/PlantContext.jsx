import React, { createContext, useState } from 'react';

export const PlantContext = createContext();

export const PlantProvider = ({ children }) => {
  const [plantName, setPlantName] = useState('Nombre De La Planta');

  return (
    <PlantContext.Provider value={{ plantName, setPlantName }}>
      {children}
    </PlantContext.Provider>
  );
};