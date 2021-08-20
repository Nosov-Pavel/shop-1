import Quantity from "./Quantity";

function ProductCard(props){
    // console.log(props)
    return(
        <div>
            <h3>{props.product.prodName}</h3>
            <img src={props.product.img}/>
            <p> Price: ${props.product.price}</p>
            <Quantity buyButtonLabel={props.buyButtonLabel}/>

        </div>
    );
}
export default ProductCard;