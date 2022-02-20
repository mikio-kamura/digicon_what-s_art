import './App.css';
import { useState,useEffect } from 'react'


function App() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])
  return (
    <div className="App">
      <h1>アート？展へようこそ</h1>
	<a href= "https://t.co/sSm4RhGZRt" >編集可能なURLはこちら</a>
　　　　<a href= "https://miro.com/app/board/uXjVOaDyfXs=/" >閲覧可能なURLはこちら</a>
      	<p>拡大された状態になっているので、ズームアウトしてご覧ください</p>
	<p>{ message }</p>
    </div>
  );
}

export default App;
