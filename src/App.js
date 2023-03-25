import logo from './logo.svg';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import TodoList from './components/TodoList';
import 'font-awesome/css/font-awesome.min.css'


const App=()=>{
  return (
    <>
      <TodoList/>
    </>
  );
}

export default App;
