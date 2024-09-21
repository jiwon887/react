import logo from './logo.svg';
import React, { useState } from 'react'; 
import './App.css';


function App() {


  let [title, setTitle] = useState(['title A', 'title B', 'title C']);
  let [like, setLike] = useState(0);



  return (
    <div className="App">
      <div className='button' onClick={()=>{
        let copy = [...title];
        copy[0] = 'title D';
        setTitle(copy);
      }}>
        Button
      </div>
      <div className = "box"> 
        <h4>blog</h4> 
      </div>
      <div className = "list"> 
        <h4> { title[0] } <span onClick={ ()=>{setLike(like++)} }> Like </span> { like } </h4>
      </div>
      <div className = "list"> 
        <h4> { title[1] } </h4> 
      </div>
      <div className = "list"> 
        <h4> { title[2] } </h4> 
      </div>
      
    </div>
  );
}

export default App;
