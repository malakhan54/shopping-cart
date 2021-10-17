// console.log("hello world");
// Remove button
const removeCartItemButtons = document.querySelectorAll(".btn-remove");
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    console.log("click", event);
    let buttonClicked = event.target;
    buttonClicked.closest(".cart-row").remove();
    updateCartTotal();
  });
}
function updateCartTotal() {
  const cartItemsContainer = document.querySelectorAll("cartItems")[0];
  const cartRows = cartItemsContainer.querySelector("cart-row");
  for (let i = o; i < cartItemsContainer.length; i++) {}
}
