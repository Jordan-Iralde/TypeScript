interface Puntajes {
    Handball: number;
    Resistencia: number;
    Ajedrez: number;
    HandballB: number;
    ResistenciaB: number;
    AjedrezB: number;
}
interface Equipo {
    Handball: number;
    Resistencia: number;
    Ajedrez: number;
    HandballB: number;
    ResistenciaB: number;
    AjedrezB: number;
}

function AgregarPuntoss(): [number, number] {
    const diccionario: Puntajes = {
        Handball: parseInt((document.getElementById("Handball_A") as HTMLInputElement).value) || 0,
        Resistencia: parseInt((document.getElementById("Resistencia_A") as HTMLInputElement).value) || 0,
        Ajedrez: parseInt((document.getElementById("Ajedrez_A") as HTMLInputElement).value) || 0,
        HandballB: parseInt((document.getElementById("Handball_B") as HTMLInputElement).value) || 0,
        ResistenciaB: parseInt((document.getElementById("Resistencia_B") as HTMLInputElement).value) || 0,
        AjedrezB: parseInt((document.getElementById("Ajedrez_B") as HTMLInputElement).value) || 0
    };
    // Encuentra la key con más valor en el diccionario
    const maxKey = Object.keys(diccionario).reduce((a, b) => diccionario[a] > diccionario[b] ? a : b);

    const Handball: number = parseInt((document.getElementById("Handball_A") as HTMLInputElement).value) || 0;
    const Resistencia: number = parseInt((document.getElementById("Resistencia_A") as HTMLInputElement).value) || 0;
    const Ajedrez: number = parseInt((document.getElementById("Ajedrez_A") as HTMLInputElement).value) || 0;

    const HandballB: number = parseInt((document.getElementById("Handball_B") as HTMLInputElement).value) || 0;
    const ResistenciaB: number = parseInt((document.getElementById("Resistencia_B") as HTMLInputElement).value) || 0;
    const AjedrezB: number = parseInt((document.getElementById("Ajedrez_B") as HTMLInputElement).value) || 0;

    // Sumar los puntajes de A y B
    const TotalPuntajesA: number = Handball + Resistencia + Ajedrez;
    const TotalPuntajesB: number = HandballB + ResistenciaB + AjedrezB;

    const PuntosNegra = document.getElementById("PuntosNegra") as HTMLElement;
    const PuntosRoja = document.getElementById("PuntosRoja") as HTMLElement;
    const Disciplina = document.getElementById("Disciplina") as HTMLElement;

    // Actualizar el HTML con los resultados
    PuntosNegra.innerHTML = `Puntos de la Negra: ${TotalPuntajesA}`;
    PuntosRoja.innerHTML = `Puntos de la Roja: ${TotalPuntajesB}`;
    Disciplina.innerHTML = `Disciplina con mas puntos es: ${maxKey} con ${Math.max(Handball, Resistencia, Ajedrez, HandballB, ResistenciaB, AjedrezB)}`;

    // Retornar puntajes de A y B
    return [TotalPuntajesA, TotalPuntajesB];
}

function MostrarResultados(): void {
    const Puntajes = AgregarPuntoss();
    const Ganador = document.getElementById("Ganador") as HTMLElement;

    if (Puntajes[0] > Puntajes[1]) {
        Ganador.innerHTML = "Ganó la tribu... negra";
    } else if (Puntajes[1] > Puntajes[0]) {
        Ganador.innerHTML = "Ganó la tribu... roja";
    } else {
        Ganador.innerHTML = "Empate";
    }
}

// tsc --init para iniciar un tsconfig.json
// tsc typescript.ts para compilarlo y ver JS
