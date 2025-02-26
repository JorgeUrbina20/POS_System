//Interactividad en la barra de navegación (Fondo)

const iconoInteractivo=document.getElementById("fondo");
const nav=document.getElementById("barra");
const miTabla=document.getElementById("tableprin");
iconoInteractivo.addEventListener("click",()=>{
    if(iconoInteractivo.classList.contains("bi-brightness-high"))
    {
        iconoInteractivo.classList.remove("bi-brightness-high");
        iconoInteractivo.classList.add("bi-moon-stars-fill");
        nav.style.backgroundColor="darkblue";
        nav.style.color="aliceblue";
        miTabla.classList.add("table-dark");
    }
    else
    {
        iconoInteractivo.classList.remove("bi-moon-stars-fill");
        iconoInteractivo.classList.add("bi-brightness-high");
        nav.style.backgroundColor="skyblue";
        nav.style.color="black";
        if(miTabla.classList.contains("table-dark"))
        {
            miTabla.classList.remove("table-dark");
            miTabla.classList.add("table-light");

        }
    }
});

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


//Datos dinamicos sobre el reporte BDD actual JSON

const objectReport = [
    {"fecha": "2024-11-12", "producto": "Bebida Energética", "cantidad_vendida": 5, "precio_unitario": 2.00, "total_venta": 10.00, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Pan Integral", "cantidad_vendida": 3, "precio_unitario": 1.50, "total_venta": 4.50, "metodo_pago": "Efectivo", "vendedor": "Jorge"},
    {"fecha": "2024-11-12", "producto": "Leche Descremada", "cantidad_vendida": 2, "precio_unitario": 3.00, "total_venta": 6.00, "metodo_pago": "Efectivo", "vendedor": "Jurgen"},
    {"fecha": "2024-11-12", "producto": "Detergente", "cantidad_vendida": 1, "precio_unitario": 8.00, "total_venta": 8.00, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Galletas de Chocolate", "cantidad_vendida": 10, "precio_unitario": 1.00, "total_venta": 10.00, "metodo_pago": "Efectivo", "vendedor": "Jorge"},
    {"fecha": "2024-11-12", "producto": "Jugo de Naranja", "cantidad_vendida": 4, "precio_unitario": 2.50, "total_venta": 10.00, "metodo_pago": "Efectivo", "vendedor": "Jurgen"},
    {"fecha": "2024-11-12", "producto": "Papel Higiénico", "cantidad_vendida": 6, "precio_unitario": 0.75, "total_venta": 4.50, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Shampoo", "cantidad_vendida": 2, "precio_unitario": 5.00, "total_venta": 10.00, "metodo_pago": "Efectivo", "vendedor": "Jorge"},
    {"fecha": "2024-11-12", "producto": "Café", "cantidad_vendida": 3, "precio_unitario": 4.00, "total_venta": 12.00, "metodo_pago": "Efectivo", "vendedor": "Jurgen"},
    {"fecha": "2024-11-12", "producto": "Arroz", "cantidad_vendida": 5, "precio_unitario": 1.20, "total_venta": 6.00, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Frijoles", "cantidad_vendida": 4, "precio_unitario": 1.50, "total_venta": 6.00, "metodo_pago": "Efectivo", "vendedor": "Jorge"},
    {"fecha": "2024-11-12", "producto": "Aceite de Cocina", "cantidad_vendida": 2, "precio_unitario": 3.50, "total_venta": 7.00, "metodo_pago": "Efectivo", "vendedor": "Jurgen"},
    {"fecha": "2024-11-12", "producto": "Refresco", "cantidad_vendida": 8, "precio_unitario": 1.25, "total_venta": 10.00, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Cereal", "cantidad_vendida": 3, "precio_unitario": 3.00, "total_venta": 9.00, "metodo_pago": "Efectivo", "vendedor": "Jorge"},
    {"fecha": "2024-11-12", "producto": "Jabón de Manos", "cantidad_vendida": 5, "precio_unitario": 1.00, "total_venta": 5.00, "metodo_pago": "Efectivo", "vendedor": "Jurgen"},
    {"fecha": "2024-11-12", "producto": "Queso", "cantidad_vendida": 2, "precio_unitario": 4.50, "total_venta": 9.00, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Yogur", "cantidad_vendida": 6, "precio_unitario": 1.75, "total_venta": 10.50, "metodo_pago": "Efectivo", "vendedor": "Jorge"},
    {"fecha": "2024-11-12", "producto": "Pasta", "cantidad_vendida": 4, "precio_unitario": 2.00, "total_venta": 8.00, "metodo_pago": "Efectivo", "vendedor": "Jurgen"},
    {"fecha": "2024-11-12", "producto": "Salsa de Tomate", "cantidad_vendida": 3, "precio_unitario": 2.50, "total_venta": 7.50, "metodo_pago": "Efectivo", "vendedor": "Akhira"},
    {"fecha": "2024-11-12", "producto": "Helado", "cantidad_vendida": 2, "precio_unitario": 3.00, "total_venta": 6.00, "metodo_pago": "Efectivo", "vendedor": "Jorge"}
];

let tablaBody= document.getElementById("HTMLStruct");
let iconReport=document.getElementById("showReport");
let i;

iconReport.addEventListener("click",()=>{
    tablaBody.innerHTML="";
    for(i=0;i<objectReport.length;i++){
        let structHTML=`
        <tr>
            <th scope="row">${i+1}</th>
            <td>${objectReport[i].fecha}</td>
            <td>${objectReport[i].producto}</td>
            <td>${objectReport[i].cantidad_vendida}</td>
            <td>${objectReport[i].precio_unitario}</td>
            <td>${objectReport[i].total_venta}</td>
            <td>${objectReport[i].metodo_pago}</td>
            <td>${objectReport[i].vendedor}</td>
        </tr>
        `;
        tablaBody.innerHTML+=structHTML;
    }
})

