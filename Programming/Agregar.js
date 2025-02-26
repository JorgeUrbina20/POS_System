//import {Snacks} from '../Programming/App';

//Autenticación del usuario(Mesero) que lo esta atentiendo
const id = document.getElementById("id");
const seleccion=document.getElementById("valorSelect");

seleccion.addEventListener("click",()=>{
    let valor=seleccion.value;
    if(valor==='Jorge')
        id.innerText='#1809';
    else
        if(valor==='Jurgen')
            id.innerText='#7725';
        else
            if(valor==='Akhira')
                id.innerText='#1578';  
            else
            id.innerText='#000';  
});

/*Obtener los elementos de la tabla*/
let nombre1=document.getElementById("nombre1");
let precio1=document.getElementById("precio1");
let total1=document.getElementById("total1");

let nombre2=document.getElementById("nombre2");
let precio2=document.getElementById("precio2");
let total2=document.getElementById("total2");

let nombre3=document.getElementById("nombre3");
let precio3=document.getElementById("precio3");
let total3=document.getElementById("total3");

let nombre4=document.getElementById("nombre4");
let precio4=document.getElementById("precio4");
let total4=document.getElementById("total4");

let nombre5=document.getElementById("nombre5");
let precio5=document.getElementById("precio5");
let total5=document.getElementById("total5");

let nombre6=document.getElementById("nombre6");
let precio6=document.getElementById("precio6");
let total6=document.getElementById("total6");

//Interactividad con los botones de incrementar y decrementar
const decre1 = document.getElementById("decrementar1");
const incre1 = document.getElementById("incrementar1");
const numero1 = document.getElementById("num1");

const decre2 = document.getElementById("decrementar2");
const incre2 = document.getElementById("incrementar2");
const numero2 = document.getElementById("num2");

const decre3 = document.getElementById("decrementar3");
const incre3 = document.getElementById("incrementar3");
const numero3 = document.getElementById("num3");

const decre4 = document.getElementById("decrementar4");
const incre4 = document.getElementById("incrementar4");
const numero4 = document.getElementById("num4");

const decre5 = document.getElementById("decrementar5");
const incre5 = document.getElementById("incrementar5");
const numero5 = document.getElementById("num5");

const decre6 = document.getElementById("decrementar6");
const incre6 = document.getElementById("incrementar6");
const numero6 = document.getElementById("num6");

//Variables contadores
let contador1=0;
let contador2=0;
let contador3=0;
let contador4=0;
let contador5=0;
let contador6=0;

/*
Alertas de stock
    Programar alertar de stock cuando un producto tenga en existencia maxima
*/

//------------------------------- 1 --------------------------------//
incre1.addEventListener("click",()=>{
    //Validación de el contador no puede ser negativo
    if(contador1>=15)//Simulacion de una alerta de stock
    {
        contador1=15;
        alert (`No se puede vender mas de ${contador1} productos`);
    }
    else
    {
        contador1++;
    }
    numero1.innerText=contador1;
})

decre1.addEventListener("click",()=>{
    if(contador1<=0)
        {
            contador1=0;
        }
        else
        {
            contador1--;
        }
    numero1.innerText=contador1;
})

//------------------------------ 2 ---------------------------------//
incre2.addEventListener("click",()=>{
    //Validación de el contador no puede ser negativo
    if(contador2>=10)//Simulacion de una alerta de stock
    {
        contador2=10;
        alert (`No se puede vender mas de ${contador2} productos`);
    }
    else
    {
        contador2++;
    }
    numero2.innerText=contador2;
})

decre2.addEventListener("click",()=>{
    if(contador2<=0)
        {
            contador2=0;
        }
        else
        {
            contador2--;
        }
    numero2.innerText=contador2;
})

//---------------------------- 3 -----------------------------------//
incre3.addEventListener("click",()=>{
    //Validación de el contador no puede ser negativo
    if(contador3>=18)//Simulacion de una alerta de stock
    {
        contador3=18;
        alert (`No se puede vender mas de ${contador3} productos`);
    }
    else
    {
        contador3++;
    }
    numero3.innerText=contador3;
})

