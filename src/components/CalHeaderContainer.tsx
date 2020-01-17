import React, { FC } from 'react';
import { format, getYear, addMonths } from 'date-fns';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import CalHeaderArrow from './CalHeaderArrow';
import CalWeekContainer from './CalWeekContainer';

interface CalHeaderContianerProps {
  currentYear: number;
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

const CalHeaderContianer: FC<CalHeaderContianerProps> = ({ currentYear, currentMonth, onMonthChange }) => {
  const classes = useStyles();
  const startDateOfMonth = new Date(currentYear, currentMonth, 1);
  const getDisabledArrow = (nextMonth: Date) => {
    return getYear(nextMonth) !== currentYear;
  };
  const handleArrowLeftClick = () => {
    onMonthChange(-1);
  };
  const handleArrowRightClick = () => {
    onMonthChange(1);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <CalHeaderArrow disabled={getDisabledArrow(addMonths(startDateOfMonth, -1))} onClick={handleArrowLeftClick} />
          <div className={classes.month}>{format(startDateOfMonth, 'MMMM yyyy')}</div>
          <CalHeaderArrow
            right
            disabled={getDisabledArrow(addMonths(startDateOfMonth, 1))}
            onClick={handleArrowRightClick}
          />
        </Toolbar>
      </AppBar>
      <CalWeekContainer />
    </>
  );
};

export default CalHeaderContianer;
