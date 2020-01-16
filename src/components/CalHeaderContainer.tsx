import React, { FC } from 'react';
import { format } from 'date-fns';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CalHeaderArrow from './CalHeaderArrow';

interface CalHeaderContianerProps {
  currentMonth: number;
  onMonthChange: (nextMonth: number) => void;
}

const useStyles = makeStyles(theme => ({
  month: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

const CalHeaderContianer: FC<CalHeaderContianerProps> = ({ currentMonth, onMonthChange }) => {
  const classes = useStyles();
  const startDateOfMonth = new Date(2020, currentMonth, 1);
  const handleArrowLeftClick = () => {
    onMonthChange(-1);
  };
  const handleArrowRightClick = () => {
    onMonthChange(1);
  };
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <CalHeaderArrow disabled={currentMonth <= 0} onClick={handleArrowLeftClick} />
        <div className={classes.month}>{format(startDateOfMonth, 'MMMM yyyy')}</div>
        <CalHeaderArrow right disabled={currentMonth >= 11} onClick={handleArrowRightClick} />
      </Toolbar>
    </AppBar>
  );
};

export default CalHeaderContianer;
