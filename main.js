//variables globales
let bienvenida;

function datosCliente (){
    bienvenida = prompt ("Bienvenido a zapatillas Keys ¿como es su nombre?");
    if(bienvenida === null){
        return;
    }else{
        while(bienvenida == ""){
            bienvenida = prompt("Ha ocurrido un error, por favor, escriba su nombre de nuevo")
            if(bienvenida ===null)
            return;
        }
    }
}
datosCliente()
if (bienvenida){
alert("Bienvenido a la tienda, "+bienvenida); 
}


class Productos {
    //armo el constructor
    constructor(marcas, talle, precio){
        this.marcas = marcas;
        this.talle = talle;
        this.precio = precio;
    }
    precioMasIva(){
        return this.precio *= 1.19;
    }
}
        
        const producto = [];

//subo los productos al array
    producto.push(new Productos("convers", 36, 3500));
    producto.push(new Productos("vans", 37, 4500));
    producto.push(new Productos("nike", 38, 3000));
    producto.push(new Productos("nike", 39, 4500));
    producto.push(new Productos("newbalance", 37, 4500));
    producto.push(new Productos("vans", 40, 5000));
        
console.log(producto);

function buscarTalle(talleDelCliente) {
    return producto.find(dato => dato.talle == talleDelCliente)
    
}
for(let i= 0; i < 1; i++){
    let busqueda = buscarTalle(prompt("Ingresa tu numero de talle para saber con que stock contamos del 36 al 40"))
    if(busqueda != undefined){
        alert("¡FELICIDADES! tenemos stock para usted de " + busqueda.marcas + " en talle " + busqueda.talle + " a tan solo $ " + busqueda.precio)
    } else if (busqueda == undefined){
        alert ("En esta ocasion no tenemos stock para usted vuelva a consultar la siguiente semana, muchas gracias")
    }
        alert ("Muchas gracias por visitar zapatillas Keys, los esperamos pronto")
    
}