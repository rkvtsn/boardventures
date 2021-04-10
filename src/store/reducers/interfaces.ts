export interface CardLocation {
  title: string;
  id: number;
  type: CardLocationType;
}

export type CardLocationType =
  | 'swamp'
  | 'lake'
  | 'bandits'
  | 'camp'
  | 'cave'
  | 'forest';

export interface Player {
  id: string;
  name: string;
  tablet: PlayerTablet;
}

export interface CardEffect {}

export interface Card {
  id: string;
  title: string;
  description: string;
  effect: CardEffect;
}

export interface CardEvent extends Card {}
export interface CardSchema extends Card {}
export interface CardItem extends Card {}
export interface CardFight extends Card {}

export interface PlayerTablet {
  energy: number;
  schemasDeck: CardSchema[];
  itemsDeck: CardItem[];
  fightDeck: CardFight[];
}

export interface LocationsState {
  deck: CardLocation[];
  locations: CardLocation[];
}

export interface GoalCondition {}

export interface Goal {
  title: string;
  description: string;
  condition: GoalCondition;
}

export interface PlayersState {
  players: Player[];
}

export interface BoardState {
  goalDeck: Goal[];
  currentGoal?: Goal;
}
