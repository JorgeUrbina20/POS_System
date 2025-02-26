//Datos para importar en los documentos que se
//requieran como el de el admin
let user = [
    {
        id:1578,
        usuario: 'Akhira',
        passcode: '123456',
        rol: 'Administrador',
        telefono:82002241,
        correo:"onichan712@example.com",
        direccion:"De donde fue la calle de los muertos por ahi vivo"
    },
    {
        id:1809,
        usuario: 'Jorge',
        passcode: '001809',
        rol: 'Gerencia',
        telefono:22095543,
        correo:"sistemas1234@example.com",
        direccion:"De la calle de los riquitiki dos cuadras al norte"
    },
    {
        id:7725,
        usuario: 'Jurgen',
        passcode: '098765',
        rol: 'Venta',
        telefono:84755574,
        correo:"ftpredes78@example.com",
        direccion:"Del azul azul media arriba dos al lago casa roja"
    }
];

const login = document.querySelector('#submit-btn');
let pin; 
//const pin = document.querySelector('#pin');
let i=0;


login.addEventListener("click", function(event){
    pin = document.getElementById("pin").value;
    event.preventDefault();
    let userFound = false;

    if(i==0)
        i=0;
    else
        if(i>0)
            i=i;

    //const usr = user.find(u => u.passcode === pin);

    for (let u of user) {
        if (u.passcode == pin) {
            userFound = true;
            switch (u.rol) {
                case 'Administrador':
                    window.location.href = '../Pages/index.html';
                    break;
                case 'Gerencia':
                    window.location.href = '../Pages/RolGerenteT.html';
                    break;
                case 'Venta':
                    window.location.href = '../Pages/rolVenta.html';
                    break;
            }
            break;
        }
    }

    if (!userFound) {
        alert("Pin incorrecto!");
        ++i;
    }
    if (i==3){
        const mensaje =document.querySelector('#mensaje');
        mensaje.style.color='red';
        mensaje.innerHTML='Limite de intentos agotados <br> Por favor contactarse con un administrador';
        document.querySelector('input').style.display = 'none';
        document.querySelector('#submit-btn').style.display = 'none';
        document.querySelector('h2').textContent = 'Denegado'; 
    }


});

//Ojo del elemento input eliminar no se va a implementar en el sistema
/*const ojito=document.querySelector(".ojo");

ojito.addEventListener("click",()=>{
    if(ojito.classList.contains("bi-eye"))
    {
        ojito.classList.remove("bi-eye");
        ojito.classList.add("bi-eye-slash");
        pin.getAttribute('type','text');
    }
    else
    ojito.classList.toggle("bi-eye");
});
*/

/*
lógica en este módulo:

Cada usuario tiene un rol entonces cuando el usuario ingrese un pin que le 
pertenece a el, se cargara una interfaz
La lógica que se manejara en el otro módulo sera que una vez que se 
cargue la interfaz asignada verifica si es el usuario correcto(Autenticación de usuario)
si el usuario es correcto entonces cargar esa interfaz y los datos del usuario completos
*/

