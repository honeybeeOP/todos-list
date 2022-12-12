import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer"
import {About} from "./MyComponents/About";
import { Main } from './MyComponents/Main';


import React,{useState, useEffect} from 'react';
import{
  BrowserRouter,
  Route,
  Routes,
}from "react-router-dom";

function App() {
//   let initTodo;
//   if(localStorage.getItem("todos")===null){
//     initTodo = [];
//   }
//   else{
//     initTodo = JSON.parse(localStorage.getItem("todos"));
//   }



//   const onDelete = (todo)=>{
//     console.log("i am ondelete of todo", todo)
//     //deleting this was in react does not work
//     // let index = todos.indexOf(todo);
//     // todos.splice(index, 1);

//     setTodos(todos.filter((e)=>{
//       return e!==todo;
//     }));
//     console.log("deleted", todos)
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   const addTodo = (title, desc)=>{
//     console.log("i am adding this todo",title,desc)
//     let sno;
//     if(todos.length === 0){
//       sno = 0;
//     }
//     else{
//       sno = todos[todos.length-1].sno+1;
//     }
    
//     const myTodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     }
//     setTodos([...todos, myTodo]);
//     console.log(myTodo)  
//  }

//   const [todos, setTodos] = useState(initTodo);
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos])  

  return (
  
    <BrowserRouter>
    <Routes>
      {/* <Header title ="My Todos List" searchBar={false}/> */}
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
    
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
