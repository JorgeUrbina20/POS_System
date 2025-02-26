//Módulo para dar de baja a un usuario:
let identificacion=document.getElementById("floatingIdentificacion");
let buscar=document.getElementById("buscarUsuario");
let baja=document.getElementById("bajaUsuario");
//Exportar los datos de usuarios desde el documento login
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

//Programación del módulo para dar de baja a un usuario
buscar.addEventListener("click",()=>{
    let id=identificacion.value;
    let tbody=document.getElementById("cuerpoTabla");
    let cont=0;
    tbody.innerHTML="";
    for(let user of usuario){
        let estructuraTabla=`
        <tr>
            <th scope="row">${user.id}</th>
            <td class="table-active">${user.usuario}</td>
            <td>${user.passcode}</td>
            <td class="table-active">${user.rol}</td>
            <td>${user.telefono}</td>
            <td class="table-active">${user.correo}</td>
            <td>${user.direccion}</td>
            <td class="table-active">${user.estado}</td>
        </tr>`;
        if(id==user.id){
            tbody.innerHTML=estructuraTabla;
            return;
        }  
        cont++; 
    }

    if(cont==usuario.length){
        alert("Usuario no encontrado");
        }
    /*
    Si el id coincide con algun usuario dará la 
    informacion del usuario
    en caso contrario mandará el mensaje usuario
    no encontrado.
    */
});

baja.addEventListener("click",()=>{
    let id=identificacion.value;
    let tbody=document.getElementById("cuerpoTabla");
    let cont=0;
    tbody.innerHTML="";
    for(let user of usuario){
        let estructuraTabla=`
        <tr>
            <th scope="row">${user.id}</th>
            <td class="table-active">${user.usuario}</td>
            <td>${user.passcode}</td>
            <td class="table-active">${user.rol}</td>
            <td>${user.telefono}</td>
            <td class="table-active">${user.correo}</td>
            <td>${user.direccion}</td>
            <td class="table-active">${user.estado}</td>
        </tr>`;
        if(id==user.id){
            user.estado=0;
            tbody.innerHTML=estructuraTabla;
            return;
        }  
        cont++; 
    }

    if(cont==usuario.length){
        alert(`El usuario con el id ${id} no existe en la BDD`);
        }
});

//Módulo para visualizar los usuarios activos e inactivos
document.getElementById("listA").addEventListener("click",()=>{
    let tablaBody=document.getElementById("Tbody");
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

document.getElementById("listI").addEventListener("click",()=>{
    let tablaBody=document.getElementById("Tbody");
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

//Sobre posición de interfaces por capas 6 sp.
//Módulo para el usuario

const ui1=document.getElementById("ui1");
const ui2=document.getElementById("ui2");
const ui3=document.getElementById("ui3");
const ui4=document.getElementById("ui4");

const crearU=document.getElementById("crearU");
const editarU=document.getElementById("editarU");
const bajaU=document.getElementById("bajaU");
const uAI=document.getElementById("uAI");

crearU.addEventListener("click",()=>{
    ui1.style.display="inline";
    ui2.style.display="none";
    ui3.style.display="none";
    ui4.style.display="none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
});

editarU.addEventListener("click",()=>{
    ui1.style.display="none";
    ui2.style.display="inline";
    ui3.style.display="none";
    ui4.style.display="none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
});
bajaU.addEventListener("click",()=>{
    ui1.style.display="none";
    ui2.style.display="none";
    ui3.style.display="inline";
    ui4.style.display="none";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
});
uAI.addEventListener("click",()=>{
    ui1.style.display="none";
    ui2.style.display="none";
    ui3.style.display="none";
    ui4.style.display="inline";
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
});

//Módulo para el proveedor
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");

const crearP=document.getElementById("crearP");
const editarP=document.getElementById("editarP");
const bajaP=document.getElementById("bajaP");
const pAI=document.getElementById("pAI");

crearP.addEventListener("click",()=>{
    p1.style.display="inline";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="none";
    ui1.style.display="none";
    ui2.style.display="none";
    ui3.style.display="none";
    ui4.style.display="none";
});

editarP.addEventListener("click",()=>{
    p1.style.display="none";
    p2.style.display="inline";
    p3.style.display="none";
    p4.style.display="none";
    ui1.style.display="none";
    ui2.style.display="none";
    ui3.style.display="none";
    ui4.style.display="none";
});
bajaP.addEventListener("click",()=>{
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="inline";
    p4.style.display="none";
    ui1.style.display="none";
    ui2.style.display="none";
    ui3.style.display="none";
    ui4.style.display="none";
});
pAI.addEventListener("click",()=>{
    p1.style.display="none";
    p2.style.display="none";
    p3.style.display="none";
    p4.style.display="inline";
    ui1.style.display="none";
    ui2.style.display="none";
    ui3.style.display="none";
    ui4.style.display="none";
});


/*
lógica en este módulo:

Cada usuario tiene un rol entonces cuando el usuario ingrese un pin que le 
pertenece a el, se cargara una interfaz
La lógica que se manejara en el otro módulo sera que una vez que se 
cargue la interfaz asignada verifica si es el usuario correcto(Autenticación de usuario)
si el usuario es correcto entonces cargar esa interfaz y los datos del usuario completos
*/

//---------------------------------------------------------------------------------------------//
//                              -->Cosas que no se pueden hacer en el js<--
//---------------------------------------------------------------------------------------------//
/*
Si quiero duplicar código el cual tiene identificadores unicos no se puede hacer eso ya  que 
tendria que colocarlo en el html, si se coloca en el js no lo captura.
Porque, porque al ser una estructura creada desde el js no es nativa del html.
*/



