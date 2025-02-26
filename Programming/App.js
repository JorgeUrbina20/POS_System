//Interactividad en la barra de navegación (Fondo)

const iconoInteractivo=document.getElementById("fondo");
const LetrasColores=document.getElementById("princicol");
const nav=document.getElementById("barra");

iconoInteractivo.addEventListener("click",()=>{
    if(iconoInteractivo.classList.contains("bi-brightness-high"))
    {
        iconoInteractivo.classList.remove("bi-brightness-high");
        iconoInteractivo.classList.add("bi-moon-stars-fill");
        nav.style.backgroundColor="darkblue";
        nav.style.color="aliceblue";
        LetrasColores.style.color="white";
        LetrasColores.style.backgroundColor="black";
        /*document.body.style.backgroundColor="black";*/
    }
    else
    {
        iconoInteractivo.classList.remove("bi-moon-stars-fill");
        iconoInteractivo.classList.add("bi-brightness-high");
        nav.style.backgroundColor="skyblue";
        nav.style.color="black";
        LetrasColores.style.color="black";
        LetrasColores.style.backgroundColor="aliceblue";
    }
})

const hora=document.getElementById("hora");
const minutos=document.getElementById("minutos");
const segundos=document.getElementById("segundos");

function horaActual(){
    const miFecha=new Date();
    hora.textContent=miFecha.getHours();
    minutos.textContent=miFecha.getMinutes();
    segundos.textContent=miFecha.getSeconds();
}

    setInterval(function(){
        horaActual();
    },1000);

//Array de objetos según su categoria
//Módulo de clasificación de productos
let Alimentos = [
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
let BebidasR = [
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
let BebidasA = [
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
let Condimentos = [
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
let Higiene_Personal = [
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
let Lacteos_Y_Refrigerados = [
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
let Panaderias = [
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
let Snacks = [
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

//export {Snacks};

let imgPOSFondo=document.getElementById('imgPOS');

//Clasificación de productos
const comida=document.getElementById("comida");
const bebidaR=document.getElementById("bebidaR");
const bebidaA=document.getElementById("bebidaA");
const lacteos=document.getElementById("lacteos");
const condi=document.getElementById("condi");
const sK=document.getElementById("sK");
const panaderia= document.getElementById("panaderia");
const hp=document.getElementById("hP");
//-----Fin de la clasificación de productos-----
//Constantes de las filas según su categoria
const seccionAlimentos=document.getElementById("seccionAlimentos");
const seccionBebidasR=document.getElementById("seccionBebidasR");
const seccionBebidasA=document.getElementById("seccionBebidasA");
const seccionLacteos=document.getElementById("seccionLacteos");
const seccionCondimentos=document.getElementById("seccionCondimentos");
const seccionSnacks=document.getElementById("seccionSnacks");
const seccionPanaderia= document.getElementById("seccionPanaderia");
const seccionHP=document.getElementById("seccionHP");


let estructuraHTML; //Variable global
comida.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let i=0;i<Alimentos.length;i++){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 alimentosCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${Alimentos[i].imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${Alimentos[i].descripcion}</h5>
            </div>
        </div>`;
    }
        seccionAlimentos.innerHTML=estructuraHTML;
})

bebidaR.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let i=0;i<BebidasR.length;i++){
        estructuraHTML=`
        <div class="col-6 col-md-4 col-lg-3 bebidasRCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${BebidasR[i].imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${BebidasR[i].descripcion}</h5>
            </div>
        </div>`;
        seccionBebidasR.innerHTML+=estructuraHTML;
    }
})

bebidaA.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let a of BebidasA){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 bebidasACl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${a.imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${a.descripcion}</h5>
            </div>
        </div>`;
    }
        seccionBebidasA.innerHTML=estructuraHTML;
});

lacteos.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let lr of Lacteos_Y_Refrigerados){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 lacteosCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${lr.imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${lr.descripcion}</h5>
            </div>
        </div>`;
    }
        seccionLacteos.innerHTML=estructuraHTML;
});

condi.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let c of Condimentos){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 condimentosCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${c.imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${c.descripcion}</h5>
            </div>
        </div>`;
    }
        seccionCondimentos.innerHTML=estructuraHTML;
});

sK.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let sk of Snacks){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 snacksCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${sk.imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${sk.descripcion}</h5>
            </div>
        </div>`;
    }
        seccionSnacks.innerHTML=estructuraHTML;
});

panaderia.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let p of Panaderias){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 panaderiaCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${p.imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${p.descripcion}</h5>
            </div>
        </div>`;
    }
        seccionPanaderia.innerHTML=estructuraHTML;
});

hp.addEventListener("click",()=>{
    imgPOSFondo.style.display="none";
    //Limpiar todas las secciones donde se muestran fts.
    seccionAlimentos.innerHTML="";
    seccionBebidasR.innerHTML="";
    seccionBebidasA.innerHTML="";
    seccionLacteos.innerHTML="";
    seccionCondimentos.innerHTML="";
    seccionSnacks.innerHTML="";
    seccionPanaderia.innerHTML="";
    seccionHP.innerHTML="";


    estructuraHTML="";
    for(let HP of Higiene_Personal){
        estructuraHTML+=`
        <div class="col-6 col-md-4 col-lg-3 higienePersonalCl">
            <div class="card mt-2" style="width: 10rem;">
                <img src="${HP.imgRuta}" class="card-img-top" alt="Food">
            </div>
            <div class="card-body">
                <h5 id="text1" class="card-title text-center">${HP.descripcion}</h5>
            </div>
        </div>`;
    }
        seccionHP.innerHTML=estructuraHTML;
});
