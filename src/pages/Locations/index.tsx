import React, { useCallback, useEffect, useState } from 'react';
import LocationStore from './constants';
import { Location } from './interfaces';
import LocationsList from './LocationsList';

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const LOCATIONS_MAX = 5;

const Locations = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [locationStore, setLocationStore] = useState<Location[]>([]);

  const openLocation = useCallback(() => {
    if (!locationStore.length) return;
    const locationIndex = randomInt(0, locationStore.length - 1);
    const newLocation = locationStore[locationIndex];
    setLocationStore((prev) => prev.filter(({ id }) => id !== newLocation.id));
    setLocations((prev) => [...prev, newLocation]);
  }, [locationStore]);

  useEffect(() => {
    setLocations([]);
    setLocationStore(LocationStore);
  }, [setLocations]);

  const canOpenLocation =
    locationStore.length > 0 && locations.length < LOCATIONS_MAX;

  return (
    <div>
      <h1>Locations</h1>
      <h3>Left in deck: {locationStore.length}</h3>
      <button disabled={!canOpenLocation} type="button" onClick={openLocation}>
        Open new location
      </button>
      <LocationsList locations={locations} />
    </div>
  );
};

export default Locations;
