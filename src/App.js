import './App.css';
import pen from './Images/pen.jpeg'
import Menu from "./Menu";
import Catalog from "./Catalog";

function App() {

    const menu = ['Catalog', 'Main page', 'Q&A', 'Reviews'];
    const catalogName = 'Catalog';
    const cards = [{prodName: 'pen', img: pen, }]

  return (
    <div className="App">
     <h1>SHOP</h1>
        <img src={pen}/>
        <Menu name={menu}/>
        <Catalog catalog={catalogName}/>
    </div>
  );
}

export default App;
