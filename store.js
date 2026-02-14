document.addEventListener("DOMContentLoaded", () => {

    // ---------- PRODUCT POPUP ----------
    const cards = document.querySelectorAll(".product-card");
    const viewer = document.getElementById("product-viewer");

    const vImg = document.getElementById("viewer-image");
    const vTitle = document.getElementById("viewer-title");
    const vDesc = document.getElementById("viewer-description");
    const vPrice = document.getElementById("viewer-price");

    let currentProduct = null;

    cards.forEach(card => {
        card.addEventListener("click", () => {

            vImg.src = card.dataset.img;
            vTitle.textContent = card.dataset.name;
            vDesc.textContent = card.dataset.desc;
            vPrice.textContent = "£" + card.dataset.price;

            currentProduct = {
                name: card.dataset.name,
                price: Number(card.dataset.price), // FIXED
                img: card.dataset.img
            };

            viewer.style.display = "flex";
        });
    });

    document.getElementById("viewer-close").onclick = () => {
        viewer.style.display = "none";
    };


    // ---------- CART SYSTEM ----------
    let cart = JSON.parse(localStorage.getItem("bf-cart")) || [];

    function saveCart(){
        localStorage.setItem("bf-cart", JSON.stringify(cart));
        updateCartCount();
    }

    // Add to cart
    document.getElementById("add-to-cart").onclick = () => {

        if(!currentProduct) return;

        cart.push(currentProduct);
        saveCart();

        alert("Added to cart!");
        viewer.style.display = "none";
    };

    // ---------- CART ICON COUNTER ----------
const cartLink = document.querySelector(".nav-right a:last-child");

// check if it already exists
let counter = document.getElementById("cart-count");

if(!counter){
    counter = document.createElement("span");
    counter.id = "cart-count";
    cartLink.appendChild(counter);
}

    function updateCartCount(){
        counter.textContent = cart.length;
    }

    updateCartCount();

});