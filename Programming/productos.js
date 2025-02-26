//Objetos platos
let plato1 = {
    Nombre: "Pollo",
    Cantidad: 15,
    precio: 110.00
};
let plato2 = {
    Nombre: "Cerdo",
    Cantidad: 20,
    precio: 130.00
};
let plato3 = {
    Nombre: "Ensalada",
    Cantidad: 25,
    precio: 30.00
};
let plato4 = {
    Nombre: "Carne",
    Cantidad: 30,
    precio: 80.00
};
//Obtener los elementos en el DOM
let btn1=document.getElementById("plato1");
let btn2=document.getElementById("plato2");
let btn3=document.getElementById("plato3");
let btn4=document.getElementById("plato4");

//Elementos del DOM que me muestra la cantidad y el precio de el producto
let cantidad=document.getElementById("cantidad");
let precio=document.getElementById("precio");
btn1.onclick=()=>{
    cantidad.innerText=plato1.Cantidad;
    precio.innerText=plato1.precio;
}

btn2.onclick=()=>{
    cantidad.innerText=plato2.Cantidad;
    precio.innerText=plato2.precio;
}

btn3.onclick=()=>{
    cantidad.innerText=plato3.Cantidad;
    precio.innerText=plato3.precio;
}

btn4.onclick=()=>{
    cantidad.innerText=plato4.Cantidad;
    precio.innerText=plato4.precio;
}
