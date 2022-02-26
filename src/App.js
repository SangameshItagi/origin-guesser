import './App.css';
import { Button } from 'antd';
//import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
        className='option-One-Button' 
        style = {{ flexWrap: "wrap"}}
        style={{
          
          position: 'absolute',
          left: '10%',
          //alignConten
          alignSelf: 'center-100'-100,
          bottom: 100,
          width: '20%', height: 200
        }}
        >Option 1</Button>
        <Button
        className='option-Two-Button' 
        style={{
          position: 'absolute',
          left: '30%',
          bottom: 100,
          width: '20%', height: 200
        }}
        >Option 2</Button>
        <Button
        className='option-Three-Button' 
        style={{
          position: 'absolute',
          right: '30%',
          bottom: 100,
          width: '20%', height: 200
        }}
        >Option 3</Button>
        <Button
        className='option-Four-Button' 
        style={{
          position: 'absolute',
          right: '10%',
          bottom: 100,
          width: '20%', height: 200
        }}
        >Option 4</Button>
        
      </header>
    </div>
  );
}

export default App;
