//Visualizar la capa de Proveedores activos e inactivos
let proveeAI=document.getElementById("pAI");
let imgPOS=document.getElementById("imgPOS");
let capaPAI=document.getElementById("p4");

proveeAI.addEventListener("click",()=>{
    imgPOS.style.display="none";
    capaPAI.style.display="inline";
});

let usuario = [
    {
        id:1578,
        usuario: 'Akhira',
        passcode: '123456',
        rol: 'Administrador',
        telefono:82002241,
        correo:"onichan712@example.com",
        direccion:"De donde fue la calle de los muertos por ahi vivo",
        estado:1
    },
    {
        id:1809,
        usuario: 'Jorge',
        passcode: '001890',
        rol: 'Gerente',
        telefono:22095543,
        correo:"sistemas1234@example.com",
        direccion:"De la calle de los riquitiki dos cuadras al norte",
        estado:1
    },
    {
        id:7725,
        usuario: 'Jurgen',
        passcode: '098765',
        rol: 'Cajero',
        telefono:84755574,
        correo:"ftpredes78@example.com",
        direccion:"Del azul azul media arriba",
        estado:1
    }
];

//Módulo para visualizar los usuarios activos e inactivos
document.getElementById("pActivos").addEventListener("click",()=>{
    let tablaBody=document.getElementById("structHTML");
    tablaBody.innerHTML="";
    for(let usr of usuario){
        if(usr.estado==1)
        {
            tablaBody.innerHTML+=`
        <tr>
            <th scope="row">${usr.id}</th>
            <td class="table-active">${usr.usuario}</td>
            <td>${usr.passcode}</td>
            <td class="table-active">${usr.rol}</td>
            <td>${usr.telefono}</td>
            <td class="table-active">${usr.correo}</td>
            <td>${usr.direccion}</td>
            <td class="table-active">${usr.estado}</td>
        </tr>`;
        } 
    }
    if(!tablaBody.innerHTML)
        {
            alert("No hay usuarios activos en la BDD");
        }
});

document.getElementById("pInactivos").addEventListener("click",()=>{
    let tablaBody=document.getElementById("structHTML");
    tablaBody.innerHTML="";
    for(let usr of usuario){
        if(usr.estado==0)
            {
                tablaBody.innerHTML+=`
            <tr>
                <th scope="row">${usr.id}</th>
                <td class="table-active">${usr.usuario}</td>
                <td>${usr.passcode}</td>
                <td class="table-active">${usr.rol}</td>
                <td>${usr.telefono}</td>
                <td class="table-active">${usr.correo}</td>
                <td>${usr.direccion}</td>
                <td class="table-active">${usr.estado}</td>
            </tr>`;
            }
    }    
    if(!tablaBody.innerHTML)
    {
        alert("No hay usuarios inactivos en la BDD");
    }
});
