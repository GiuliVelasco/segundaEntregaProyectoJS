class Usuario {
    constructor(nombreCompleto, email, edad){
        this.nombreCompleto = nombreCompleto;
        this.email = email;
        this.edad = edad;
    }
}

class Producto {
    constructor(id, nombre, color, talle, precio) {
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.color = color;
        this.talle = talle;
        this.precio = parseFloat(precio);
    }
}
const producto1 = new Producto(1, "Judogi", "Blanco", "S", 30);
const producto2 = new Producto(2, "Cinturon", "Amarillo", "Unico", 8);
const producto3 = new Producto(3, "Guantes", "Rojo", "12/14 oz", 35);
const producto4 = new Producto(4, "Tibiales", "Blanco", "Unico", 30);
const producto5 = new Producto(5, "Venda", "Rojo", "Unico", 7);
const producto6 = new Producto(6, "Remera", "Blanco", "M/L", 12);

const productos = [producto1, producto2, producto3, producto4, producto5, producto6];
let usuarios = [];

if(localStorage.getItem('Usuarios')){
    usuarios = JSON.parse(localStorage.getItem('Usuarios'));
} else{
    localStorage.setItem('Usuarios', JSON.stringify(usuarios));
}

let formulario = document.getElementById('idForm');
let divProductos = document.querySelector('#divProductos');
let botonDarkMode = document.getElementById('botonDarkMode');
let botonLightMode = document.getElementById('botonLightMode');
let fondoMain = document.getElementById('fondoMain');
let modo;

//modo de visualizacion
if(localStorage.getItem('modo')){
    modo = localStorage.getItem('modo');
}else{
    localStorage.setItem('modo', 'light')
}

if(modo == 'dark'){
    fondoMain.classList.add('modoOscuro');
}

botonDarkMode.addEventListener("click", ()=>{
    fondoMain.classList.add('modoOscuro');
    localStorage.setItem('modo', 'dark');
})

botonLightMode.addEventListener("click", ()=>{
    fondoMain.classList.remove('modoOscuro');
    localStorage.setItem('modo', 'light');
})

//formulario
formulario.addEventListener('submit',(event) =>{
    event.preventDefault()
    let nombreCompleto = document.getElementById('usernameId').value
    let email = document.getElementById('emailId').value
    let edad = document.getElementById('edadId').value

    console.log(nombreCompleto)
    console.log(email)
    console.log(edad)

    let objetoUsuario = {nombreCompleto: nombreCompleto, email: email, edad: edad}
    usuarios.push(objetoUsuario)
    localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    console.log(usuarios)
})

//seccion productos
productos.forEach(producto => {
    divProductos.innerHTML += `
        <div class="card">
            <div class="card-body">
                <p class="card-title">${producto.nombre.toUpperCase()}</p>
                <p class="card-text">Color: ${producto.color}.<br>Talle: ${producto.talle}
                <br><span class="precio">US$ ${producto.precio}</span></p>
                <a id="boton${producto.id}" class="btn btn-primary d-flex justify-content-between">Agregar al carrito
                    <img class="fondoCarrito" width="30px" height="30px" src="../img/iconCarrito.png" alt="agregar al carrito">
                </a>
            </div>
        </div>
    `
})

//carrito de compras
let arrayCarrito = JSON.parse(localStorage.getItem('carrito')) ?? [] //esta linea reemplaza el if-else

let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')
let boton3 = document.getElementById('boton3')
let boton4 = document.getElementById('boton4')
let boton5 = document.getElementById('boton5')
let boton6 = document.getElementById('boton6')

boton1.addEventListener('click', ()=>{
    if(arrayCarrito.some(producto => producto.id == 1)){
        let indice = arrayCarrito.findIndex(producto => producto.id == 1)
        arrayCarrito[indice].cantComprada++
    }else{
        let producto1Array = {
            ...producto1,
            cantComprada: 1
        }
        arrayCarrito.push(producto1Array);
    }

    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
})
boton2.addEventListener('click', ()=>{
    if(arrayCarrito.some(producto => producto.id == 2)){
        let indice = arrayCarrito.findIndex(producto => producto.id == 2)
        arrayCarrito[indice].cantComprada++
    }else{
        let producto2Array = {
            ...producto2,
            cantComprada: 1
        }
        arrayCarrito.push(producto2Array);
    }

    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
})
boton3.addEventListener('click', ()=>{
    if(arrayCarrito.some(producto => producto.id == 3)){
        let indice = arrayCarrito.findIndex(producto => producto.id == 3)
        arrayCarrito[indice].cantComprada++
    }else{
        let producto3Array = {
            ...producto3,
            cantComprada: 1
        }
        arrayCarrito.push(producto3Array);
    }

    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
})
boton4.addEventListener('click', ()=>{
    if(arrayCarrito.some(producto => producto.id == 4)){
        let indice = arrayCarrito.findIndex(producto => producto.id == 4)
        arrayCarrito[indice].cantComprada++
    }else{
        let producto4Array = {
            ...producto4,
            cantComprada: 1
        }
        arrayCarrito.push(producto4Array);
    }

    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
})
boton5.addEventListener('click', ()=>{
    if(arrayCarrito.some(producto => producto.id == 5)){
        let indice = arrayCarrito.findIndex(producto => producto.id == 5)
        arrayCarrito[indice].cantComprada++
    }else{
        let producto5Array = {
            ...producto5,
            cantComprada: 1
        }
        arrayCarrito.push(producto5Array);
    }

    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
})
boton6.addEventListener('click', ()=>{
    if(arrayCarrito.some(producto => producto.id == 6)){
        let indice = arrayCarrito.findIndex(producto => producto.id == 6)
        arrayCarrito[indice].cantComprada++
    }else{
        let producto6Array = {
            ...producto6,
            cantComprada: 1
        }
        arrayCarrito.push(producto6Array);
    }

    localStorage.setItem('carrito', JSON.stringify(arrayCarrito));
})

//ver carrito
let botonVerCarrito = document.getElementById('botonVerCarrito');

botonVerCarrito.addEventListener('click', (event)=>{
    event.preventDefault()
    idCarrito.innerHTML += `<p>Productos seleccionados</p>`
    arrayCarrito.forEach(arrayCarrito => {
        idCarrito.innerHTML += `
        <div class="card">
            <div class="card-body">
                <p class="card-title">${arrayCarrito.nombre.toUpperCase()}</p>
                <p class="card-text">Color: ${arrayCarrito.color}.<br>Talle: ${arrayCarrito.talle}
                <br><span class="precio">US$ ${arrayCarrito.precio}</span> - Cantidad: ${arrayCarrito.cantComprada}</p>
                <p>Subtotal: U$D ${arrayCarrito.precio * arrayCarrito.cantComprada}</p>
            </div>
        </div>
    `
    })
})