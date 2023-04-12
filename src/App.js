import { useState } from 'react';
import './App.css';
import { editableInputTypes } from '@testing-library/user-event/dist/utils';

function App() {
  const [toDo,setToDo]=useState("");
  const [toDos,setToDos]=useState([]);
  const onChange=(event)=>setToDo(event.target.value);
  const onSubmit=(event)=>{
    event.preventDefault();
    if(toDo===""){
      return;
    }
    setToDos((currnetArray)=>[toDo,...currnetArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My ToDos  ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type='text'
          placeholder='Write your plan...'        
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item,index)=>
        (<li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
