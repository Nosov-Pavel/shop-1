
import './App.css';
import Menu from "./Menu";

function App() {
    const menu = ['Catalog', 'Main page', 'Q&A', 'Reviews'];

  return (
    <div className="App">
     <h1>SHOP</h1>
        <Menu name={menu}/>
    </div>
  );
}

export default App;
