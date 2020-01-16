import React, { FC, useState } from 'react';
import { format } from 'date-fns';
import { DateDescription } from '../types/DateDescription';
import CalDialog from './CalDialog';
import CalDay from './CalDay';

interface handleOnClickProps {
  outer?: boolean;
}

interface CalDayContainerProps {
  description?: string;
  outer?: boolean;
  value: DateDescription['date'];
  onDescriptionChange: (description: string) => void;
}

const CalDayContainer: FC<CalDayContainerProps> = ({ value, description, outer, onDescriptionChange }) => {
  const [shouldOpenDialog, setOpenDialog] = useState(false);

  const handleOnClick = ({ outer }: handleOnClickProps) => () => {
    if (!outer) {
      setOpenDialog(true);
    }
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
      <CalDay outer={outer} value={format(value, 'd')} description={description} onClick={handleOnClick({ outer })} />
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

export default CalDayContainer;
