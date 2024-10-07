import './App.css'
import Starfield from './Starfield'

function App() {

  return (
    <>
      <div style={{ position: 'fixed', top:'0', left:'0', width: '100vw', height: '100vh' }}>
        <Starfield />
      </div>
      <div style={{position: 'fixed', top:'100px', 'left': '100px'}}>
        DSDB
      </div>
    </>
  )
}

export default App
