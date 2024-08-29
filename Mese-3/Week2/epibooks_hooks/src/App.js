import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import SingleBook from './components/SingleBook'
import scifiBooks from './data/scifi.json'
import BookList from './components/BookList'
import WelcomeComponent from './components/WelcomeComp'
// scifiBooks è un ARRAY di libri

function App() {
  return (
    <>
      <header>
        <WelcomeComponent />
      </header>
      <main className="App">
        {/* <div className="examples">
        <SingleBook libro={scifiBooks[10]} />
        <SingleBook libro={scifiBooks[0]} />
        <SingleBook libro={scifiBooks[49]} />
      </div> */}
        <BookList booksArray={scifiBooks} />
      </main>
    </>

  )
}

export default App
