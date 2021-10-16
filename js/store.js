// console.log("hello world");
// Remove button
const removeCartItemBurttons = document.querySelector(".btn-secondary");
console.log("removeCartItemBurttons");
for (let i = 0; < removeCartItemBurttons.length; i++) {
    let button = removeCartItemBurttons[1]
    button.addEventListener("click" function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
functionupdateCartTotal(){
    const cartItemsContainer = document.querySelector("cartItems")[0]
    const cartRows = cartItemsContainer.querySelector("cart-row")
    for (let i = o; < cartItemsContainer.length; i++){
        
    }
}