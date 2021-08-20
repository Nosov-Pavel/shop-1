import './App.css';
import pen from './Images/pen.jpeg';
import pencil from './Images/pencil.jpeg';
import sharpener from './Images/sharpener.jpeg';
import eraser from './Images/eraser.jpeg';
import Menu from "./Menu";
import Catalog from "./Catalog";
import logo from './Images/логотип i am who i am.jpg';

function App() {

    const menu = ['Catalog', 'Main page', 'Q&A', 'Reviews'];
    const catalogName = 'Catalog';
    const cards = [{prodName: 'sharpener', img: sharpener, price: 5 },
        {prodName: 'pen', img: pen, price: 3 },
        {prodName: 'pencil', img: pencil, price: 2 },
        {prodName: 'sharpener', img: sharpener, price: 5 },
        {prodName: 'eraser', img: eraser, price: 1 } ]
    const buyButtonLabel = 'Bay';

  return (
    <div className="App">
     <h1>SHOP</h1>
        <img src={logo}/>
        <Menu name={menu}/>
        <Catalog catalog={catalogName} product={cards} buyButtonLabel={buyButtonLabel}/>
    </div>
  );
}

export default App;