decre3.addEventListener("click",()=>{
    if(contador3<=0)
        {
            contador3=0;
        }
        else
        {
            contador3--;
        }
    numero3.innerText=contador3;
})

//--------------------------- 4 ------------------------------------//
incre4.addEventListener("click",()=>{
    //Validación de el contador no puede ser negativo
    if(contador4>=25)//Simulacion de una alerta de stock
    {
        contador4=25;
        alert (`No se puede vender mas de ${contador4} productos`);
    }
    else
    {
        contador4++;
    }
    numero4.innerText=contador4;
})

decre4.addEventListener("click",()=>{
    if(contador4<=0)
        {
            contador4=0;
        }
        else
        {
            contador4--;
        }
    numero4.innerText=contador4;
})

//---------------------------- 5 -----------------------------------//
incre5.addEventListener("click",()=>{
    //Validación de el contador no puede ser negativo
    if(contador5>=15)//Simulacion de una alerta de stock
    {
        contador5=15;
        alert (`No se puede vender mas de ${contador5} productos`);
    }
    else
    {
        contador5++;
    }
    numero5.innerText=contador5;
})

decre5.addEventListener("click",()=>{
    if(contador5<=0)
        {
            contador5=0;
        }
        else
        {
            contador5--;
        }
    numero5.innerText=contador5;
})

//-------------------------------- 6 -------------------------------//
incre6.addEventListener("click",()=>{
    //Validación de el contador no puede ser negativo
    if(contador6>=16)//Simulacion de una alerta de stock
    {
        contador6=16;
        alert (`No se puede vender mas de ${contador6} productos`);
    }
    else
    {
        contador6++;
    }
    numero6.innerText=contador6;
})

decre6.addEventListener("click",()=>{
    if(contador6<=0)
        {
            contador6=0;
        }
        else
        {
            contador6--;
        }
    numero6.innerText=contador6;
})

//Módulo de clasificación de productos
let Alimento = [
    {imgRuta: '../Images/Alimentos/a1.jpg', descripcion: 'imgAlimento1', precio: 10.50},
    {imgRuta: '../Images/Alimentos/a2.jpg', descripcion: 'imgAlimento2', precio: 12.30},
    {imgRuta: '../Images/Alimentos/a3.jpg', descripcion: 'imgAlimento3', precio: 8.75},
    {imgRuta: '../Images/Alimentos/a4.jpg', descripcion: 'imgAlimento4', precio: 14.00},
    {imgRuta: '../Images/Alimentos/a5.jpg', descripcion: 'imgAlimento5', precio: 9.90},
    {imgRuta: '../Images/Alimentos/a6.jpg', descripcion: 'imgAlimento6', precio: 11.20},
    {imgRuta: '../Images/Alimentos/a7.jpg', descripcion: 'imgAlimento7', precio: 7.50},
    {imgRuta: '../Images/Alimentos/a8.jpg', descripcion: 'imgAlimento8', precio: 13.40},
    {imgRuta: '../Images/Alimentos/a9.jpg', descripcion: 'imgAlimento9', precio: 6.80},
    {imgRuta: '../Images/Alimentos/a10.jpg', descripcion: 'imgAlimento10', precio: 5.95},
    {imgRuta: '../Images/Alimentos/a11.jpg', descripcion: 'imgAlimento11', precio: 10.00},
    {imgRuta: '../Images/Alimentos/a12.jpg', descripcion: 'imgAlimento12', precio: 11.50},
    {imgRuta: '../Images/Alimentos/a13.jpg', descripcion: 'imgAlimento13', precio: 15.25},
    {imgRuta: '../Images/Alimentos/a14.jpg', descripcion: 'imgAlimento14', precio: 16.00},
    {imgRuta: '../Images/Alimentos/a15.jpg', descripcion: 'imgAlimento15', precio: 9.40}
];


