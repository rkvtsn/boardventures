import { createUseStyles } from 'react-jss';

export default createUseStyles({
  wrapper: {
    position: 'relative',
    padding: 5,
    margin: 10,
    boxShadow: `0 0 10px rgba(0,0,0,0.1)`,
    border: `1px solid #eee`,
    borderRadius: 10,
    height: 480,
    minWidth: 320,
    '&:hover': {
      border: `1px solid #ccc`,
      cursor: 'pointer',
      boxShadow: `0 0 10px rgba(0,0,0,0.5)`,
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  energyCost: {
    background: 'red',
    color: 'white',
    padding: `0px 3px`,
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    textAlign: 'center',
    right: 5,
    width: 20,
    height: 25,
    justifyContent: 'center',
  },
});
