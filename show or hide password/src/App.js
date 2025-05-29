import { useState } from 'react';
import './App.css';

function App() {
  let [pstatus, setpstatus] = useState(false)
  return (
    <div className="App">
     <input type={pstatus ? 'text' : 'password'}/>  <button onClick={()=> setpstatus(!pstatus)}>{pstatus ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;