//Primero que nada necesito saber como obtener un valor de un input en js
//Eso se hace con document.getElementByID(Id).value como STR;
var Ganador = document.getElementById("Ganador");
var PuntosNegra = document.getElementById("PuntosNegra")
var PuntosRoja = document.getElementById("PuntosRoja")
var Disciplina = document.getElementById("Disciplina")

function AgregarPuntos() {
    const diccionario = {
    Handball: document.getElementById("Handball_A").value,
    Resistencia: document.getElementById("Resistencia_A").value,
    Ajedrez: document.getElementById("Ajedrez_A").value,
    HandballB: document.getElementById("Handball_B").value,
    ResistenciaB: document.getElementById("Resistencia_B").value,
    AjedrezB: document.getElementById("Ajedrez_B").value
    };
    const maxKey = Object.keys(diccionario).reduce((a, b) => diccionario[a] > diccionario[b] ? a : b);
    //El diccionario de arriba y el maxkeys es para encontrar la key con mas valor

    var Handball = document.getElementById("Handball_A").value;
    var Resistencia = document.getElementById("Resistencia_A").value;
    var Ajedrez = document.getElementById("Ajedrez_A").value;
        //En este caso leo el id pero lo encuentro como valor STR

    var HandballB = document.getElementById("Handball_B").value;
    var ResistenciaB = document.getElementById("Resistencia_B").value;
    var AjedrezB = document.getElementById("Ajedrez_B").value;

        //Existe un Error si esta vacio

    var TotalPuntajesA = parseInt(Handball) + parseInt(Resistencia) + parseInt(Ajedrez);
    var TotalPuntajesB = parseInt(HandballB) + parseInt(ResistenciaB) + parseInt(AjedrezB);
    //Con parseInt o parseFloat convierto STR a numeros y los sumo
    PuntosNegra.innerHTML = "Puntos de la Negra: " + TotalPuntajesA
    PuntosRoja.innerHTML = "Puntos de la Roja: " + TotalPuntajesB
    Disciplina.innerHTML = "Disciplina con mas Puntos es: "+ maxKey + " Con " + Math.max(Handball, Resistencia, Ajedrez, HandballB, ResistenciaB, AjedrezB)

    if (TotalPuntajesA > TotalPuntajesB){
        Ganador.innerHTML = "Gano la tribu... negra"
    }
    else if (TotalPuntajesB > TotalPuntajesA){
        Ganador.innerHTML = "Gano la tribu... roja"
    }
    else    {
        Ganador.innerHTML = "Empate"
    }
}

//tsc --init Para iniciar un tsconfig.json
//tsc typescript.ts para Compilarlo y ver JS
