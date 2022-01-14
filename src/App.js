import './App.css';
import SearchBox from './components/SearchBox/SearchBox';


const App = () => {
  
  return (
    <>
      <div className='backgr-img'></div>
      <div className="App">
        <h1>Rick & Morty Search</h1>
        <h3>By Javier Fonseca</h3>
        <SearchBox/>
      </div>
    </>
  );
}

export default App;
