import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./components/NavComponent";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>
      <main>
        <Welcome />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
