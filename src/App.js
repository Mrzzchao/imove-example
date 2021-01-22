import { useEffect, useState } from 'react';
import './App.css';

import Logic from './logic'

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    Logic.on('action', payload => {
      console.log(payload);
    })
    Logic.invoke('start');
    setState({
      ...state,
      temp_cur: '10°C'
    })
  }, []);

  const {
    temp_cur
  } = state

  return (
    <div className="App">
      <div className="weatherBox">
        <div className="weatherBoxText">{ temp_cur }</div>
      </div>
    </div>
  );
}

export default App;
