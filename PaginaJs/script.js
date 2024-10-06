
var variable1 = 1;
console.log(variable1)

var variable2 = "hOLA";
var variable3 = false;
var variable4 = 2.2;

const pi = 3.14;

// Comentarios      console.log() == print()

/* Multilinea
+, -, *, /, &
&&(and) || (or) -
*/
variable1 = 2;
console.log(variable1);

//Array
var Arreglo = ["Juan", "Juancito"]
if (variable3) { //Esto es False
    for (let index = 0; index < 10; index++) {
        let variable = "Scope"
        console.log(variable)
    }
} else {
    console.log("falso")
    let i = 0
    while (i < 5) {
        i++

        mostrar = Arreglo[i]
        console.log(mostrar)

        console.log("iteracion ",i)
    }
}

//Funcion con Parametros
function CalcularRectangulo(a, b){
    let calculo = a * b
    return calculo
}
recibirReturn = CalcularRectangulo(5, 5);
console.log(recibirReturn);

var miObjeto = {
    nombre: "Jordan",
    edad: 16,
    EsObjeto: true
}

console.log(miObjeto);
console.log(miObjeto.edad);


function Calcular(){
    let numero1 = document.getElementById("Numero1");
    let numero2 = document.getElementById("Numero2");

    console.log(numero1);
}