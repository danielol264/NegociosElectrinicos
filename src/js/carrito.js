// pagar.js - lógica de la simulación de pago (sin validaciones)

// Leer carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
const resumenCont = document.getElementById("resumen-carrito");
const totalSpan = document.getElementById("total-pagar");
const miniItems = document.getElementById("mini-items");
const miniTotal = document.getElementById("mini-total");
const metodoPago = document.getElementById("metodo-pago");
const pagoDetalles = document.getElementById("pago-detalles");
const confirmarBtn = document.getElementById("confirmar-btn");
const volverBtn = document.getElementById("volver-btn");
const confirmResult = document.getElementById("confirm-result");

// Rellenar resumen
let total = 0;
let itemCount = 0;

for (let key in carrito) {
    const item = carrito[key];
    const subtotal = Number(item.price) * Number(item.quantity);
    total += subtotal;
    itemCount += Number(item.quantity);

    const div = document.createElement("div");
    div.className = "item-resumen";

    div.innerHTML = `
        <div class="left">
            <p style="font-weight:700;">${escapeHtml(item.name)}</p>
            <p style="font-size:13px; color:#6b7280;">Cantidad: ${item.quantity}</p>
        </div>
        <div class="right">
            <p style="font-weight:700;">$${subtotal.toFixed(2)}</p>
        </div>
    `;

    resumenCont.appendChild(div);
}

totalSpan.textContent = total.toFixed(2);
miniItems.textContent = itemCount;
miniTotal.textContent = total.toFixed(2);

// Muestra los campos correspondientes según método de pago
metodoPago.addEventListener("change", () => {
    const v = metodoPago.value;
    pagoDetalles.innerHTML = ""; // limpiar

    if (v === "efectivo") {
        // Simulación: barcode para pago en Oxxo
        pagoDetalles.innerHTML = `
            <div class="detalle-block">
                <p>Acude a una tienda de conveniencia y presenta este código para pagar (simulado).</p>
                <div class="barcode-sim">[ SIMULACIÓN CÓDIGO DE BARRAS - OXXO ]</div>
                <p>Referencia: <strong>#${generateRef()}</strong></p>
                <p>Monto: <strong>$${total.toFixed(2)}</strong></p>
            </div>
        `;
    } else if (v === "tarjeta") {
        pagoDetalles.innerHTML = `
            <div class="detalle-block">
                <label>Nombre del titular</label>
                <input class="small-input" id="tar-nombre" placeholder="Nombre en la tarjeta">
            </div>
            <div class="detalle-block">
                <label>Número de tarjeta</label>
                <input class="small-input" id="tar-num" placeholder="1234 5678 9012 3456">
            </div>
            <div class="form-row" style="margin-top:8px;">
                <div style="flex:1; margin-right:8px;">
                    <label>Vencimiento</label>
                    <input class="small-input" id="tar-exp" placeholder="MM/AA">
                </div>
                <div style="width:120px;">
                    <label>CVC</label>
                    <input class="small-input" id="tar-cvc" placeholder="123">
                </div>
            </div>
        `;
    } else if (v === "transferencia") {
        pagoDetalles.innerHTML = `
            <div class="detalle-block">
                <p><strong>Datos para transferencia</strong></p>
                <p>Banco: BANCO SIMULADO</p>
                <p>CLABE: 012345678901234567</p>
                <p>Titular: THE BYTESHOP</p>
                <p>Monto: <strong>$${total.toFixed(2)}</strong></p>
            </div>
        `;
    } else if (v === "cheque") {
        pagoDetalles.innerHTML = `
            <div class="detalle-block">
                <label>Monto</label>
                <input class="small-input" id="che-monto" placeholder="$0.00">
            </div>
            <div class="detalle-block">
                <label>Número de cheque</label>
                <input class="small-input" id="che-num" placeholder="0001234">
            </div>
            <div class="detalle-block">
                <label>Fecha (emitido)</label>
                <input class="small-input" id="che-fecha" placeholder="YYYY-MM-DD">
            </div>
        `;
    } else if (v === "deposito") {
        pagoDetalles.innerHTML = `
            <div class="detalle-block">
                <p><strong>Datos para depósito</strong></p>
                <p>Banco: BANCO SIMULADO</p>
                <p>Cuenta: 1234567890</p>
                <div class="barcode-sim">[ SIMULACIÓN CÓDIGO DE BARRAS - DEPÓSITO ]</div>
                <p>Referencia: <strong>#${generateRef()}</strong></p>
            </div>
        `;
    }
});

// Volver a tienda
volverBtn.addEventListener("click", () => {
    window.location.href = "../../index.html";
});

// Confirmar (simulado)
confirmarBtn.addEventListener("click", () => {
    // Recopilar datos básicos del comprador (no validamos)
    const comprador = {
        nombre: document.getElementById("cliente-nombre").value || "",
        email: document.getElementById("cliente-email").value || "",
        telefono: document.getElementById("cliente-telefono").value || "",
        direccion: document.getElementById("cliente-direccion").value || "",
        metodo: metodoPago.value || "no seleccionado",
        carrito: carrito,
        total: total.toFixed(2),
        referencia: generateOrderId()
    };

    // Guardar simulación en localStorage como "pedido_simulado"
    const pedidos = JSON.parse(localStorage.getItem("pedidos_simulados") || "[]");
    pedidos.push(comprador);
    localStorage.setItem("pedidos_simulados", JSON.stringify(pedidos));

    // Mostrar resultado
    confirmResult.innerHTML = `
        <div>
            <p>✅ Pago simulado completado.</p>
            <p>Referencia de pedido: <strong>${comprador.referencia}</strong></p>
            <p>Se ha guardado una copia local del pedido (localStorage).</p>
        </div>
    `;

    // Limpiar carrito simulado
    localStorage.removeItem("carrito");

    // Opcional: redirigir después de 2.2s a la página principal (comentado)
    setTimeout(() => {
        window.location.href = "statuspago.html";
    }, 2200);
});

// Helpers (simples)
function generateRef() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}
function generateOrderId() {
    const now = Date.now().toString(36).toUpperCase();
    return `BYT-${now}-${Math.floor(Math.random()*900+100)}`;
}
function escapeHtml(s) {
    return String(s).replace(/[&<>"'`=\/]/g, function(ch) {
        return {
            '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'
        }[ch];
    });
}
