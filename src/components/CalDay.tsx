import React, { FC, useState } from 'react';
import { format } from 'date-fns';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CalDayDescription from './CalDayDescription';
import { DateDescription } from '../types/DateDescription';
import CalDialog from './CalDialog';

interface CalDayProps {
  description?: string;
  outer?: boolean;
  value: DateDescription['date'];
  onDescriptionChange: (description: string) => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: '1px solid #ccc',
    justifyContent: 'flex-start',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
    [theme.breakpoints.up(600)]: {
      width: 'calc(100% / 7)',
      textAlign: 'center',
    },
  },
  outer: {
    display: 'none',
    [theme.breakpoints.up(600)]: {
      display: 'flex',
      color: '#ccc',
    },
  },
  displayDay: {
    display: 'inline-block',
    lineHeight: '50px',
    width: 50,
    height: 50,
    textAlign: 'center',
    [theme.breakpoints.up(600)]: {
      width: '100%',
    },
  },
}));

const CalDay: FC<CalDayProps> = ({ value, description, outer, onDescriptionChange }) => {
  const classes = useStyles();
  const [shouldOpenDialog, setOpenDialog] = useState(false);

  const handleOnClick = () => {
    setOpenDialog(true);
  };

  const handleDialogOnSave = (description: string) => {
    onDescriptionChange(description);
    setOpenDialog(false);
  };

  const handleDialogOnCancel = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <ButtonBase className={clsx(classes.root, { [classes.outer]: outer })} onClick={handleOnClick}>
        <div className={classes.displayDay}>{format(value, 'd')}</div>
        {description && <CalDayDescription value={description} />}
      </ButtonBase>
      <CalDialog
        open={shouldOpenDialog}
        date={value}
        description={description}
        onSave={handleDialogOnSave}
        onCancel={handleDialogOnCancel}
      />
    </>
  );
};

export default CalDay;