//Bebidas
let BebidaR = [
    {imgRuta: '../Images/Bebidas/b1.jpg', descripcion: 'imgBebida1', precio: 3.50},
    {imgRuta: '../Images/Bebidas/b2.jpg', descripcion: 'imgBebida2', precio: 4.00},
    {imgRuta: '../Images/Bebidas/b3.jpg', descripcion: 'imgBebida3', precio: 2.80},
    {imgRuta: '../Images/Bebidas/b4.jpg', descripcion: 'imgBebida4', precio: 5.00},
    {imgRuta: '../Images/Bebidas/b5.jpg', descripcion: 'imgBebida5', precio: 3.30},
    {imgRuta: '../Images/Bebidas/b6.jpg', descripcion: 'imgBebida6', precio: 4.20},
    {imgRuta: '../Images/Bebidas/b7.jpg', descripcion: 'imgBebida7', precio: 2.90},
    {imgRuta: '../Images/Bebidas/b8.jpg', descripcion: 'imgBebida8', precio: 3.60},
    {imgRuta: '../Images/Bebidas/b9.jpg', descripcion: 'imgBebida9', precio: 3.00},
    {imgRuta: '../Images/Bebidas/b10.jpg', descripcion: 'imgBebida10', precio: 4.50},
    {imgRuta: '../Images/Bebidas/b11.jpg', descripcion: 'imgBebida11', precio: 5.10},
    {imgRuta: '../Images/Bebidas/Imagen3.png', descripcion: 'imgBebida12', precio: 4.70},
    {imgRuta: '../Images/Bebidas/b13.jpg', descripcion: 'imgBebida13', precio: 3.80},
    {imgRuta: '../Images/Bebidas/b14.jpg', descripcion: 'imgBebida14', precio: 6.00},
    {imgRuta: '../Images/Bebidas/b15.jpg', descripcion: 'imgBebida15', precio: 2.50},
    {imgRuta: "../Images/Soda/sd1.jpeg", descripcion: 'imgBebida16', precio: 1.90},
    {imgRuta: "../Images/Soda/sd2.jpeg", descripcion: 'imgBebida17', precio: 2.20},
    {imgRuta: "../Images/Soda/sd3.jpeg", descripcion: 'imgBebida18', precio: 2.40},
    {imgRuta: "../Images/Soda/sd4.jpeg", descripcion: 'imgBebida19', precio: 2.80},
    {imgRuta: "../Images/Soda/sd5.jpeg", descripcion: 'imgBebida20', precio: 2.10},
    {imgRuta: "../Images/Soda/sd6.jpeg", descripcion: 'imgBebida21', precio: 3.00},
    {imgRuta: "../Images/Soda/sd7.jpeg", descripcion: 'imgBebida22', precio: 1.80},
    {imgRuta: "../Images/Soda/sd8.jpeg", descripcion: 'imgBebida23', precio: 3.20}
];


