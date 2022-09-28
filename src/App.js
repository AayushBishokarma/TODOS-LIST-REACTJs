import React,{ useState } from 'react';

const App = () =>{
  const[userinput, setUserinput]=useState([])
  const[todos, setTodos]=useState([])
  const addData = () =>{
    setTodos([...todos,userinput])

  }
 return <div>
 
  <h2>Todos List</h2>
  <input onChange={(event)=> setUserinput([event.target.value])} type="text"></input>
  <br/>
  <br/>
  <button onClick={()=>addData()}>Add</button>
  <ul>{
    todos.map((todo,index)=> <li key={(index)}>{todo}</li>)
}
</ul>
  </div>
 
  
}

export default App;
