import { createUseStyles } from 'react-jss';
import { Theme } from 'Theme';
import { LocationCardProps } from './interfaces';

export default createUseStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    margin: 10,
    boxShadow: `0 0 10px rgba(0,0,0,0.1)`,
    border: `1px solid #eee`,
    borderRadius: 10,
    height: 320,
    minWidth: 220,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: (props: LocationCardProps) =>
      `url(${theme.locations[props.type]})`,
    '&:hover': {
      border: `1px solid #ccc`,
      cursor: 'pointer',
      boxShadow: `0 0 10px rgba(0,0,0,0.5)`,
    },
  },
  title: {
    marginTop: 5,
    display: 'flex',
    justifyContent: 'center',
    '& span': {
      color: 'white',
      background: 'rgba(0,200,100,0.7)',
      borderRadius: 2,
      minWidth: '30%',
      padding: '2px 8px',
    },
  },
  energyCost: {
    background: 'rgba(250,0,0,0.9)',
    color: 'white',
    padding: `0px 3px`,
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    textAlign: 'center',
    right: 5,
    top: 5,
    width: 20,
    height: 25,
    justifyContent: 'center',
  },
}));
