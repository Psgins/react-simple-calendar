import React, { FC, useMemo } from 'react';
import { addDays, getDay, getDaysInMonth } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { DateDescription } from '../types/DateDescription';
import CalDay from './CalDay';

interface CalDaysContainerProps {
  currentMonth: number;
  descriptions: Record<number, string>;
  onDescriptionChange: (change: DateDescription) => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const CalDaysContainer: FC<CalDaysContainerProps> = ({ currentMonth, descriptions, onDescriptionChange }) => {
  const classes = useStyles();

  const days = useMemo(() => {
    const startDate = new Date(2020, currentMonth, 1);
    // 0 is sunday, 6 is saturday
    let weekday = getDay(startDate);
    // shift to start at monday
    weekday = weekday === 0 ? 6 : weekday - 1;
    const dayInLastMonth = [...Array(weekday)]
      .map((value, index) => -index - 1)
      .reverse()
      .map(minus => ({
        outer: true,
        date: addDays(startDate, minus),
      }));
    const daysInMonth = getDaysInMonth(startDate);
    const daysInThisMonth = [...Array(daysInMonth)].map((value, index) => ({
      outer: false,
      date: new Date(2020, currentMonth, index + 1),
    }));
    return [...dayInLastMonth, ...daysInThisMonth];
  }, [currentMonth]);

  const handleDescriptionChange = (descriptionDate: Date) => (description: string) => {
    onDescriptionChange({ date: descriptionDate, description });
  };

  return (
    <div className={classes.root}>
      {days.map(({ outer, date }, index) => (
        <CalDay
          key={index}
          value={date}
          description={descriptions[date.getTime()]}
          outer={outer}
          onDescriptionChange={handleDescriptionChange(date)}
        />
      ))}
    </div>
  );
};

export default CalDaysContainer;
