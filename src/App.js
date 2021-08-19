
import './App.css';
import Menu from "./Menu";
import Catalog from "./Catalog";

function App() {

    const menu = ['Catalog', 'Main page', 'Q&A', 'Reviews'];
    const catalogName = 'Catalog';

  return (
    <div className="App">
     <h1>SHOP</h1>
        <Menu name={menu}/>
        <Catalog catalog={catalogName}/>
    </div>
  );
}

export default App;
