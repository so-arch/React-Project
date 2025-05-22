import { useState } from 'react';
import './App.css';

function App() {
  let [modalstatus, setmodalstatus] = useState(false);
  return (
    <div className="App">
      <button className='en' onClick={() => setmodalstatus(true)}>Enquer Now</button>
      <div onClick={() =>setmodalstatus(false)}className={`modelOverLay ${modalstatus ? 'modalshow' : ' '}` }></div>
      <div className={`modalDiv ${modalstatus ? 'showmodaldiv' : ' '}`}>
        <h3>Enquiry Now <span onClick={() =>setmodalstatus(false)}>&times;</span></h3>
      </div>
    </div>
  );
}

export default App;