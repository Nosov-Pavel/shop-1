function ProductCard(props){
    console.log(props)
    return(
        <div>
            <h3>{props.product.prodName}</h3>

        </div>
    );
}
export default ProductCard;