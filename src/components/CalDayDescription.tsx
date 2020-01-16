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
  mark: {
    display: 'none',
    [theme.breakpoints.up(600)]: {
      display: 'block',
      '&::before': {
        content: "''",
        borderTop: '15px solid red',
        borderRight: '15px solid transparent',
        borderBottom: '15px solid transparent',
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
  },
}));

const CalDayDescription: FC<CalDayDescriptionProps> = ({ value }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mark}></div>
      <div className={classes.root}>{value}</div>
    </>
  );
};

export default CalDayDescription;
