//Comentarios de una sola liena de usan dos diagonales
/* para comentarios
multiliena se usa  como este comentario*/

// la siguiente liena es para ver si enlace bien con html

//alert("Hola mundo");

//La siguiente liena e spara mandar un mensaje en mi consola, me puede decir mis errores y en que línea es 
//console.log("Este es un mensaje para mi consola")

//declaramos variable y usaremos promp que va a mandar mensaje en la mantalla
//var nombre = prompt("Ingresa tu nombre")
//alert("Hola, " + nombre + " Bienvenido a la ch35");


//var numero1 = parseInt(prompt("Ingrese el primer número"));
//var numero2 = parseInt(prompt("Ingrese el segundo número"));


//console.log ("suma:" + (numero1 + numero2));
//console.log("resta:" + (numero1 - numero2));
//console.log("multiplicación:" + (numero1 * numero2));
//console.log("division:" + (numero1 / numero2));

//Ejercicio:
// Solicitar la edad al usuario
/*
Este programa valida si una persona 
es baby boomer, generacion X, millenial o centenial
*/

// Declaracion de variables
//var nombre, edad, generacion;

// Función para determinar la generación
//function determinarGeneracion(nombre, fecha_nacimiento) {
    // Validar que la edad sea un número positivo
   // if (isNaN(fecha_nacimiento) || edad < 0) {
      //return "Por favor, introduce una edad válida.";
    //}
  
    // Determinar la generación
    //if (fecha_nacimiento >= 1946 && fecha_nacimiento <= 1964) {
    //  generacion = "Baby Boomer";
    //} else if (fecha_nacimiento >= 1965 && fecha_nacimiento <= 1980) {
     // generacion = "Generación X";
    //} else if (fecha_nacimiento >= 1981 && fecha_nacimiento <= 1996) {
     // generacion = "Millennial";
    //} else if (fecha_nacimiento >= 1997) {
      //generacion = "Generación Z (Centennial)";
   // } else {
     // generacion = "No se puede determinar la generación para esta edad.";
   // }
  
    // Devolver el resultado
   // return Hola, ${nombre}, tu perteneces a la generación ${generacion}.;
  //}
  

 // var nombre = prompt("Introduce tu nombre: "); 
  //var fecha_nacimiento = parseInt(prompt("Introduce tu fecha de nacimieno: "));
 // var resultado = determinarGeneracion(nombre, fecha_nacimiento);
//   Imprime el resultado en la consola
 // console.log(resultado);


//TIPO DE DATOS Y VARIABLES
//scope es el alcance de nustras variables

/*Var, let, const la diferencia el el alcance
var tiene un alcance global
let tiene un alcance local
const se mantiene sin ningun cambio*/

/*string: cadena de texto (lleva comillas)
number: número
boolena: true/false
null:nulo
undefinied:no esta asigando o definido*/


/*Documentación: https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/*/

//Ejemplo: Hacer una fista para Daniel
//Todas nsutras variables deben ser declaradas son nombres específicos  y claros, sin espacios, no deben iniciar con números

//let nombre = "Daniel"; 
//let invitadxsExtras = 2;
//let esMayorEdad = true;
//let edad = 25;
//let invitadxEspecial = null; //No lo sabemos pero tenenmos la cajita por si acaso
//let horaDeSalida = undefined; //No sabemos pero al final posiblemente tendranun valor

//document.write(nombre);

//Encasillamiento o tipado

/* Es útil para el mantenimiento del código
ya que lo hace más legible y fácil de etender.
Prevención de errores para reducír la probabilidad de los mismos.*/ 


//let numero = 15;
//let texto = "hola";

//Con encacillamiento:

//let numeroEncasillado = number =5;
//let textoEncasillado = string ="hola";


//Para preguntar que tipo de dato es una variable:

//console.log(typeof(nombre));

//let funcionNunber = console.log(typeof Number (nombre));
/*Funciona cuando declaras un Number como String, por ejemplo: 
let n = "5";*/

//metodoParseInt = console.log(typeof(nombre));
//metodoParseFloat = console.log(typeof parseFloat(nombre));

/*parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en números
, ambas nos ayudan en este cambio.  */

// Conversion de number a string
// console.log(typeof String(edad));
// console.log(typeof edad.toString());

//let numero = Number (esMayorEdad);

//console.log(numero);

// let texto = String(esMayorEdad);

// console.log(typeof(texto));

// console.log(typeof esMayorEdad.toString());


//let negacion = !esMayorEdad;
 //console.log (negacion)


 //C0NCATENAR

 /* Concatenar es unir strings*/

//  let saludo = "Hola humanx";
//  let frase = "el futuro es hoy";

//  texto= saluto + frase;

//  document.write(texto)

