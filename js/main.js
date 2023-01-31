// PRODUCTOS

const productos = [
    // MONITORES
    {
        id: "monitor-01",
        titulo: "Monitor Gamer 23,6 Redragon Gm3cc236 Ruby Fhd 165hz",
        imagen: "./img/monitor01.jpg",
        categoria: {
            nombre: "Monitores",
            id: "monitores"
        },
        precio: 99500
    },
    {
        id: "monitor-02",
        titulo: "Monitor Gamer 24 Level Up Full Hd 144hz 1ms 24-up5500",
        imagen: "./img/monitor02.jpg",
        categoria: {
            nombre: "Monitores",
            id: "monitores"
        },
        precio: 75600
    },
    {
        id: "monitor-03",
        titulo: "Monitor gamer curvo Samsung C24RG5 LCD 23.5 negro",
        imagen: "./img/monitor03.jpg",
        categoria: {
            nombre: "Monitores",
            id: "monitores"
        },
        precio: 73500
    },
    {
        id: "monitor-04",
        titulo: "Monitor Gamer Aopen Led 25'' Full Hd 144hz",
        imagen: "./img/monitor04.jpg",
        categoria: {
            nombre: "Monitores",
            id: "monitores"
        },
        precio: 70000
    },
    // TECLADOS
    {
        id: "teclado-01",
        titulo: "Teclado gamer Nisuta NSKBGZ61 QWERTY Outemu Brown",
        imagen: "./img/teclado01.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 13500
    },
    {
        id: "teclado-02",
        titulo: "Teclado gamer Redragon Dark Avenger K568RGB QWERTY Red",
        imagen: "./img/teclado02.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 12000
    },
    {
        id: "teclado-03",
        titulo: "Teclado gamer HyperX Alloy Origins Core QWERTY Red inglés",
        imagen: "./img/teclado03.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 23000
    },
    {
        id: "teclado-04",
        titulo: "Teclado Redragon K552 Kumara 2 Mecanico Es Blanco rainbow",
        imagen: "./img/teclado04.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 14000
    },
    // MOUSE
    {
        id: "mouse-01",
        titulo: "Mouse de juego Logitech G Series Lightsync G203 negro",
        imagen: "./img/mouse01.jpg",
        categoria: {
            nombre: "Mouse",
            id: "mouse"
        },
        precio: 7500
    },
    {
        id: "mouse-02",
        titulo: "Mouse de juego Razer DeathAdder V2 Mini negro",
        imagen: "./img/mouse02.jpg",
        categoria: {
            nombre: "Mouse",
            id: "mouse"
        },
        precio: 10200
    },
    {
        id: "mouse-03",
        titulo: "Mouse de juego Redragon Cobra M711-FPS negro",
        imagen: "./img/mouse03.jpg",
        categoria: {
            nombre: "Mouse",
            id: "mouse"
        },
        precio: 7700
    },
    {
        id: "mouse-04",
        titulo: "Mouse de juego Redragon Impact M908 negro",
        imagen: "./img/mouse04.jpg",
        categoria: {
            nombre: "Mouse",
            id: "mouse"
        },
        precio: 8500
    },
    // AURICULARES
    {
        id: "auriculares-01",
        titulo: "Auriculares gamer Kotion G2000 negro y azul con luz LED",
        imagen: "./img/auriculares01.jpg",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 3100
    },
    {
        id: "auriculares-02",
        titulo: "Auriculares gamer Logitech G Series G335 negros",
        imagen: "./img/auriculares02.jpg",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 16800
    },
    {
        id: "auriculares-03",
        titulo: "Auriculares gamer Onikuma K20 negro con luz rgb LED",
        imagen: "./img/auriculares03.jpg",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 6500
    },
    {
        id: "auriculares-04",
        titulo: "Auriculares Gamer Hyperx Cloud Stinger Core Negro",
        imagen: "./img/auriculares04.jpg",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 12500
    },
    // MICROFONOS
    {
        id: "microfono-01",
        titulo: "Microfono Gamer Xtrike-me Cable Omnidireccional Pc",
        imagen: "./img/microfono01.jpg",
        categoria: {
            nombre: "Microfonos",
            id: "microfonos"
        },
        precio: 2400
    },
    {
        id: "microfono-02",
        titulo: "Micrófono Hyperx Duocast Rgb Condensador Cardioide",
        imagen: "./img/microfono02.jpg",
        categoria: {
            nombre: "Microfonos",
            id: "microfonos"
        },
        precio: 25800
    },
    {
        id: "microfono-03",
        titulo: "Microfono Pc Gamer Streaming Juegos Youtube Noga",
        imagen: "./img/microfono03.jpg",
        categoria: {
            nombre: "Microfonos",
            id: "microfonos"
        },
        precio: 3200
    },
    {
        id: "microfono-04",
        titulo: "Micrófono SF 666 condensador omnidireccional",
        imagen: "./img/microfono04.jpg",
        categoria: {
            nombre: "Microfonos",
            id: "microfonos"
        },
        precio: 2000
    },
    // JOYSTICKS
    {
        id: "joystick-01",
        titulo: "Joystick Inalámbrico Etheos Ps3 Ps4 Pc Ios Bluetooth",
        imagen: "./img/joystick01.jpg",
        categoria: {
            nombre: "Joystick",
            id: "joystick"
        },
        precio: 10700
    },
    {
        id: "joystick-02",
        titulo: "Joystick Level Up Cobra X negro y rojo",
        imagen: "./img/joystick02.jpg",
        categoria: {
            nombre: "Joystick",
            id: "joystick"
        },
        precio: 7800
    },
    {
        id: "joystick-03",
        titulo: "Joystick Ps3 Inalambrico Bluetooth Seisa",
        imagen: "./img/joystick03.jpg",
        categoria: {
            nombre: "Joystick",
            id: "joystick"
        },
        precio: 3800
    },
    {
        id: "joystick-04",
        titulo: "Joystick T-Dagger T-TGP500 negro",
        imagen: "./img/joystick04.jpg",
        categoria: {
            nombre: "Joystick",
            id: "joystick"
        },
        precio: 9000
    },
]

// VARIABLES

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
let slideIndex = 0;


// FUNCIONES

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++; 
    }
    else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides,6000);
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
    if (e.currentTarget.id != "todos") {
        const productoCategoria = productos.find(producto => producto.categoria.id=== e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    }
    else {
        tituloPrincipal.innerText = "Todos los productos";
        cargarProductos(productos);
    }
    })
});

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

showSlides();

