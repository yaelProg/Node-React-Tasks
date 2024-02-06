// import logo from './logo.svg';
import Navbar from './Navbar';
import {Route,Routes} from 'react-router'
import Todos from './pages/Todos';
import Users from './pages/Users';
import Photos from './pages/Photos';
import Posts from './pages/Posts';
import Home from './Home_page';
import TodoSlice from './store/TodoSlice';
import { Provider } from 'react-redux';
import { configure } from 'axios-hooks';
import { configureStore } from '@reduxjs/toolkit';
import Read from './crud/Read';

const myStore =configureStore({
  reducer:
  {
    TodoSlice
  }
})
function App() {
  return (
    <>
      <Provider store = {myStore}>
        <Read page ={'todos'}/>
          <Navbar/>
          <Routes>
            <Route path="/Users" element ={<Users/>} />
            <Route path="/Posts" element ={<Posts/>} />
            <Route path="/Todos" element ={<Todos/>} />
            <Route path="/Photos" element ={<Photos/>} />
          </Routes>
          {/* <Todo_design/> */}
      </Provider>
    </>
  );
}

export default App;
