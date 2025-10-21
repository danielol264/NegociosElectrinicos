// Sidebar toggle (para pantallas pequeñas)
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
});

// Modal functions
function openModal(id){
    document.getElementById(id).style.display = 'flex';
}
function closeModal(id){
    document.getElementById(id).style.display = 'none';
}

// Datos iniciales de ejemplo
let users = [
    {id:1, name:"Juan Pérez", email:"juan@mail.com", role:"Admin"},
    {id:2, name:"Ana Gómez", email:"ana@mail.com", role:"Editor"},
    {id:3, name:"Carlos López", email:"carlos@mail.com", role:"Cliente"}
];
let products = [
    {id:1, name:"Producto A", price:"$50", stock:12},
    {id:2, name:"Producto B", price:"$120", stock:5}
];
let recentActivity = [
    "Juan Pérez creó un nuevo producto",
    "Ana Gómez actualizó un pedido",
    "Carlos López realizó un pedido"
];

// Render tabla usuarios
function renderUsers(){
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";
    users.forEach(u=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${u.id}</td><td>${u.name}</td><td>${u.email}</td><td>${u.role}</td>
        <td><button class="btn btn-ghost" onclick="editUser(${u.id})">Editar</button> 
        <button class="btn btn-danger" onclick="deleteUser(${u.id})">Eliminar</button></td>`;
        tbody.appendChild(tr);
    });
}

// Render lista actividad
function renderActivity(){
    const list = document.getElementById('recentList');
    list.innerHTML = '';
    recentActivity.forEach(a=>{
        const li = document.createElement('li');
        li.className = 'recent-item';
        li.innerHTML = `<span>${a}</span><span class="meta">${new Date().toLocaleString()}</span>`;
        list.appendChild(li);
    });
}

// Agregar usuario
function addUser(){
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const role = document.getElementById('userRole').value;
    if(name && email){
        users.push({id: users.length+1, name, email, role});
        renderUsers();
        closeModal('userModal');
        document.getElementById('userName').value = '';
        document.getElementById('userEmail').value = '';
    } else {
        alert("Complete todos los campos");
    }
}

// Editar y eliminar usuario (simple alert placeholder)
function editUser(id){
    alert("Editar usuario ID "+id);
}
function deleteUser(id){
    if(confirm("¿Eliminar usuario ID "+id+"?")){
        users = users.filter(u=>u.id!==id);
        renderUsers();
    }
}

// Agregar producto
function addProduct(){
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const stock = document.getElementById('productStock').value;
    if(name && price && stock){
        products.push({id:products.length+1, name, price, stock});
        closeModal('productModal');
        document.getElementById('productName').value='';
        document.getElementById('productPrice').value='';
        document.getElementById('productStock').value='';
        alert("Producto agregado correctamente (simulado)");
    }else{
        alert("Complete todos los campos");
    }
}

// Inicial render
renderUsers();
renderActivity();
