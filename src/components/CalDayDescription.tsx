import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface CalDayDescriptionProps {
  value: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    lineHeight: '50px',
    [theme.breakpoints.up(600)]: {
      display: 'none',
    },
  },
}));

const CalDayDescription: FC<CalDayDescriptionProps> = ({ value }) => {
  const classes = useStyles();
  return <div className={classes.root}>{value}</div>;
};

export default CalDayDescription;
