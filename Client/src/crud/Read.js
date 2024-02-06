import React from "react";
import useAxios from 'axios-hooks'
import {useDispatch} from 'react-redux';
import {setTodo, updateTodo} from "../store/TodoSlice";
import { useEffect, useState } from 'react';
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import TodoSlice from "../store/TodoSlice";

const Read = ({page})=>{
  const [{data, loading, error},refetch] = useAxios(`http://localhost:2024/api/${page}`);

const dispatch = useDispatch();

if(loading){
  return <p>Loading...</p>
}

if(error){
  return <p>Error: {error.message}</p>
}

switch (page) {
  case 'todos':
    dispatch(setTodo({data, refetch}))   
    break;
  case 'users':
    // dispatch(setTodo({data, refetch}))   
    break;
  case 'posts':
    // dispatch(setTodo({data, refetch}))   
    break;
  case 'photos':
    // dispatch(setTodo({data, refetch}))   
    break;
  default:
    break;
}

return(
  <>
  </>
)};

export default Read;



