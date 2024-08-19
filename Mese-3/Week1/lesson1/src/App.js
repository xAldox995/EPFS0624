import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonsComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageComponent src='https://img.icons8.com/?size=100&id=17949&format=png&color=000000' />
        <ButtonComponent action='https://www.google.it/' name='GOOGLE' />
        <ImageComponent src='https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000' />
        <ButtonComponent action='https://vitejs.dev/' name='VITE' />
        <ImageComponent src='https://img.icons8.com/?size=100&id=123603&format=png&color=000000' />
        <ButtonComponent action='https://it.legacy.reactjs.org/' name='REACT IT' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
