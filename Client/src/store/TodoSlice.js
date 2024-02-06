import { createSlice } from "@reduxjs/toolkit";

const initValue ={
        todoArray: [],
        refetch: ()=>{}
}
const ToDoSlice = createSlice({
    name:"todoArray",
    initialState: initValue,
    reducers:
    {
        setTodo: (state, actions)=>{
            state.todoArray=actions.payload.data
            state.refetch = actions.payload.refetch
        }

    }
})
export default ToDoSlice.reducer
export const {setTodo}= ToDoSlice.actions 