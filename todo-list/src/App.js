import { useState } from 'react';
import './App.css';

function App() {
  let [todolist, settodolist] = useState([]);
  let saveTodolist = (event) =>{
    let toname= event.target.toname.value;
    if(!todolist.includes(toname)){
      let finaltodolist = [...todolist,toname]
      settodolist(finaltodolist)
    }
    else{
      alert("Todo name already exsists")
    }
    event.preventDefault();
  }
  let list = todolist.map((value,index)=>{
    return(
    <ToDoItems values={value} key={index} indexNumber={index} todolist={todolist} settodolist={settodolist}/>
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveTodolist}>
        <input type='text' name='toname'/>  <button>Save</button>
      </form>
      <div className='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;
function ToDoItems({values, indexNumber, todolist, settodolist}) {
  let [status, setstatus] = useState(false)

  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    settodolist(finalData)
  }
  let checkStatus=()=>{
    setstatus(!status)
  }
  return(
    <li className={(status)? 'completetodo': ' '} onclick={checkStatus}>{indexNumber + 1}{values}<span onClick={deleteRow}>&times;</span></li>
  )
}