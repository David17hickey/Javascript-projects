// Pizza Menu Data
const pizzaMenu = [
    { id: 1, name: "Margherita", price: 8.99, description: "Classic cheese and tomato base", image: "margherita.jpg" },
    { id: 2, name: "Pepperoni", price: 10.99, description: "Loaded with spicy pepperoni", image: "pepperoni.jpg" },
    { id: 3, name: "Veggie Delight", price: 9.49, description: "Topped with fresh veggies", image: "veggie.jpg" },
    { id: 4, name: "BBQ Chicken", price: 11.99, description: "Smoky BBQ sauce with chicken", image: "bbq_chicken.jpg" },
    { id: 5, name: "Hawaiian", price: 10.49, description: "Ham and pineapple lovers' favorite", image: "hawaiian.jpg" }
];

// Cart Array
let cart = [];

// Function to Render Pizza Menu
function renderMenu() {
    const menuContainer = document.querySelector(".menu-items");
    menuContainer.innerHTML = ""; // Clear existing menu items

    pizzaMenu.forEach((pizza) => {
        const pizzaItem = document.createElement("div");
        pizzaItem.classList.add("menu-item");
        pizzaItem.innerHTML = `
            <img src="${pizza.image}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <p><strong>$${pizza.price.toFixed(2)}</strong></p>
            <button onclick="addToCart(${pizza.id})">Add to Cart</button>
        `;
        menuContainer.appendChild(pizzaItem);
    });
}

// Function to Add Pizza to Cart
function addToCart(pizzaId) {
    const pizza = pizzaMenu.find((item) => item.id === pizzaId);
    const cartItem = cart.find((item) => item.id === pizzaId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...pizza, quantity: 1 });
    }

    renderCart();
}

// Function to Render Cart
function renderCart() {
    const cartContainer = document.querySelector(".cart-items");
    const totalPriceElement = document.querySelector(".total-price");

    cartContainer.innerHTML = ""; // Clear existing cart items
    let totalPrice = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${item.name} x ${item.quantity}</p>
            <p>$${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to Remove Item from Cart
function removeFromCart(pizzaId) {
    const cartItemIndex = cart.findIndex((item) => item.id === pizzaId);

    if (cart[cartItemIndex].quantity > 1) {
        cart[cartItemIndex].quantity--;
    } else {
        cart.splice(cartItemIndex, 1);
    }

    renderCart();
}

// Function to Handle Order Submission
function submitOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add some pizzas!");
        return;
    }

    // Clear cart after order
    alert("Thank you for your order! Your pizzas are on the way.");
    cart = [];
    renderCart();
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    document.querySelector(".submit-order").addEventListener("click", submitOrder);
});
