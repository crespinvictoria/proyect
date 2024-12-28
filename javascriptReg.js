// Alertas para comprobar contraseña

let probar = document.getElementById("boton");

probar.addEventListener("click", function(p1,p2){
   
    var p1 = document.getElementById("password1").value;
    var p2 = document.getElementById("password2").value;

    if(p1 !== p2){
        Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",
            text: "Intentelo de nuevo",
            background: '#0e2a6e',
            color: '#e3ebff'
          })
        }else {
        Swal.fire({
            title: "Las contraseñas coinciden!",
            icon: "success",
            background: '#0e2a6e',
            color: '#e3ebff'
          });
    }
        }
    
);

// Guardar datos del form en LS

let form = document.getElementById('for');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let nombreDeUsuario = document.getElementById('nombreDeUsuario');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let contraseña = document.getElementById('password1');
let submitButton = document.getElementById('submit');
let contraseña2 = document.getElementById('password2')



form.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombreUsuario = nombre.value.trim();
    let apellidoUsuario = apellido.value.trim();
    let username = nombreDeUsuario.value.trim();
    let emailUsuario = email.value.trim();
    let telefonoUsuario = telefono.value.trim();
    let contraseñaUsuario = contraseña.value.trim();
    let contraseñaUsuario2 = contraseña2.value.trim();


// alerta para validar contraseñas


    if (contraseñaUsuario !== contraseñaUsuario2) {
        Swal.fire({
            icon: "error",
            title: "Comprueba las contraseñas!",
            text: "Intentelo de nuevo",
            background: '#0e2a6e',
            color: '#e3ebff'
        })
        return;
    }

    // alerta para completar datos 

    if (contraseñaUsuario2 =="" || contraseñaUsuario == "" || telefonoUsuario == "" || emailUsuario == "" || username == "" || apellidoUsuario == "" || nombreUsuario == ""){
        Swal.fire({
            title: "Hay campos incompletos!!!!!!!!!!!!!!!!!!!!",
            text: "Complete los campos!!!!!!!",
            imageUrl: "https://i.pinimg.com/736x/df/fc/11/dffc1172425c7924f05235fda334e90a.jpg",
            imageWidth: 300,
            imageHeight: 300,
          });
        return;
    }


    localStorage.setItem('Nombre de usuario', nombreUsuario);
    localStorage.setItem('Apellido de usuario', apellidoUsuario);
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', emailUsuario);
    localStorage.setItem('Telefono', telefonoUsuario);
    localStorage.setItem('Contraseña', contraseñaUsuario);


// alerta de form completo

    Swal.fire({
        title: "¡Te has registrado correctamente!",
        text: `Bienvenido ${nombreUsuario}`,
        imageUrl: "https://i.pinimg.com/736x/23/e9/ec/23e9ec7851f318521ff3c3ea9f1d617c.jpg",
        imageWidth: 300,
        imageHeight: 300,
      });
})



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

