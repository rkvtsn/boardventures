import React, { useCallback, useEffect, useState } from 'react';
import LocationStore from './constants';
import { Location } from './interfaces';
import LocationsList from './LocationsList';
import useStyles from './styles';

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const LOCATIONS_MAX = 5;

const Locations = () => {
  const classes = useStyles();

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
    setLocations(JSON.parse(localStorage.getItem('locations') || '[]'));
    setLocationStore(
      JSON.parse(localStorage.getItem('locationStore') || 'null') ||
        LocationStore
    );
  }, []);

  useEffect(() => {
    if (locations.length && locationStore.length) {
      localStorage.setItem('locations', JSON.stringify(locations));
      localStorage.setItem('locationStore', JSON.stringify(locationStore));
    }
  }, [locations, locationStore]);

  const canOpenLocation =
    locationStore.length > 0 && locations.length < LOCATIONS_MAX;

  const openLocationButtonText = canOpenLocation
    ? `Open new location - ${locations.length}`
    : `You've reached the limit of locations`;

  return (
    <div>
      <header className={classes.header}>
        <h1>Locations</h1>
        <h3>Left in deck: {locationStore.length}</h3>
      </header>
      <button disabled={!canOpenLocation} type="button" onClick={openLocation}>
        {openLocationButtonText}
      </button>
      <div className={classes.locations}>
        <LocationsList locations={locations} />
      </div>
    </div>
  );
};

export default Locations;
