

const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            return [...state, action.product]

        case "Remove":

        case "Increase":
           
        case "Decrease":
           
        default:
            state;
    }
}

export default CartReducer