function AgregarPuntoss() {
    var diccionario = {
        Handball: parseInt(document.getElementById("Handball_A").value) || 0,
        Resistencia: parseInt(document.getElementById("Resistencia_A").value) || 0,
        Ajedrez: parseInt(document.getElementById("Ajedrez_A").value) || 0,
        HandballB: parseInt(document.getElementById("Handball_B").value) || 0,
        ResistenciaB: parseInt(document.getElementById("Resistencia_B").value) || 0,
        AjedrezB: parseInt(document.getElementById("Ajedrez_B").value) || 0
    };
    // Encuentra la key con más valor en el diccionario
    var maxKey = Object.keys(diccionario).reduce(function (a, b) { return diccionario[a] > diccionario[b] ? a : b; });
    
    var Handball = parseInt(document.getElementById("Handball_A").value) || 0;
    var Resistencia = parseInt(document.getElementById("Resistencia_A").value) || 0;
    var Ajedrez = parseInt(document.getElementById("Ajedrez_A").value) || 0;
    var HandballB = parseInt(document.getElementById("Handball_B").value) || 0;
    var ResistenciaB = parseInt(document.getElementById("Resistencia_B").value) || 0;
    var AjedrezB = parseInt(document.getElementById("Ajedrez_B").value) || 0;
    // Sumar los puntajes de A y B
    var TotalPuntajesA = Handball + Resistencia + Ajedrez;
    var TotalPuntajesB = HandballB + ResistenciaB + AjedrezB;
    var PuntosNegra = document.getElementById("PuntosNegra");
    var PuntosRoja = document.getElementById("PuntosRoja");
    var Disciplina = document.getElementById("Disciplina");
    // Actualizar el HTML con los resultados
    PuntosNegra.innerHTML = "Puntos de la Negra: ".concat(TotalPuntajesA);
    PuntosRoja.innerHTML = "Puntos de la Roja: ".concat(TotalPuntajesB);
    Disciplina.innerHTML = "Disciplina con mas puntos es: ".concat(maxKey, " con ").concat(Math.max(Handball, Resistencia, Ajedrez, HandballB, ResistenciaB, AjedrezB));
    // Retornar puntajes de A y B
    return [TotalPuntajesA, TotalPuntajesB];
}
function MostrarResultados() {
    var Puntajes = AgregarPuntoss();
    var Ganador = document.getElementById("Ganador");
    if (Puntajes[0] > Puntajes[1]) {
        Ganador.innerHTML = "Ganó la tribu... negra";
    }
    else if (Puntajes[1] > Puntajes[0]) {
        Ganador.innerHTML = "Ganó la tribu... roja";
    }
    else {
        Ganador.innerHTML = "Empate";
    }
}
// tsc --init para iniciar un tsconfig.json
// tsc typescript.ts para compilarlo y ver JS
