import ProductCard from "./ProductCard";

function Catalog(props){
    return(
        <div className='wrapper'>
            <h2>{props.catalog}</h2>
            {props.product.map(el =><ProductCard product={el}/>)}

        </div>

    );
}
export default Catalog;