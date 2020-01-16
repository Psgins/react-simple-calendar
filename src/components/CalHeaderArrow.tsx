import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';

interface CalHeaderArrowProps {
  disabled?: boolean;
  right?: boolean;
  onClick: () => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
  },
}));

const CalHeaderArrow: FC<CalHeaderArrowProps> = ({ disabled, right, onClick }) => {
  const classes = useStyles();
  return (
    <IconButton disabled={disabled} className={classes.root} onClick={onClick}>
      {!right ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  );
};

export default CalHeaderArrow;
