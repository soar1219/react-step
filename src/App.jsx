import { useState, useCallback } from 'react';
import './style.css';
import { ChildArea } from './ChildArea';

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  const onClickOpen = () => {
    setOpen(!open)
  }

  const onClickClose = useCallback(() => setOpen(false), [setOpen]) /* アロー関数を使うとpropsが変化したと認識してしまうため再レンダリングしてしまう */



  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} close={onClickClose} />
    </div>
  );
}

export default App;
