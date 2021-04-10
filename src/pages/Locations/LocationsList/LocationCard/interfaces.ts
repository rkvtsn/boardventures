import { CardLocationType } from 'store/reducers/interfaces';

export interface LocationCardProps {
  title: string;
  id: number;
  energyCost: number;
  type: CardLocationType;
}
