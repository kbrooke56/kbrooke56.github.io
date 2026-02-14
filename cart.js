let cart = JSON.parse(localStorage.getItem("bf-cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function displayCart(){
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += parseFloat(item.price);

        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.img}">
            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>£${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;

        cartItems.appendChild(div);
    });

    cartTotal.textContent = total.toFixed(2);
    updateCartCount();
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem("bf-cart", JSON.stringify(cart));
    displayCart();
}

document.getElementById("clear-cart").onclick = () => {
    localStorage.removeItem("bf-cart");
    cart = [];
    displayCart();
};

document.getElementById("checkout-btn").onclick = () => {
    alert("Checkout system is for demonstration only.");
};

displayCart();