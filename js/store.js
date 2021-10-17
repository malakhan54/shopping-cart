// console.log("hello world");
// Remove button
const cartElement = document.querySelector(".cart-items");
console.log(cartElement);
cartElement.addEventListener("click", function (event) {
  console.log("click", event.target);
  let buttonClicked = event.target;
  if (buttonClicked.classList.contains("btn-remove")) {
    buttonClicked.closest(".cart-row").remove();
    updateCartTotal();
  }
});
cartElement.addEventListener("change", function (event) {
  console.log("change", event.target);
  let target = event.target;
  if (target.classList.contains("cart-quantity-input")) {
    updateCartTotal();
  }
});

function updateCartTotal() {
  //   const cartItemsContainer = document.querySelectorAll(".cartItems")[0];
  const cartRows = document.querySelectorAll(".cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.querySelectorAll(".cart-price")[0];
    let quantityElement = cartRow.querySelectorAll(".cart-quantity-input")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.querySelector(".cart-total-price").innerText = "$ " + total;
}
