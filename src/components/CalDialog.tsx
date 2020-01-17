import React, { FC, useState, FormEvent } from 'react';
import { format } from 'date-fns';
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';
import { DateDescription } from '../types/DateDescription';

interface CalDialogProps extends DateDescription {
  open: boolean;
  onSave: (description: string) => void;
  onCancel: () => void;
}

const CalDialog: FC<CalDialogProps> = ({ open, date, description, onSave, onCancel }) => {
  const [inputDescription, setInputDescription] = useState(description || '');

  const handleOnCancel = () => {
    setInputDescription(description || '');
    onCancel();
  };

  const handleOnSave = (e: FormEvent) => {
    e.preventDefault();
    onSave(inputDescription);
  };

  return (
    <Dialog fullWidth open={open} maxWidth="sm">
      <form onSubmit={handleOnSave}>
        <DialogTitle>{format(date, 'd MMMM yyyy')}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Description"
            value={inputDescription}
            onChange={e => setInputDescription(e.target.value.substr(0, 40))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel}>Cancel</Button>
          <Button type="submit" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CalDialog;