//Bebidas Alcoholicas
let BebidaA = [
    {imgRuta: '../Images/Cervezas/cer1.JPE', descripcion: 'imgBebida1', precio: 7.50},
    {imgRuta: '../Images/Cervezas/cer2.jpeg', descripcion: 'imgBebida2', precio: 8.00},
    {imgRuta: '../Images/Cervezas/cer3.jpeg', descripcion: 'imgBebida3', precio: 6.70},
    {imgRuta: '../Images/Cervezas/cer4.jpeg', descripcion: 'imgBebida4', precio: 7.20},
    {imgRuta: '../Images/Cervezas/cer5.jpeg', descripcion: 'imgBebida5', precio: 7.80},
    {imgRuta: '../Images/Cervezas/cer6.jpeg', descripcion: 'imgBebida6', precio: 6.90},
    {imgRuta: '../Images/Cervezas/cer7.jpeg', descripcion: 'imgBebida7', precio: 8.10},
    {imgRuta: '../Images/Cervezas/cer8.jpeg', descripcion: 'imgBebida8', precio: 6.50},
    {imgRuta: '../Images/Cervezas/cer9.jpeg', descripcion: 'imgBebida9', precio: 7.00},
    {imgRuta: '../Images/Cervezas/cer10.jpeg', descripcion: 'imgBebida10', precio: 6.80},
    {imgRuta: '../Images/Cervezas/cer11.jpeg', descripcion: 'imgBebida11', precio: 7.30},
    {imgRuta: '../Images/Cervezas/cer12.jpeg', descripcion: 'imgBebida12', precio: 7.40}
];

 
//Condimentos
let Condimento = [
    {imgRuta: '../Images/Condimentos/c1.jpg', descripcion: 'imgCondimento1', precio: 2.50},
    {imgRuta: '../Images/Condimentos/c2.jpg', descripcion: 'imgCondimento2', precio: 3.00},
    {imgRuta: '../Images/Condimentos/c3.jpg', descripcion: 'imgCondimento3', precio: 1.80},
    {imgRuta: '../Images/Condimentos/c4.jpg', descripcion: 'imgCondimento4', precio: 2.70},
    {imgRuta: '../Images/Condimentos/c5.jpg', descripcion: 'imgCondimento5', precio: 3.20},
    {imgRuta: '../Images/Condimentos/c6.jpg', descripcion: 'imgCondimento6', precio: 2.40},
    {imgRuta: '../Images/Condimentos/c7.jpg', descripcion: 'imgCondimento7', precio: 3.50},
    {imgRuta: '../Images/Condimentos/c8.jpg', descripcion: 'imgCondimento8', precio: 1.90},
    {imgRuta: '../Images/Condimentos/c9.jpg', descripcion: 'imgCondimento9', precio: 2.60},
    {imgRuta: '../Images/Condimentos/c10.jpg', descripcion: 'imgCondimento10', precio: 2.90},
    {imgRuta: '../Images/Condimentos/c11.jpg', descripcion: 'imgCondimento11', precio: 3.10}
];


//Higiene Personal
let HigienePersonal = [
    {imgRuta: '../Images/Higiene_Personal/h1.jpg', descripcion: 'imgHP1', precio: 5.50},
    {imgRuta: '../Images/Higiene_Personal/h2.jpg', descripcion: 'imgHP2', precio: 6.00},
    {imgRuta: '../Images/Higiene_Personal/h3.jpg', descripcion: 'imgHP3', precio: 4.80},
    {imgRuta: '../Images/Higiene_Personal/h4.jpg', descripcion: 'imgHP4', precio: 5.20},
    {imgRuta: '../Images/Higiene_Personal/h5.jpg', descripcion: 'imgHP5', precio: 4.90},
    {imgRuta: '../Images/Higiene_Personal/h6.jpg', descripcion: 'imgHP6', precio: 6.30},
    {imgRuta: '../Images/Higiene_Personal/h7.jpg', descripcion: 'imgHP7', precio: 5.40},
    {imgRuta: '../Images/Higiene_Personal/h8.jpg', descripcion: 'imgHP8', precio: 5.10},
    {imgRuta: '../Images/Higiene_Personal/h9.jpg', descripcion: 'imgHP9', precio: 4.70},
    {imgRuta: '../Images/Higiene_Personal/h10.jpg', descripcion: 'imgHP10', precio: 6.20},
    {imgRuta: '../Images/Higiene_Personal/h11.jpg', descripcion: 'imgHP11', precio: 6.50},
    {imgRuta: '../Images/Higiene_Personal/h12.jpg', descripcion: 'imgHP12', precio: 5.60},
    {imgRuta: '../Images/Higiene_Personal/h13.jpg', descripcion: 'imgHP13', precio: 5.30},
    {imgRuta: '../Images/Higiene_Personal/h14.jpg', descripcion: 'imgHP14', precio: 7.00},
    {imgRuta: '../Images/Higiene_Personal/h15.jpg', descripcion: 'imgHP15', precio: 4.60},
    {imgRuta: '../Images/Higiene_Personal/h16.jpg', descripcion: 'imgHP16', precio: 6.10},
    {imgRuta: '../Images/Higiene_Personal/h17.jpg', descripcion: 'imgHP17', precio: 5.80},
    {imgRuta: '../Images/Higiene_Personal/h18.jpg', descripcion: 'imgHP18', precio: 4.40},
    {imgRuta: '../Images/Higiene_Personal/h19.jpg', descripcion: 'imgHP19', precio: 6.00},
    {imgRuta: '../Images/Higiene_Personal/h20.jpeg', descripcion: 'imgHP20', precio: 5.70},
    {imgRuta: '../Images/Higiene_Personal/h21.png', descripcion: 'imgHP21', precio: 6.40}
];


