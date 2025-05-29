import { useState } from 'react';
import './App.css';

function App() {
  let [menustate, setmenustate] = useState(false);
  return (
    <div className="App">
      <button className="micon" onClick={() => setmenustate(!menustate)}>
        {menustate ?
        <span>&times;</span>
        :
        <span>&#9776;</span>
        }
      </button>
        <div className={`menu ${menustate ? "activeMenu" : " "}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  );
}

export default App;