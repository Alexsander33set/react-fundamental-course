import './App.css';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, settime] = useState("");
  const [todo, setTodo] = useState([]);
  const [loading, setloading] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <div id='todoApp'>
          <header><h2>Todo</h2></header>
          <div className='formTodo'>
            Form add task
          </div>
          <div>
            <h2>Lista de tarefas</h2>
            <p>{todo.length !== 0 ? todo.length + " Tasks" : "Nenhuma tarefa registrada" }</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
