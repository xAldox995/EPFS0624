import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavComponent from "./components/NavComponent";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <header>
        <NavComponent />
      </header>
      <main>
        <Welcome />
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
