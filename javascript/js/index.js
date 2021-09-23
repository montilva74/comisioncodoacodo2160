//alert('Hola soy una alerta');
console.log('Hola soy un mensaje en la consola');

//variables
var nombre_variable;
let otra_variable = "hola";
const PI = 3.1416
let num2 = 18;
let hayClases=false;
let terminoLaClase=false;

//Tipos de variables

console.log(PI*num2);


//condicionales

if(hayClases == true){
    console.log('Nos conectamos a la video llamada');
}else{
    console.log('Salimos a celebrar');
}

let elemento = document.getElementById("principal");

elemento.innerHTML = "Mi valor";
elemento.innerHTM+= "<p>" + otra_variable + "</p>";
document.write("<h3>Hola, buen día</h3>");
document.write("<h3 class='text-center bg-primary'>Como estan?</h3>");

if(nombre_variable == undefined){
    elemento.innerHTML += "<p>Estamos con una variable sin valor definido!</p>";
    elemento.innerHTML += "<p>Luis Navas</p>";
    elemento.innerHTML += "<p>Dora</p>";
    elemento.innerHTML += "<p>Amada</p>";
    elemento.style.backgroundColor = "Blue";
    elemento.style.color = "white";
}

// let mensaje = prompt("Introduce tu mensaje");
// elemento.innerHTML+="<h3>" + mensaje + "</h3>";

let menu = prompt("Selecciona el pedido : \n 1. Milasena \n 2.Pinchos \n 3. Pollo");

let alumnos = [
    "alba,",
    "pedro",
    "luis",
    "josé",
];

for(let a=0; a < alumnos.length; a++){

}

alumnos.forEach((a) => {

});

















