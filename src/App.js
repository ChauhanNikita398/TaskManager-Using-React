import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
        {/* <div className="header text-center" >
          <h3 >Todo List</h3>
          <button className= "btn btn-primary mt-2" >Create New category</button>
        </div> */}
      
      <TodoList/>
    </div>
  );
}

export default App;
