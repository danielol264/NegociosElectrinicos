
// Elementos
const searchInput = document.getElementById('search');
const categories = document.querySelectorAll('.category-card');
const cartTotal = document.getElementById('cart-total');
const cartTotalBottom = document.getElementById('cart-total-bottom');
const cartItems = document.getElementById('cart-items');
const cartContainer = document.getElementById('cart-container');
const cartButton = document.getElementById('cart-button');

// Buscador
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    categories.forEach(category => {
        const text = category.querySelector('span').textContent.toLowerCase();
        category.style.display = text.includes(query) ? 'block' : 'none';
    });
});

// Mostrar/Ocultar carrito
cartButton.addEventListener('click', () => {
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

// Agregar producto al carrito
categories.forEach(category => {
    const button = category.querySelector('.add-to-cart');
    button.addEventListener('click', () => {
        const name = category.querySelector('span').textContent;
        const price = parseFloat(category.getAttribute('data-price'));
        if (cart[name]) {
            cart[name].quantity += 1;
        } else {
            cart[name] = { price: price, quantity: 1, name: name };
        }
        updateCart();
    });
});
function categoria (categorias){
    window.localStorage.setItem("categoria", categorias);
    window.location.href = "src/views/categorias.html";
}