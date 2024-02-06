import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { pink } from '@mui/material/colors';
import Update from "../../crud/Update";
import Create from '../../crud/Create';
import TagsList from './TagsList';
import { setTodo } from '../../store/TodoSlice';
// import QuestionValues from 

const Edit = ({saveAction, todo}) => {

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [newTodo, setNewTodo] = React.useState(todo)

  const onChangeValue = (key, val) => {
    setNewTodo({...newTodo, [key]: val})
  }

  const handleSave = () => {
    save();
    debugger
    setTodo();
    handleClose();
  }

  const save = async () => {
    switch (saveAction) {
      case 'update':
        await Update(`todos`, newTodo)
        break;
      case 'post':
        await Create(`todos`, newTodo)
        break;
      default:
        break;
    }

  }

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Todo</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={newTodo.title}
            onChange={(e) => {onChangeValue("title", e.target.value)}}
            fullWidth
            variant="standard"
          />
          {/* <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Tags"
            type="text"
            value={newTodo.tags}
            onChange={(e) => {onChangeValue("tags", e.target.value.split(","))}}
            fullWidth
            variant="standard"
          /> */}
          <TagsList
            tags={newTodo.tags}
          />
          {/* <Tags_design/> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
  // handleClickOpen()
};

export default Edit;

