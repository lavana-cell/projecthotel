const menuItems = [{
    id: 1,
    name: "Butter Chicken",
    price: 350.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
},
{
    id: 2,
    name: "Paneer Tikka",
    price: 200.99,
    image: "https://wingreensworld.com/cdn/shop/articles/2c0034_04e3f97928024529a46158c15d24d21c_mv2.jpg?v=1677132925"
},
{
    id: 3,
    name: "Vegetable Biryani",
    price: 250.99,
    image: "https://img.freepik.com/premium-photo/tawa-pulao-pulav-pilaf-pilau-is-indian-street-food-made-using-basmati-rice-vegetables-spices-selective-focus_466689-70823.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 4,
    name: "Margherita Pizza",
    price: 300.99,
    image: "https://img.freepik.com/premium-photo/pizza-with-mozzarella-mozzarella-cheese-top_335362-1135.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 5,
    name: "Chocolate Dessert",
    price: 70.99,
    image: "https://img.freepik.com/premium-photo/high-angle-view-chocolate-dessert-cup-table_198067-530369.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740",
    category: "dessert"
},
{
    id: 6,
    name: "Palak Paneer",
    price: 350.49,
    image: "https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/sanjeev-kapoor/media/media_files/eMPTKuzkKTaInVYSySoy.JPG"
},
{
    id: 7,
    name: "Chicken Tikka",
    price: 450.99,
    image: "https://img.freepik.com/free-photo/delicious-skewers-with-meat_23-2150857780.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 8,
    name: "Pasta Alfredo",
    price: 400.49,
    image: "https://img.freepik.com/free-photo/freshness-healthy-eating-homemade-vegetarian-pasta-generated-by-artificial-intelligence_188544-128803.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 9,
    name: "Mutton Rogan Josh",
    price: 250.99,
    image: "https://img.freepik.com/premium-photo/mutton-curry-lamb-curry-spicy-indian-cuisine_527904-4012.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 10,
    name: "Veg Manchurian",
    price: 320.99,
    image: "https://img.freepik.com/free-photo/meatballs-sweet-sour-tomato-sauce_2829-19545.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 11,
    name: "Fish Curry",
    price: 400.49,
    image: "https://img.freepik.com/premium-photo/fish-curry-seer-fish-curry-traditional-indian-fish-curry-kerala-special-dish-using-coconut-arranged-white-bowl-garnished-with-curry-leaves-malabar-tamarind-white-textured-background_527904-2017.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 12,
    name: "Caesar Salad",
    price: 200.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9"
},
{
    id: 13,
    name: "Grilled Salmon",
    price: 180.99,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2"
},
{
    id: 14,
    name: "Mango Lassi",
    price: 80.99,
    image: "https://img.freepik.com/premium-photo/tropical-mango-lassi-tall-glass-with-mint-leaf_974629-459481.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 15,
    name: "Tandoori Roti",
    price: 500.99,
    image: "https://img.freepik.com/free-photo/fresh-homemade-gourmet-meal-bread-meat-vegetable-dessert-snack-generated-by-artificial-intelligence_188544-126597.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 16,
    name: "Dal Makhani",
    price: 450.49,
    image: "https://img.freepik.com/premium-photo/dal-makhani-dal-makhni-is-north-indian-recipe-served-bowl-selective-focus_466689-79081.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 17,
    name: "Prawn Masala",
    price: 350.49,
    image: "https://img.freepik.com/premium-photo/goan-prawns-shrimp-curry-zinga-masala-also-known-as-kolambia-a-kalwana-a-tikhle_466689-71613.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 18,
    name: "Veg Pizza",
    price: 350.49,
    image: "https://img.freepik.com/free-photo/italian-pizza-with-chicken-salami-zucchini-tomatoes-herbs_2829-10838.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 19,
    name: "Gulab Jamun",
    price:320.99,
    image: "https://img.freepik.com/premium-photo/indian-sweet-food-gulab-jamun-served-round-ceramic-bowl_466689-68975.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740",
    category: "dessert"
},
{
    id: 20,
    name: "Masala Dosa",
    price: 100.49,
    image: "https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22958.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740"
},
{
    id: 21,
    name: "Rasmalai",
    price: 85.49,
    image: "https://img.freepik.com/premium-photo/angoori-rasmalai-is-indian-dessert-sweet-with-dry-fruits-saffron-toppings-served-bowl-moody-background-selective-focus_466689-72210.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740",
    category: "dessert"
},
{
    id: 22,
    name: "Ice Cream Sundae",
    price: 90.49,
    image: "https://img.freepik.com/free-photo/delicious-vanilla-ice-cream-with-topping_23-2150796504.jpg?ga=GA1.1.1682497146.1718531518&semt=ais_hybrid&w=740",
    category: "dessert"
},
];

