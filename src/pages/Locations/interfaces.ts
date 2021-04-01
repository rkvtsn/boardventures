export interface Location {
  title: string;
  id: number;
  type: LocationType;
}

export type LocationType =
  | 'swamp'
  | 'lake'
  | 'bandits'
  | 'camp'
  | 'cave'
  | 'forest';
