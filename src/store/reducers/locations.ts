import { createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { CardLocation, LocationsState } from './interfaces';

const initialState: LocationsState = {
  deck: [
    { id: 1, title: 'Forest', type: 'forest' },
    { id: 2, title: 'Forest', type: 'forest' },
    { id: 3, title: 'Forest', type: 'forest' },
    { id: 4, title: 'Cave', type: 'cave' },
    { id: 5, title: 'Cave', type: 'cave' },
    { id: 6, title: 'Cave', type: 'cave' },
    { id: 7, title: 'Camp', type: 'camp' },
    { id: 8, title: 'Bandit camp', type: 'bandits' },
    { id: 9, title: 'Lake', type: 'lake' },
    { id: 10, title: 'Lake', type: 'lake' },
    { id: 11, title: 'Lake', type: 'lake' },
    { id: 12, title: 'Swamp', type: 'swamp' },
    { id: 13, title: 'Swamp', type: 'swamp' },
    { id: 14, title: 'Swamp', type: 'swamp' },
  ],
  locations: [] as CardLocation[],
};

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const openLocation = createAction('locations/open');

export default createReducer<LocationsState>(initialState, {
  [openLocation.type](state) {
    if (!state.deck.length) return state;
    const locationIndex = randomInt(0, state.deck.length - 1);
    const newLocation = state.deck[locationIndex];
    return {
      deck: state.deck.filter(({ id }) => id !== newLocation.id),
      locations: [...state.locations, newLocation],
    };
  },
});

export const locationsSelector = (state: RootState) => state.locations;

// useEffect(() => {
//   setLocations(JSON.parse(localStorage.getItem('locations') || '[]'));
//   setLocationStore(
//     JSON.parse(localStorage.getItem('locationStore') || 'null') ||
//       LocationStore
//   );
// }, []);

// useEffect(() => {
//   if (locations.length && locationStore.length) {
//     localStorage.setItem('locations', JSON.stringify(locations));
//     localStorage.setItem('locationStore', JSON.stringify(locationStore));
//   }
// }, [locations, locationStore]);
