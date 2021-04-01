import React from 'react';
import { LocationsListProps } from './interfaces';
import LocationCard from './LocationCard';
import useStyle from './style';
import useHorizontalScroll from './useHorizontalScroll';

export default function LocationsList(props: LocationsListProps) {
  const { locations } = props;
  const classes = useStyle();
  const scrollRef = useHorizontalScroll();

  return (
    <div ref={scrollRef} className={classes.wrapper}>
      {locations.map(({ title, id, type }, index) => (
        <LocationCard
          type={type}
          energyCost={index + 1}
          title={title}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
}
