import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const weekday = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'none',
    [theme.breakpoints.up(600)]: {
      display: 'flex',
      height: 50,
      lineHeight: '50px',
      borderBottom: '1px solid #ccc',
    },
  },
  dayDisplay: {
    width: 'calc(100% / 7)',
    textAlign: 'center',
  },
}));

const CalWeekContainer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {weekday.map(day => (
        <div key={day} className={classes.dayDisplay}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalWeekContainer;
