import logo from './logo.svg';
import './App.css';


function App() {

  // useState 사용법 -> 변수명[변수, 변수 수정 함수] = useState(['a','b','c'])

  let [title, setTitle] = useState('title A', 'title B', 'title C');

  return (
    <div className="App">
      <div className = "box"> 
        <h4>blog</h4> 
      </div>
      <div className = "list"> 
        <h4> { title } </h4> 
      </div>
      <div className = "list"> 
        <h4> { title } </h4> 
      </div>
      <div className = "list"> 
        <h4> { title }}</h4> 
      </div>
      
    </div>
  );
}

export default App;
