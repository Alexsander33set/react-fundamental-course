import './App.css';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, settime] = useState("");
  const [todo, setTodo] = useState([]);
  const [loading, setloading] = useState(false);
  
  function handleNewTodo(e) {
    e.preventDefault();
    console.log(title);
    setTitle('')
    
  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <main>
        <div id='todoApp'>
          <header><h2>Todo</h2></header>
          <form className='formTodo' onSubmit={handleNewTodo}>
            Nova Task
            <div>
              <label htmlFor='todoTitle'>Titulo:</label>
              <input id='todoTitle' name='title' placeholder='título' required
                    onChange={(e)  => setTitle(e.target.value)} value={title || ''}  />
            </div>
            <button type='submit'>Enviar</button>
          </form>
          <div className='todoList'>
            <h2>Lista de tarefas</h2>
            <p>{todo.length !== 0 ? todo.length + " Tasks" : "Nenhuma tarefa registrada" }</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
