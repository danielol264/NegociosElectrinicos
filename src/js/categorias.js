// Obtener la categoría seleccionada desde localStorage
let categoriaSeleccionada = localStorage.getItem("categoria");

let prueba = window.DB;
console.log(prueba);
// Buscar la categoría en tu DB
let categoria = window.DB.categories.find(cat => cat.id === categoriaSeleccionada);
console.log(categoria);
// Obtener el contenedor
const contenedor = document.getElementById("catalogo");

if (categoria) {
    categoria.items.forEach(item => {
        // Crear tarjeta
        const card = document.createElement("div");
        card.classList.add("category-card");

        card.innerHTML = `
            <img src="${item.img || 'img/default.png'}" alt="${item.brand}">
            <span>${item.model}</span>
            <p>Precio: $${item.price}</p>
            <button class="add-to-cart">Agregar</button>
        `;

        contenedor.appendChild(card);
    });
} else {
    contenedor.innerHTML = "<p>No se encontró la categoría.</p>";
}

const searchInput = document.getElementById('search');
const categories = document.querySelectorAll('.category-card');
const cartTotal = document.getElementById('cart-total');
const cartTotalBottom = document.getElementById('cart-total-bottom');
const cartItems = document.getElementById('cart-items');
const cartContainer = document.getElementById('cart-container');
const cartButton = document.getElementById('cart-button');

let cart = {};

// Buscar
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

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    for (let key in cart) {
        const item = cart[key];
        total += item.price * item.quantity;

        const li = document.createElement('li');

        li.innerHTML = `
            <div class="item-header">
                <span>${item.name} - $${(item.price * item.quantity).toFixed(2)}</span>
                <button data-key="${key}">Eliminar</button>
            </div>
            <div class="quantity-controls">
                <label>Cantidad:</label>
                <input type="number" min="1" value="${item.quantity}" data-key="${key}" />
            </div>
        `;

        cartItems.appendChild(li);
    }

    cartTotal.textContent = total.toFixed(2);
    cartTotalBottom.textContent = total.toFixed(2);

    // Botón eliminar
    const removeButtons = cartItems.querySelectorAll('button');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const key = btn.getAttribute('data-key');
            delete cart[key];
            updateCart();
        });
    });

    // Control de cantidad
    const quantityInputs = cartItems.querySelectorAll('input[type="number"]');
    quantityInputs.forEach(input => {
        input.addEventListener('change', () => {
            const key = input.getAttribute('data-key');
            const newQty = parseInt(input.value);
            if (newQty >= 1) {
                cart[key].quantity = newQty;
                updateCart();
            }
        });
    });
}
function seleccionarCatergoria (categorias){
    window.localStorage.setItem("categoria", categorias);
    window.location.reload();
}