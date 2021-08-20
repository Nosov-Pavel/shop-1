import ProductCard from "./ProductCard";

function Catalog(props) {
    return (
        <div>
            <h2>{props.name}</h2>

            <div className='wrapper'>
                {props.product.map(el => <ProductCard product={el} buyButtonLabel={props.buyButtonLabel}/>)}
            </div>
        </div>


    );
}

export default Catalog;