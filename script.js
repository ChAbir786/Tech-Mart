// script.js

// Scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Add to cart functionality
let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalContainer.textContent = total.toFixed(2);
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const confirmation = confirm('Proceed to checkout?');
    if (confirmation) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    }
}

let cartCount = 0;
let cartItems = [];
let totalPrice = 0;

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Increment cart count
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;

    // Add product to cart array
    cartItems.push({ name: productName, price: productPrice });

    // Update total price
    totalPrice += productPrice;

    // Update cart section
    updateCartUI();
}

// Function to update the cart section
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    // Clear cart items container
    cartItemsContainer.innerHTML = "";

    // Populate cart items
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total price
    totalElement.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    // Deduct item price from total
    totalPrice -= cartItems[index].price;

    // Remove item from cart array
    cartItems.splice(index, 1);

    // Decrement cart count
    cartCount--;
    document.getElementById("cartCount").textContent = cartCount;

    // Update cart UI
    updateCartUI();
}

// Scroll to cart section when the floating cart is clicked
document.getElementById("floatingCart").addEventListener("click", () => {
    document.getElementById("cart").scrollIntoView({ behavior: "smooth" });
});
