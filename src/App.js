import './App.css';
import { InputNumber } from 'rsuite';
import "rsuite/dist/rsuite.min.css"
import { useState } from 'react';

function App() {
const [WEI, setWEI] = useState(1000);
const [ETH, setETH] = useState(0.01);
console.log('eth', ETH);
console.log('wei', WEI);
  return (
    <div className="App">
      <header className="App-header">
        <div className='inputs'>
        <div className='weitoeth'>
          <h3> WEI to ETH</h3>
      <InputNumber style={{width: 350}} min={1000000000000} prefix="WEI"
      onChange={ e => {setETH(e / 1e18)}}
      />

      <InputNumber style={{width: 350}} min={0} readOnly postfix="ETH" value={ETH}
      />
       </div>
       <div className='ethtowei'>
       <h3> ETH to WEI</h3>
      <InputNumber style={{width: 350}} min={0} max={999} prefix="ETH"
       onChange={ e => {setWEI(e * 1000000000000000000)}}
      />

      <InputNumber style={{width: 350}} min={0} readOnly postfix="WEI" value={WEI}
      />
      </div>

      </div>
      </header>
    </div>
  );
}

export default App;
