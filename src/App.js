import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {TodoItem} from "./MyComponents/TodoItem";
import {Todos} from "./MyComponents/Todos";

function App() {
  return (
    <>
      <Header title ="MyTodosList" searchBar={true}/>
      <TodoItem/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
