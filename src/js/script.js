

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
