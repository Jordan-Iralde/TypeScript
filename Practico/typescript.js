//Primero que nada necesito saber como obtener un valor de un input en js
//Eso se hace con document.getElementByID(Id).value como STR;

function AgregarPuntos() {
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
    
    if (TotalPuntajesA > TotalPuntajesB){
        console.log("Gano la Negra")
    }
    else if (TotalPuntajesB > TotalPuntajesA){
        console.log("Gano la Roja")
    }
    else    {
        console.log("Empate")
    }
}

console.log("hola");
//tsc --init Para iniciar un tsconfig.json
//tsc typescript.ts para Compilarlo y ver JS
