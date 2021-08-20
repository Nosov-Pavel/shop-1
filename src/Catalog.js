import ProductCard from "./ProductCard";

function Catalog(props){
    return(
       <div>
           <h2>{props.catalog}</h2>

       <div className='wrapper'>

            {props.product.map(el =><ProductCard product={el}/>)}
       </div>
       </div>


    );
}
export default Catalog;