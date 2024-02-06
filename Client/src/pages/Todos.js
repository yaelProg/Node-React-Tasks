import React from "react";
import Todo_design from "../designs/Todo_design";
import Edit from "../components/edit/Edit";
import { useSelector } from "react-redux";
import AddTaskIcon from '@mui/icons-material/AddTask';

const Todos = () => {
  const todoArray = useSelector((myStore)=>myStore.TodoSlice.todoArray)
  
  const emptyTodo = {_id: "", title: "", tags: ""};

  const [openDialog, setOpenDialog] = React.useState (false)

    return(
        <div>
            {todoArray ? todoArray.map(todo=> <Todo_design todo = {todo} />) : <p>No todos</p>};
            <AddTaskIcon  aria-label="add" onClick={()=>setOpenDialog(true)}>
            </AddTaskIcon >
            {openDialog && <Edit saveAction={"post"} todo={emptyTodo}/>}
        </div>
    )
};

export default Todos;

