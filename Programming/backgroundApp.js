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