//Lacteos y refrigerados 
let LacteosYRefrigerados = [
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr1.jpg', descripcion: 'imgLYR1', precio: 3.50},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr2.jpg', descripcion: 'imgLYR2', precio: 2.80},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr3.jpg', descripcion: 'imgLYR3', precio: 4.00},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr4.jpg', descripcion: 'imgLYR4', precio: 3.20},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr5.jpg', descripcion: 'imgLYR5', precio: 3.10},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr6.jpg', descripcion: 'imgLYR6', precio: 4.30},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr7.jpg', descripcion: 'imgLYR7', precio: 3.50},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr8.jpg', descripcion: 'imgLYR8', precio: 3.80},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr9.jpg', descripcion: 'imgLYR9', precio: 2.90},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr10.jpg', descripcion: 'imgLYR10', precio: 3.60},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr11.jpg', descripcion: 'imgLYR11', precio: 3.40},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr12.jpeg', descripcion: 'imgLYR12', precio: 4.50},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr13.jpg', descripcion: 'imgLYR13', precio: 3.70},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr14.jpg', descripcion: 'imgLYR14', precio: 3.00},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr15.jpg', descripcion: 'imgLYR15', precio: 4.00},
    {imgRuta: '../Images/Lacteos_Y_Refrigerados/lr16.jpg', descripcion: 'imgLYR16', precio: 3.20}
];


//Panaderia
let Panaderia = [
    {imgRuta: '../Images/Panaderia/p1.jpg', descripcion: 'imgPanaderia1', precio: 2.50},
    {imgRuta: '../Images/Panaderia/p2.jpg', descripcion: 'imgPanaderia2', precio: 3.00},
    {imgRuta: '../Images/Panaderia/p3.jpg', descripcion: 'imgPanaderia3', precio: 2.80},
    {imgRuta: '../Images/Panaderia/p4.jpg', descripcion: 'imgPanaderia4', precio: 2.90},
    {imgRuta: '../Images/Panaderia/p5.jpg', descripcion: 'imgPanaderia5', precio: 3.20},
    {imgRuta: '../Images/Panaderia/p6.jpg', descripcion: 'imgPanaderia6', precio: 3.00},
    {imgRuta: '../Images/Panaderia/p7.jpg', descripcion: 'imgPanaderia7', precio: 2.70},
    {imgRuta: '../Images/Panaderia/p8.jpg', descripcion: 'imgPanaderia8', precio: 3.10},
    {imgRuta: '../Images/Panaderia/p9.jpg', descripcion: 'imgPanaderia9', precio: 2.50},
    {imgRuta: '../Images/Panaderia/p10.jpg', descripcion: 'imgPanaderia10', precio: 2.90},
    {imgRuta: '../Images/Panaderia/p11.jpg', descripcion: 'imgPanaderia11', precio: 3.00},
    {imgRuta: '../Images/Panaderia/p12.jpg', descripcion: 'imgPanaderia12', precio: 2.80},
    {imgRuta: '../Images/Panaderia/p13.jpg', descripcion: 'imgPanaderia13', precio: 3.10},
    {imgRuta: '../Images/Panaderia/p14.jpg', descripcion: 'imgPanaderia14', precio: 3.20},
    {imgRuta: '../Images/Panaderia/p15.jpg', descripcion: 'imgPanaderia15', precio: 2.90},
    {imgRuta: '../Images/Panaderia/p16.jpg', descripcion: 'imgPanaderia16', precio: 3.40},
    {imgRuta: '../Images/Panaderia/p17.jpg', descripcion: 'imgPanaderia17', precio: 3.00},
    {imgRuta: '../Images/Panaderia/p18.jpg', descripcion: 'imgPanaderia18', precio: 3.50}
];


