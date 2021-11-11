import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Line from './components/Line'
import Navbar from './components/Navbar'
import ToggleNavbarItem from './components/ToggleNavbarItem'

function App() {
  const pfeffer = "Nuss";
  return (
    <div className="App main-container">
    <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Header />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Line color='white' text={pfeffer} />
      </header>
    </div>
  );
}

export default App;
