// Array para almacenar proveedores en sessionStorage (puedes reemplazar esto con una base de datos real)
let proveedores = JSON.parse(sessionStorage.getItem('proveedores')) || [];

// Función para crear un nuevo proveedor
document.getElementById('createBtn').addEventListener('click', () => {
    // Obtener los valores del formulario
    const nombre = document.getElementById('floatingNameCreate').value;
    const ruc = document.getElementById('floatingRucCreate').value;
    const telefono = document.getElementById('floatingTelCreate').value;
    const categoria = document.getElementById('floatingCategoryCreate').value;
    const direccion = document.getElementById('floatingDirCreate').value;
    const id = document.getElementById('floatingIdCreate').value;
    const email = document.getElementById('floatingEmailCreate').value;

    // Validar campos
    if (nombre && ruc && telefono && categoria && direccion && id && email) {
        // Crear un objeto proveedor
        const proveedor = { id, nombre, ruc, telefono, categoria, direccion, email, estado: 'Activo' };

        // Guardar proveedor en el array y en sessionStorage
        proveedores.push(proveedor);
        sessionStorage.setItem('proveedores', JSON.stringify(proveedores));

        alert('Proveedor creado exitosamente');
        document.getElementById('formulario3').reset(); // Limpiar el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para buscar un proveedor por ID para editarlo
document.getElementById('searchBtn').addEventListener('click', () => {
    const idProveedor = document.getElementById('floatingIdenEdit').value;
    const proveedor = proveedores.find(p => p.id === idProveedor);

    if (proveedor) {
        // Rellenar el formulario con los datos del proveedor encontrado
        document.getElementById('floatingNameEdit').value = proveedor.nombre;
        document.getElementById('floatingCorreoEdit').value = proveedor.email;
        document.getElementById('floatingContraEdit').value = proveedor.ruc;
        document.getElementById('floatingCeluEdit').value = proveedor.telefono;
        document.getElementById('floatingDirEdit').value = proveedor.direccion;
        document.getElementById('floatingCategoryEdit').value = proveedor.categoria;
        document.getElementById('floatingCeluEdit').disabled = false;
        document.getElementById('floatingDirEdit').disabled = false;
        document.getElementById('floatingCategoryEdit').disabled = false;
        document.getElementById('editBtn').disabled = false; // Habilitar el botón de editar
    } else {
        alert('Proveedor no encontrado');
    }
});

// Función para editar un proveedor
document.getElementById('editBtn').addEventListener('click', () => {
    const idProveedor = document.getElementById('floatingIdenEdit').value;
    const proveedorIndex = proveedores.findIndex(p => p.id === idProveedor);

    if (proveedorIndex !== -1) {
        // Obtener los datos actualizados del formulario
        const nombre = document.getElementById('floatingNameEdit').value;
        const ruc = document.getElementById('floatingContraEdit').value;
        const telefono = document.getElementById('floatingCeluEdit').value;
        const categoria = document.getElementById('floatingCategoryEdit').value;
        const direccion = document.getElementById('floatingDirEdit').value;
        const email = document.getElementById('floatingCorreoEdit').value;

        // Actualizar el proveedor en el array
        proveedores[proveedorIndex] = { id: idProveedor, nombre, ruc, telefono, categoria, direccion, email, estado: 'Activo' };

        // Guardar los cambios en sessionStorage
        sessionStorage.setItem('proveedores', JSON.stringify(proveedores));

        alert('Proveedor editado exitosamente');
        document.getElementById('formulario2').reset(); // Limpiar el formulario
        document.getElementById('editBtn').disabled = true; // Deshabilitar el botón de editar
    } else {
        alert('Proveedor no encontrado');
    }
});

// Función para eliminar un proveedor
document.getElementById('bajaProveedor').addEventListener('click', () => {
    const idProveedor = document.getElementById('floatingIdentificacion').value;
    const proveedorIndex = proveedores.findIndex(p => p.id === idProveedor);

    if (proveedorIndex !== -1) {
        // Dar de baja al proveedor (puedes cambiar el estado a 'Inactivo' o eliminarlo completamente)
        proveedores[proveedorIndex].estado = 'Inactivo';

        // Guardar los cambios en sessionStorage
        sessionStorage.setItem('proveedores', JSON.stringify(proveedores));

        alert('Proveedor dado de baja');
        document.getElementById('floatingIdentificacion').value = ''; // Limpiar el campo de ID
    } else {
        alert('Proveedor no encontrado');
    }
});

// Función para listar todos los proveedores activos
document.getElementById('listActivos').addEventListener('click', () => {
    const proveedoresActivos = proveedores.filter(p => p.estado === 'Activo');
    const tabla = document.getElementById('structHTML');
    tabla.innerHTML = ''; // Limpiar la tabla

    proveedoresActivos.forEach(proveedor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${proveedor.id}</td>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.ruc}</td>
            <td>${proveedor.categoria}</td>
            <td>${proveedor.telefono}</td>
            <td>${proveedor.email}</td>
            <td>${proveedor.direccion}</td>
            <td>${proveedor.estado}</td>
        `;
        tabla.appendChild(row);
    });
});

// Función para listar todos los proveedores inactivos
document.getElementById('listInactivos').addEventListener('click', () => {
    const proveedoresInactivos = proveedores.filter(p => p.estado === 'Inactivo');
    const tabla = document.getElementById('structHTML');
    tabla.innerHTML = ''; // Limpiar la tabla

    proveedoresInactivos.forEach(proveedor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${proveedor.id}</td>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.ruc}</td>
            <td>${proveedor.categoria}</td>
            <td>${proveedor.telefono}</td>
            <td>${proveedor.email}</td>
            <td>${proveedor.direccion}</td>
            <td>${proveedor.estado}</td>
        `;
        tabla.appendChild(row);
    });
});
