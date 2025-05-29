import { useState } from 'react';
import './App.css';
import { tabs } from './data/tabs';

function App() {
  let[activeTabs, setactiveTabs] =useState(0)
  let[activecontent, setactivecontent] = useState(tabs[0])
  let changeData =(index)=>{
    setactiveTabs(index)
    setactivecontent(tabs[index])
  }
  return (
    <div className="App">
      <div className='outerDiv'>
        <h1 style={{textAlign:'left'}}>Law prep Vission and Mission</h1>
        <ul>
          {tabs.map((tabsItems,index)=>{
            return(
              <li>
                <button onClick={() =>changeData(index)} className={activeTabs===index ? 'activeButton' : ''}>{tabsItems.title}</button>
              </li>
            )
          })}
          
        </ul>
        {activecontent !== undefined ?
          <p>{activecontent.description}</p>
          :
          ' '
        }
      </div>
    </div>
  );
}

export default App;