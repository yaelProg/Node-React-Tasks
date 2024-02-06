import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from "../crud/Delete";
import Edit from "../components/edit/Edit";
import CheckBox from '@mui/material/Checkbox';
import UpdateCompleted from "../crud/UpdateCompleted";

const Todo_design = ({ todo }, refetch) => {
  const [isChecked, setIsChecked] = React.useState(todo.completed)

  const UpdateCheck = () => {
    setIsChecked(!isChecked)
    UpdateCompleted(todo._id)
  }

  const DeleteTodo = () => {
    Delete(`todos/${todo._id}`)
  }

  const [openDialog, setOpenDialog] = React.useState(false)

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}><br />
      <CheckBox
        checked={isChecked}
        onChange={(e) => UpdateCheck()}
      />

      <p>{todo.title}</p>
      {todo.completed ? <p>true</p> : <p>false</p>}
      {todo.tags.map(t => <p>{t}</p>)}
      <p>{todo.createdAt}</p>

      <Fab color="secondary" aria-label="edit" onClick={() => setOpenDialog(true)}>
        <EditIcon />
        {openDialog && <Edit saveAction={"update"} todo={todo} />}
      </Fab>

      <Fab color="#8bc34a" aria-label="delete" onClick={DeleteTodo}>
        <DeleteIcon />
      </Fab>
    </Box>

  )
}

export default Todo_design;