let cart = [];

function displayMenu() {
const menuContainer = document.getElementById('menu-container');
menuItems.filter(item => !item.category || item.category !== 'dessert').forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
    menuItem.innerHTML = `
        <div class="menu-item">
            <img src="${item.image}" class="img-fluid" alt="${item.name}">
            <div class="p-3">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <input type="number" class="form-control mb-2" id="qty-${item.id}" min="1" value="1">
                <button class="btn btn-dark" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `;
    menuContainer.appendChild(menuItem);
});
}

function displayDessertMenu() {
const dessertMenuContainer = document.getElementById('dessert-menu-container');
dessertMenuContainer.innerHTML = '';
menuItems.filter(item => item.category === 'dessert').forEach(item => {
    const dessertItem = document.createElement('div');
    dessertItem.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mb-4');
    dessertItem.innerHTML = `
        <div class="menu-item">
            <img src="${item.image}" class="img-fluid" alt="${item.name}">
            <div class="p-3">
                <h3>${item.name}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <input type="number" class="form-control mb-2" id="dessert-qty-${item.id}" min="1" value="1">
                <button class="btn btn-dark" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        </div>
    `;
    dessertMenuContainer.appendChild(dessertItem);
});
}

function addToCart(itemId) {
const item = menuItems.find(i => i.id === itemId);
const quantityInput = document.getElementById(`qty-${itemId}`) || document.getElementById(`dessert-qty-${itemId}`);
const quantity = parseInt(quantityInput.value);
const cartItem = cart.find(ci => ci.id === itemId);

if (cartItem) {
    cartItem.quantity += quantity;
} else {
    cart.push({
        ...item,
        quantity
    });
}

displayCart();
updateTotalBill();
}

function displayCart() {
const cartItemsDiv = document.getElementById('cart-items');
cartItemsDiv.innerHTML = '';
cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
        <span>${item.name} (x${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    cartItemsDiv.appendChild(cartItem);
});
}

function updateTotalBill() {
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
document.getElementById('total-bill').textContent = total.toFixed(2);
}

function placeOrder() {
const tableNumber = document.getElementById('table-number').value;
if (cart.length === 0) {
    alert('Please add items to your cart.');
    return;
}
if (!tableNumber) {
    alert('Please enter a table number.');
    return;
}

// Show loader
const loaderModal = new bootstrap.Modal(document.getElementById('loaderModal'), {
    backdrop: 'static',
    keyboard: false
});
loaderModal.show();

// Simulate processing delay
setTimeout(() => {
    loaderModal.hide();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = total > 50 ? total * 0.1 : 0;
    const finalAmount = total - discount;

    // Update confirmation modal
    document.getElementById('modal-table-number').textContent = tableNumber;
    const orderDetails = document.getElementById('modal-order-details');
    orderDetails.innerHTML = '';
    cart.forEach(item => {
        const detail = document.createElement('p');
        detail.innerHTML = `${item.name} (x${item.quantity}): $${(item.price * item.quantity).toFixed(2)}`;
        orderDetails.appendChild(detail);
    });
    document.getElementById('modal-total-bill').textContent = total.toFixed(2);
    document.getElementById('modal-discount').textContent = discount.toFixed(2);
    document.getElementById('modal-final-amount').textContent = finalAmount.toFixed(2);

    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}, 1500); // 1.5-second delay for loader
}

function openDessertModal() {
const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
confirmationModal.hide();
displayDessertMenu();
const dessertModal = new bootstrap.Modal(document.getElementById('dessertModal'));
dessertModal.show();
}
function cancelOrder() {
    if (confirm('Are you sure you want to cancel the order?')) {
        cart = [];
        displayCart();
        updateTotalBill();
        document.getElementById('table-number').value = '';
        alert('Order has been cancelled.');
    }
}


// Show splash screen for 2 seconds
document.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
    document.getElementById('welcome-splash').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    displayMenu();
}, 2000);
});