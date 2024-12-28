// dark mode


let darkModeButton = document.getElementById("darkMode");
let body = document.getElementById("body");
let headerUl = document.getElementById("headerUl");
let headerA = document.getElementsByClassName("headerA");
let navUl = document.getElementById("navUl");
let footer = document.getElementById("footer_div");
let footerNS = document.getElementById("footerNS");
let footerInfo = document.getElementById("footerInfo");
let footerLi1 = document.getElementById("footer_li1");
let footerLi2 = document.getElementById("footer_li2");
let footerLi3 = document.getElementById("footer_li3");
let footerLi4 = document.getElementById("footer_li4");
let footerLi5 = document.getElementById("footer_li5");
let footerLi6 = document.getElementById("footer_li6");

darkModeButton.addEventListener("click", function(){
    body.classList.toggle("darkModeBody");
    headerUl.classList.toggle("darkModeHeaderUl");
    for (let i = 0; i < headerA.length; i++) {
    headerA[i].classList.toggle("darkModeHeaderA");
    }
    navUl.classList.toggle("darkModeHeaderUl");
    footer.classList.toggle("darkModeFooter");
    footerInfo.classList.toggle("darkModeFooterText");
    footerNS.classList.toggle("darkModeFooterText");
    footerLi1.classList.toggle("darkModeFooterText");
    footerLi2.classList.toggle("darkModeFooterText");
    footerLi3.classList.toggle("darkModeFooterText");
    footerLi4.classList.toggle("darkModeFooterText");
    footerLi5.classList.toggle("darkModeFooterText");
    footerLi6.classList.toggle("darkModeFooterText");

})

// api

fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
.then((respuesta) => respuesta.json())
.then((datos) => {
    console.log(datos)
    let contenedorPokemon = document.getElementById("div_pokemon");
    datos.results.forEach((pokemon) => {

        // console.log(pokemon.name)
        // console.log(pokemon.name)
        const divPokemones = document.createElement("div")
        divPokemones.innerHTML = `<h3>${pokemon.name}</h3>`
        contenedorPokemon.append(divPokemones);

    });


})

