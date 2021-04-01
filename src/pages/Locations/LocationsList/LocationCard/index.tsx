import React from 'react';
import { LocationCardProps } from './interfaces';
import useStyles from './styles';

const LocationCard = (props: LocationCardProps) => {
  const { title, energyCost } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <span>{title}</span>
        <div className={classes.energyCost}>{energyCost}</div>
      </div>
    </div>
  );
};
export default LocationCard;
