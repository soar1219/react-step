import { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
}

export default App;
