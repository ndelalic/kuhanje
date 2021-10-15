import './App.css';
import Kuhanje from "./Kuhanje";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Ubacite sastojke koje imate!
        </p>
        <Kuhanje>
          
        </Kuhanje>
      </header>
    </div>
  );
}

export default App;
