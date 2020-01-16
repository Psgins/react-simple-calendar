import React, { FC, useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

interface CalDayProps {
  outer?: boolean;
  description?: string;
  onClick: () => void;
  value: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    borderBottom: '1px solid #ccc',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
    [theme.breakpoints.up(600)]: {
      width: 'calc(100%/7)',
      textAlign: 'center',
    },
  },
  button: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  outer: {
    display: 'none',
    [theme.breakpoints.up(600)]: {
      color: '#ddd',
      display: 'block',
    },
  },
  description: {
    display: 'inline-block',
    lineHeight: '50px',
    [theme.breakpoints.up(600)]: {
      display: 'none',
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
  mark: {
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

const CalDay: FC<CalDayProps> = ({ value, outer, description, onClick }) => {
  const classes = useStyles();
  const [shouldOpenTooltip, setOpenTooltip] = useState(false);
  const theme = useTheme();
  const mediaQueryMatch = useMediaQuery<boolean>(theme.breakpoints.up(600));

  const handleTooltipOpen = () => {
    if (description) {
      if (mediaQueryMatch) {
        setOpenTooltip(true);
      }
    }
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  return (
    <Tooltip
      arrow
      open={shouldOpenTooltip}
      onOpen={handleTooltipOpen}
      onClose={handleTooltipClose}
      title={description || ''}
    >
      <div className={clsx(classes.root, { [classes.outer]: outer }, { [classes.mark]: description })}>
        <ButtonBase className={classes.button} onClick={onClick}>
          <div className={classes.displayDay}>{value}</div>
          {description && <div className={classes.description}>{description}</div>}
        </ButtonBase>
      </div>
    </Tooltip>
  );
};

export default CalDay;
