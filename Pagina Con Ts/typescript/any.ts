let cantidad: any= 4;
let desc: any [] =[1,true,"verde"]


function mensajeUsuario(): void { //Esta funcion no devuelve ningun valor, por esto es void
    console.log("Este es un mensaje para el usuario");
    }

enum Color {    //La enumeracion trata acerca de constantes relacionadas
    Blanco,
    Rojo,
    Verde
}
//**Declarar la variable y asignar un valor de la enumeración */
let colorAuto: Color= Color.Blanco;
console.log(colorAuto); //return 0