import { LocationType } from 'pages/Locations/interfaces';

export interface LocationCardProps {
  title: string;
  id: number;
  energyCost: number;
  type: LocationType;
}
