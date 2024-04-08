import './App.css';
import React from 'react';
import HomePage from './deisgn/homePage'
import { Provider } from 'react-redux';
import Slice from "./slices/Slice"
import Users from './components/user/userComponent'
import Todos from './components/todo/todoComponent'
import Posts from './components/post/postComponent'
import {configureStore} from "@reduxjs/toolkit"
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'; 


function App() {
  const myStore=configureStore({
  reducer:{
    Slice,
  }
})
  return (
    <>
    <Provider store={myStore}>
    <div className="App">
     
       <Router>
       <HomePage/>
          <Routes>
              <Route path='/' element={<HomePage/>}></Route>  
              <Route path='/users' element={<Users/>}></Route>  
              <Route path='/todos' element={<Todos/>}></Route> 
              <Route path='/posts' element={<Posts/>}></Route>                       
          </Routes>
       </Router>
    </div>
    </Provider>
    </>
  )
}

export default App;
