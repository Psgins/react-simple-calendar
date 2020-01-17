import React, { FC, useState } from 'react';
import CalHeaderContainer from './CalHeaderContainer';
import CalDaysContainer from './CalDaysContainer';
import { makeStyles } from '@material-ui/core/styles';
import { getMonth, getYear } from 'date-fns';
import { DateDescription } from '../types/DateDescription';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up(600)]: {
      maxWidth: 600,
    },
  },
  footer: {
    display: 'block',
    [theme.breakpoints.up(600)]: {
      display: 'none',
    },
  },
}));

const CalContianer: FC = () => {
  const classes = useStyles();
  const today = new Date();
  const currentYear = getYear(today);
  const [currentMonth, setCurrentMonth] = useState(getMonth(today));
  const [descriptions, setDescriptions] = useState<Record<number, string>>({});

  const handleMonthChange = (nextMonth: number) => {
    setCurrentMonth(currentMonth + nextMonth);
  };

  const handleDescriptionChange = (change: DateDescription) => {
    let nextDescriptions = { ...descriptions };
    if (change.description) {
      nextDescriptions[change.date.getTime()] = change.description;
    } else {
      delete nextDescriptions[change.date.getTime()];
    }
    setDescriptions(nextDescriptions);
  };

  return (
    <div className={classes.root}>
      <CalHeaderContainer currentYear={currentYear} currentMonth={currentMonth} onMonthChange={handleMonthChange} />
      <CalDaysContainer
        currentMonth={currentMonth}
        descriptions={descriptions}
        onDescriptionChange={handleDescriptionChange}
      />
      <div className={classes.footer}>
        <CalHeaderContainer currentYear={currentYear} currentMonth={currentMonth} onMonthChange={handleMonthChange} />
      </div>
    </div>
  );
};

export default CalContianer;
