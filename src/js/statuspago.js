/* ======== TIMELINE - Igual que antes ======== */

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

const mensaje = document.getElementById("mensaje");
const btnRegresar = document.getElementById("btn-regresar");
const btnproceso = document.getElementById("btn-proceso");
const step3Text = document.getElementById("step3-text");

// Siempre inicia así
step1.classList.add("done");
step2.classList.add("active");

function resetTimeline() {
    [step1, step2, step3].forEach(s => {
        s.classList.remove("done", "active", "error", "warning");
    });

    line1.style.background = "#ccc";
    line2.style.background = "#ccc";
}

document.getElementById("btn-aprobado").onclick = () => {
    resetTimeline();

    step1.classList.add("done");
    line1.style.background = "#28a745";

    step2.classList.add("done");
    line2.style.background = "#28a745";

    step3.classList.add("done");
    step3Text.textContent = "Pago aprobado";

    mensaje.style.color = "#28a745";
    mensaje.textContent = "El pago fue aprobado exitosamente.";

    btnRegresar.style.display = "block";
    btnproceso.style.display = "block";
};

document.getElementById("btn-rechazado").onclick = () => {
    resetTimeline();

    step1.classList.add("done");
    line1.style.background = "#28a745";

    step2.classList.add("done");

    step3.classList.add("error");
    step3Text.textContent = "Pago rechazado";

    mensaje.style.color = "#dc3545";
    mensaje.textContent = "El pago fue rechazado. Intenta nuevamente.";

    btnRegresar.style.display = "block";
        btnproceso.style.display = "none";

};

document.getElementById("btn-vencido").onclick = () => {
    resetTimeline();

    step1.classList.add("done");
    step2.classList.add("done");

    step3.classList.add("warning");
    step3Text.textContent = "Pago vencido";

    mensaje.style.color = "#ff9800";
    mensaje.textContent = "El pago venció antes de ser aprobado.";

    btnRegresar.style.display = "block";
        btnproceso.style.display = "none";

};

btnRegresar.onclick = () => {
    window.location.href = "../views/pagar.html";
};
btnproceso.onclick = () => {
    window.location.href = "../views/process_simulation.html";
}


/* ======== DONACIÓN ======== */

let totalCompra = 800; // Solo simulación, puedes reemplazarlo con un valor real.
let donacion = 0;

const donBtns = document.querySelectorAll(".don-btn");
const donManualInput = document.getElementById("donacion-manual");
const aplicarManualBtn = document.getElementById("aplicar-manual");
const textoDonacion = document.getElementById("donacion-total");

/* Opciones de porcentaje */
donBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const porc = parseInt(btn.dataset.porc);
        donacion = (totalCompra * porc) / 100;
        actualizarDonacion();
    });
});

/* Monto manual */
aplicarManualBtn.onclick = () => {
    let val = parseFloat(donManualInput.value);
    if (isNaN(val) || val < 0) return;

    donacion = val;
    actualizarDonacion();
};

function actualizarDonacion() {
    const nuevoTotal = totalCompra + donacion;
    textoDonacion.textContent = `Donación: $${donacion.toFixed(2)} | Total final: $${nuevoTotal.toFixed(2)}`;
}
