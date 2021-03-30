import React from 'react';
import { LocationCardProps } from './interfaces';
import useStyles from './styles';

const LocationCard = ({ title, energyCost }: LocationCardProps) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        {title}
        <div className={classes.energyCost}>{energyCost}</div>
      </div>
    </div>
  );
};
export default LocationCard;
