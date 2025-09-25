
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

// Carrito
let cart = {};

// Mostrar/Ocultar carrito
cartButton.addEventListener('click', () => {
    cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
});

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    for (let key in cart) {
        const item = cart[key];
        total += item.price * item.quantity;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
            <button data-key="${key}">X</button>`;
        cartItems.appendChild(li);
    }
    cartTotal.textContent = total.toFixed(2);
    cartTotalBottom.textContent = total.toFixed(2);

    // Botones para eliminar
    const removeButtons = cartItems.querySelectorAll('button');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-key');
            delete cart[key];
            updateCart();
        });
    });
}

// Agregar productos
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