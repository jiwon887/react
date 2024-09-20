import logo from './logo.svg';
import React, { useState } from 'react'; 
import './App.css';


function App() {

  // useState 사용법 -> 변수명[변수, 변수 수정 함수] = useState(['a','b','c'])

  let [title, setTitle] = useState(['title A', 'title B', 'title C']);

  return (
    <div className="App">
      <div className = "box"> 
        <h4>blog</h4> 
      </div>
      <div className = "list"> 
        <h4> { title[0] } </h4> 
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
