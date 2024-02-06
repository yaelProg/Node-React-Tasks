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

const TagsList = ({ tags, onChangeValue }) => {

  // const onChangeValue = (key, val) => {
  //   // setNewTodo({...newTodo, [key]: val})
  // }

  const onAddTag = () => {
    let newTags = [...tags, {id: 0, value: ""}]
    onChangeValue("tags", newTags);
  }

  const onDeleteTag = (id) => {
    let newTags = tags.filter(t => t.id != id)
    onChangeValue("tags", newTags);
  }

  return (
    <>
    <div>Tags:</div>
      {tags.map((tag, index) => (
        <TextField
          autoFocus
          margin="dense"
          id="tags"
          // label="Tag"
          type="text"
          value={tag}
          // onChange={(e) => { onChangeValue("tags", e.target.value) }}
          fullWidth
          variant="standard"
        />))
      }
    </>
  )
  // handleClickOpen()
};

export default TagsList;