//Snacks
let Snack = [
    {imgRuta: '../Images/Snaks/sk1.jpg', descripcion: 'imgSnack1', precio: 1.50},
    {imgRuta: '../Images/Snaks/sk2.jpg', descripcion: 'imgSnack2', precio: 1.80},
    {imgRuta: '../Images/Snaks/sk3.jpg', descripcion: 'imgSnack3', precio: 2.00},
    {imgRuta: '../Images/Snaks/sk4.jpg', descripcion: 'imgSnack4', precio: 1.70},
    {imgRuta: '../Images/Snaks/sk5.jpg', descripcion: 'imgSnack5', precio: 2.20},
    {imgRuta: '../Images/Snaks/sk6.jpg', descripcion: 'imgSnack6', precio: 1.90},
    {imgRuta: '../Images/Snaks/sk7.jpg', descripcion: 'imgSnack7', precio: 2.50},
    {imgRuta: '../Images/Snaks/sk8.jpg', descripcion: 'imgSnack8', precio: 1.60},
    {imgRuta: '../Images/Snaks/sk9.jpg', descripcion: 'imgSnack9', precio: 1.80},
    {imgRuta: '../Images/Snaks/sk10.jpg', descripcion: 'imgSnack10', precio: 2.10},
    {imgRuta: '../Images/Snaks/sk11.jpg', descripcion: 'imgSnack11', precio: 2.40},
    {imgRuta: '../Images/Snaks/sk12.jpg', descripcion: 'imgSnack12', precio: 2.00},
    {imgRuta: '../Images/Snaks/sk13.jpeg', descripcion: 'imgSnack13', precio: 1.70},
    {imgRuta: '../Images/Snaks/sk14.jpg', descripcion: 'imgSnack14', precio: 2.30},
    {imgRuta: '../Images/Snaks/sk15.jpg', descripcion: 'imgSnack15', precio: 2.50},
    {imgRuta: '../Images/Snaks/sk16.jpg', descripcion: 'imgSnack16', precio: 2.10}
];

//----------------------------------------------------------------------
//Una vez que se crean los elementos claficar los productos por clase
//Prototype
/*
clases definidas alimento,bebidaR
--Donde estan clases se suponen que su conportamiento es como un array

Alimentos,BebidasR
--Donde se suponene que sos los arrays
*/

/*Clases existente
-> alimentosCl
-> bebidasRCl
-> bebidasACl
-> lacteosCl
-> condimentosCl
-> snacksCl
-> panaderiaCl
-> higienePersonalCl

Las clases se activan para realizar las funciones necesario cuando 
le de click a los iconos 
*/

//Constantes de las filas según su categoria
const sAlimentos=document.getElementById("comida");
const sBebidasR=document.getElementById("bebidaR");
const sBebidasA=document.getElementById("bebidaA");
const sLacteos=document.getElementById("lacteos");
const sCondimentos=document.getElementById("condi");
const sSnacks=document.getElementById("sK");
const sPanaderia= document.getElementById("panaderia");
const sHP=document.getElementById("hP");

