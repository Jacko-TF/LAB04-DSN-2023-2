const express = require('express')

const port = 3500

const app = express()

const path = require('path')

//app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/views/index.html`)
})

app.get('/clientes', (req, resp) => {
    // let clientes = [
    //     {
    //         nombre: "Jacko",
    //         apellido: "Tinoco",
    //         edad: "19",
    //         direccion: "av Huarochiri"
    //     },
    //     {
    //         nombre: "Juan",
    //         apellido: "Salazar",
    //         edad: "56",
    //         direccion: "av Alameda" 
    //     },
    //     {
    //         nombre: "Maia",
    //         apellido: "Pedraza",
    //         edad: "24",
    //         direccion: "Calle Nueva" 
    //     }
    // ]

    // console.log(clientes)

    resp.sendFile(`${__dirname}/views/clientes.html`)
})

app.get('/productos', (req, resp) => {

    // let productos = [
    //     {
    //         nombre: "Laptop",
    //         precio: 3565.21,
    //         stock: 20,
    //         marca: "Asus"
    //     },
    //     {
    //         nombre: "Mouse",
    //         precio: 150.23,
    //         stock: 23,
    //         marca: "Logitech"
    //     },
    //     {
    //         nombre: "Teclado",
    //         precio: 250.05,
    //         stock: 45,
    //         marca: "Razer"
    //     }
    // ]

    // console.log(productos)

    resp.sendFile(`${__dirname}/views/productos.html`)
})

app.listen(3000,() =>{
    console.log('Servidor corriendo en http://localhost:3000')
})