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
        <ImageComponent src='https://www.keyweo.com/wp-content/uploads/2023/02/logo-G.png' />
        <ButtonComponent action='https://www.google.it/' name='GOOGLE' />
        <ImageComponent src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg' />
        <ButtonComponent action='https://vitejs.dev/' name='VITE' />
        <ImageComponent src='https://www.keyweo.com/wp-content/uploads/2023/02/logo-G.png' />
        <ButtonComponent action='https://www.google.it/' name='GOOGLE' />
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
