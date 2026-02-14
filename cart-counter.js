function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem("bf-cart")) || [];

    const counter = document.getElementById("cart-count");
    if(counter){
        counter.textContent = cart.length;
    }
}

// run when page loads
updateCartCount();

// update when user switches tab
window.addEventListener("storage", updateCartCount);