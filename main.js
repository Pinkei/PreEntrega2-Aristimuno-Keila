/* let bienvenida = prompt ("Bienvenido a zapatillas Keys ¿como es su nombre?");
if (bienvenida == ""){
    alert("por favor ingrese su nombre")

}
 */

class Productos {
    //armo el constructor
    zapatillas(marcas, talle, precio){
        this.marcas = marcas;
        this.talle = talle;
        this.precio = precio;
    }
}
const Productos1 = new Productos("vans", 36, 2500)
const Productos2 = new Productos("convers", 36, 3500)
const Productos3 = new Productos("vans", 37, 4500)
const Productos4 = new Productos("nike", 38, 3000)
const Productos5 = new Productos("nike", 39, 4500)
const Productos6 = new Productos("newbalance", 37, 4500)
const Productos7 = new Productos("vans", 40, 5000)

        
        const negocio = []

    negocio.push(new Productos("vans", 36, 2500))
    negocio.push(new Productos("convers", 36, 3500))
    negocio.push(new Productos("vans", 37, 4500))
    negocio.push(new Productos("nike", 38, 3000))
    negocio.push(new Productos("nike", 39, 4500))
    negocio.push(new Productos("newbalance", 37, 4500))
    negocio.push(new Productos("vans", 40, 5000))
        
console.log(negocio)

function buscarTalle(talleDelCliente) {
    return negocio.find(dato => dato.talle === talleDelCliente)
    
}
for(let i= 0; i < 2; i++){
    let busqueda = buscarTalle(prompt("Ingresa tu numero de talle para saber con que stock contamos del 36 al 40"))
    if(busqueda != undefined){
        alert("¡FELICIDADES! tenemos stock para usted de " + busqueda.marcas + "en talle " + busqueda.talle + " a tan solo $ " + busqueda.precio)
    } else {
        alert ("En esta ocasion no tenemos stock para usted vuelva a consultar la siguiente semana, muchas gracias")
    }
}