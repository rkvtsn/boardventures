import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store';
import { locationsSelector, openLocation } from 'store/reducers/locations';
import LocationsList from './LocationsList';
import useStyles from './styles';

const LOCATIONS_MAX = 5;

const Locations = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { locations, deck } = useSelector(locationsSelector);

  const canOpenLocation = deck.length > 0 && locations.length < LOCATIONS_MAX;

  const openLocationButtonText = canOpenLocation
    ? `Open new location - ${locations.length}`
    : `You've reached the limit of locations`;

  const handleClickNewGame = () => {
    dispatch(openLocation());
  };

  return (
    <div>
      <header className={classes.header}>
        <h1>Locations</h1>
        <h3>Left in deck: {deck.length}</h3>
      </header>
      <button
        disabled={!canOpenLocation}
        type="button"
        onClick={handleClickNewGame}
      >
        {openLocationButtonText}
      </button>
      <div className={classes.locations}>
        <LocationsList locations={locations} />
      </div>
    </div>
  );
};

export default Locations;
