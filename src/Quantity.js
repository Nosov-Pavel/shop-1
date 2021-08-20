function Quantity(props){
    return(
        <div>
            <button>-</button>
            1
            <button>+</button>
            <button>{props.buyButtonLabel}</button>
        </div>

    );
}
export default Quantity;