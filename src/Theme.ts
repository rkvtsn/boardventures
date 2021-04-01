import BackgroundCave from 'images/locations/cave.png';
import BackgroundLake from 'images/locations/lake.png';
import BackgroundForest from 'images/locations/forest.png';
import BackgroundSwamp from 'images/locations/swamp.png';
import { LocationType } from 'pages/Locations/interfaces';

const locations: Record<LocationType, string> = {
  cave: BackgroundCave,
  forest: BackgroundForest,
  lake: BackgroundLake,
  swamp: BackgroundSwamp,
  bandits: '',
  camp: '',
};

const theme = Object.freeze({ locations });

export default theme;

export type Theme = typeof theme;
