import { useState } from 'react';
import './App.css';

function App() {
  const [modal, setModal] = useState(null); // 현재 열려 있는 모달의 인덱스
  const [title, setTitle] = useState(['Title A', 'Title B', 'Title C']);
  const [text, setText] = useState(['Content A', 'Content B', 'Content C']);
  const [like, setLike] = useState([0, 0, 0]);
  const [copyTitle, setCopyTitle] = useState('');
  const [copyText, setCopyText] = useState('');

  return (
    <div>
      <h2> Blog </h2>
      {title.map((t, i) => (
        <div key={i} className="post">
          <h4>
            {t}
            {/*새로운 값을 생성해서 setLike를 통해 값 갱신*/}
            <span onClick={() => {
              const newLikes = [...like];
              newLikes[i] += 1;
              setLike(newLikes);
            }}> 👍 {like[i]}</span>
          </h4> 
          {/* == 타입캐스팅해서 값 비교, === 그냥 비교*/}
          <button onClick={() => setModal(modal === i ? null : i)}>
            {modal === i ? '상세 페이지 닫기' : '상세 페이지 열기'}
          </button>

        </div>
        
      ))}
          {/*새로운 게시글 추가 */}
          <div className='post'>
           <input type='text' placeholder='title' onChange={(e)=>{setCopyTitle(e.target.value)}}/>
           <input type='textarray' placeholder='text' onChange={(e)=>{setCopyText(e.target.value)}}/>
           <button onClick={()=>{

            let tmpTitle=[...title];
            let tmpText=[...text];
            
            if(copyTitle && copyText){

            tmpTitle.unshift(copyTitle);
            tmpText.unshift(copyText);

            setTitle(tmpTitle);
            setText(tmpText);
            
            }
           }}/>          
          </div>

        
      {modal !== null && (
        <Modal 
          title={title[modal]} 
          text={text[modal]} 
          onClose={() => setModal(null)}
        />
      )}

    </div>
  );
}




function Modal({ title, text, onClose }) {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default App;