//seccionAlimentos
sAlimentos.addEventListener("click",function(){
    let valorCl, valorA;

    let alimentosCl=document.querySelectorAll(".alimentosCl");
    for(let j=0; j<alimentosCl.length;j++) //Entran al bucle de cada clase se comporta como un array.
    {
        alimentosCl[j].addEventListener("click",()=>{ //Espera a que se le click a un elemento de la clase
            for(let i=0; i<Alimento.length;i++)
            //Verificar porque me  esta dando como un objeto y no como un array de objetos como el es verificar como se comporta en el documento de app.js
            //Entra al array de alimentos con toda la  descripcion de cada producto.
            {
                    valorCl=alimentosCl[j].textContent.trim();//Eliminar espacios en blancos
                    valorA=Alimento[i].descripcion.trim();
                    
                    if(valorCl==valorA) 
                    {            
                            //Completar
                            let num1=parseInt(numero1.innerText);//Necesita ser parseado para encontrar el total.
                            console.log(num1);
                            if(nombre1.innerText)
                            {
                              alert("ya existe un valor en num1"); 
                              console.info(nombre1.innerText); 
                            }
                            else
                            {
                                nombre1.innerText=Alimento[i].descripcion;
                                precio1.innerText=Alimento[i].precio;
                                let precioConvertido1=parseFloat(precio1.innerText);
                                total1.innerText=num1*precioConvertido1;
                            }
                            /*`${nombre[i]}`=Alimento[i].descripcion;
                            console.log(`${nombre[i]}`);*/
                            let nombre, precio, total;
                            let cantidad=numero1.innerText;// capturar la cantidad que se esta ingresando por teclado
                            console.info(cantidad);
                            break; //Si ha sido encontrado no mas iteracion solo la requerida.
                            /*nombre=N;
                            precio=P;
                            total=cantidad*precio
                            //---> tabla Elementos <---
                            nombreT=nombre;
                            precioT=precio;
                            totalT=precio
                            //--Operación para calcular el total 
                            cantidad*precio= total;*/
                    }
            //Obetener el valor  de la descripcion actual de cada producto y compararlo
            }
        })
    }   
});



//Seria bueno analizar esta parte ya que creo que no es necesario las 60 recolecciones de id
/*
Eliminar los id=text(Numero); del html
let texto10=document.getElementById("text10");
plato10.Nombre=texto10.textContent;

*/

//Esta función es por si la llego a ocupar enves de la otra
/*function calcularSubtotal() {
    // Calcula el subtotal para cada plato
    let subtotal = 0;

    subtotal += cont1 * plato1.precio;
    subtotal += cont2 * plato2.precio;
    subtotal += cont3 * plato3.precio;
    subtotal += cont4 * plato4.precio;
    subtotal += cont5 * plato5.precio;
    subtotal += cont6 * plato6.precio;
    subtotal += cont7 * plato7.precio;

    // Actualiza el subtotal en la interfaz de usuario
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
}*/

// Función para calcular el subtotal
let subT=document.getElementById("subtotal");
function calcularSubtotal() {
    let subtotal = (cont1 * plato1.precio) +
                   (cont2 * plato2.precio) +
                   (cont3 * plato3.precio) +
                   (cont4 * plato4.precio) +
                   (cont5 * plato5.precio) +
                   (cont6 * plato6.precio) +
                   (cont7 * plato7.precio);
    subT.textContent = subtotal.toFixed(2); 
}


//btn cancelar
let btnC=document.getElementById("cancel");
const subTot=document.getElementById("subtotal");

btnC.addEventListener("click",function eliminarOrden(){
    numero1.textContent = 0;
    nombre1.textContent = '-';
    cantidad1.textContent = 0;
    precio1.textContent = '0.00';
    total1.textContent ='0.00';

    numero2.textContent = 0;
    nombre2.textContent = '-';
    cantidad2.textContent = 0;
    precio2.textContent = '0.00';
    total2.textContent ='0.00';
    
    numero3.textContent = 0;
    nombre3.textContent = '-';
    cantidad3.textContent = 0;
    precio3.textContent = '0.00';
    total3.textContent ='0.00';
    
    numero4.textContent = 0;
    nombre4.textContent = '-';
    cantidad4.textContent = 0;
    precio4.textContent = '0.00';
    total4.textContent ='0.00';
    
    numero5.textContent = 0;
    nombre5.textContent = '-';
    cantidad5.textContent = 0;
    precio5.textContent = '0.00';
    total7.textContent ='0.00';
    
    numero6.textContent = 0;
    nombre6.textContent = '-';
    cantidad6.textContent = 0;
    precio6.textContent = '0.00';
    total6.textContent ='0.00';
    subTot.textContent='';
});

