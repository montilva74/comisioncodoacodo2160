let elemento = document.getElementById("principal");

//funciones

// const suma= () => {
// elemento.innerHTML=58+23;
// }
// suma();

// const suma= (a,b) => {
//     elemento.innerHTML=`<p>${a + b}</p>`;
//     }
//     suma(5, 45);
//     suma(45, 45);
//     suma(100, 45);

    function Persona(nombre, apellido, edad, dni){
        this.edad=edad;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.dni=dni;
    }

    let Alba = new Persona("Alba", "Montilva", 35, 25415855);
    elemento.innerHTML=`${Alba.nombre} ${Alba.apellido} ${Alba.edad} ${Alba.dni}`;