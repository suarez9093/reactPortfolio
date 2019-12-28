import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import headshot from "./img/headshot.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} /> */}
      {/* <Avatar alt="Alex Headshot" src={headshot}/> */}
      <Avatar alt="Remy Sharp" src={headshot} className={classes.large} />
    </div>
  );
}