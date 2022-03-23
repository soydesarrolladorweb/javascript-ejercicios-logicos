/*
************************* ********************************** **************************
************************* EJERCICIOS DE LOGICA EN JAVASCRIPT **************************
************************* ********************************** **************************

*/
// ****** EJERCICIO 1 - 4/ 27 *****

/* 
* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá 10.
* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion
("Hola Mundo", 4) devolverá "Hola".
* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola 
Mundo Hola Mundo.
*/

/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 1 ***************
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá 10.
*/


let cadena = '';

cadena = "Hola Mundo"; // Cambia el texto para validar cuantos caracteres tiene la frase o palabra.

function miFuncion() {

    if (cadena != '') {
        console.log(`El texto (${cadena}), tiene ${cadena.length} caracteres.`)
    }
    else{
        console.warn(`Ingresa una cadena de texto`);
    }
}

//miFuncion();

/**
 ********************* Solución con una arrow function ******************** 
 * 
*/ 
const contarCaracteres2 = (cadenota = "")=>
    (!cadenota) // si la variable viene vacia entonces
    ? console.warn("No ingresaste ninguna cadena") // enviar una alerta
    :console.info(`La cadena "${cadenota}" tiene ${cadenota.length} caracteres.`); // si no viene vacia, haz esto.
 
//contarCaracteres2(); // comprobando el console.warn
//contarCaracteres2("Hola Mundo"); 



/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 2 ***************
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion
("Hola Mundo", 4) devolverá "Hola".
*/


let cadena2 = "Hola mundo";

function extraccion() {

    if (cadena2 != "") {
        console.log(cadena.substring(4, -1));
    }
    
}

//extraccion();

/**
 * 
 * **************** OTRA FORMA DE SOLUCIONAR EL EJERCICIO # 2 **************
*/

const recortarTexto = (cadenat = "", longitud = undefined)=>
 (!cadenat) //si la variable viene vacia entonces
 ? console.warn("No ingresaste ninguna cadena")
 : (longitud === undefined)
 ? console.warn("No ingresaste la longitud para recortar el texto") 
 : console.info(cadenat.slice(0, longitud));

//recortarTexto("Hola Mundo", 4); // coloca cualquier texto y escoge cual va a hacer la longitud (4) del nuevo string
//recortarTexto("Hi developer", 6);



/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 3 ***************
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

let cadena3 = "Hola que tal"; // coloca entre las comillas dobles el texto que quieras.

function separador() {
    if (cadena3 != "") {
        console.log(cadena3.split(' '));
    }
}

//separador();


/**
 * 
 * **************** OTRA FORMA DE SOLUCIONAR EL EJERCICIO # 3 **************
*/

const separarCadena = (separacionCadena = "", separador = undefined)=>
(!separacionCadena) //si la variable viene vacia entonces
? console.warn("No ingresaste ningun texto")
: (separador === undefined)
? console.warn(`No ingresaste el separador para el texto`)
: console.info(separacionCadena.split(separador));

//separarCadena("Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia architecto soluta rem enim exercitationem, culpa nostrum ipsum velit ullam porro nisi est veniam aliquam? Temporibus unde incidunt provident nemo.", " ");
//separarCadena("Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic", ",");
//separarCadena(); //probando el primer warn
//separarCadena("Hola Mundo"); // probando el segundo warn


/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 4 ***************
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola 
Mundo Hola Mundo.
*/

let cadena4 = "Hola Mundo "; // colocar texto que quieras entre las comillas dobles.

function repetida ()  {
    if (cadena4 != "") {
        console.log(cadena4.repeat(3)); // en el parentesis donde esta el #3 es las X veces que se repite el texto.
    }
}

//repetida();

/**
 * 
 * **************** OTRA FORMA DE SOLUCIONAR EL EJERCICIO # 4 **************
*/


const repetirTexto2 = (texto = "", veces = undefined)=>{
    if (!texto)return console.warn("No ingresaste un texto"); // si la variable texto viene vacia entonces = warn

    if (veces === undefined)return console.warn("No ingresaste el numero de veces a repetir");

    if (veces === 0)return console.error("El numero de veces nu puede ser 0");

    if (Math.sign(veces)=== -1)return console.error("El numero de veces nu puede ser negativo");

    for (let i = 1; i <= veces; i++)console.info(`${texto},${i}`)
}

//repetirTexto2("Hello World", 3);
//repetirTexto2("Hello World", 0);
//repetirTexto2("Hello World", -1)
//repetirTexto2();

/**
 * 
 * **************** OTRA FORMA DE SOLUCIONAR EL EJERCICIO # 4 **************
*/
 const repetirTexto = (textoRepet = "", cantidadARepetir = undefined)=>
 (!textoRepet)
 ? console.warn("No ingresaste ningun texto")
 : (cantidadARepetir === undefined)
 ? console.warn(`No ingresaste la cantidad a repetir`)
 : console.info(textoRepet.repeat(cantidadARepetir));

//repetirTexto("Hello ",5);


/**
 * ************************ EJERCICIOS DEL 5 AL 8 / 27 *****************************
 * 
 * 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo",
   "mundo") devolverá 2.
 * 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion
   ("Salas") devolverá true.
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
   devolverá  "1, 2, 3, 4 y 5.
*/

/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 5 ***************
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". 
*/
const textReverse = (textox = "")=>
 (!textox)
 ? console.warn("No ingresaste ningun texto")
 : console.info((textox.split("").reverse().join(""))); 

 /*
 *** =========== Que hace el codigo ============*** 
 * split() separará cada carácter de una cadena y lo convertirá en un array
 * reverse() tomará esa matriz e invertirá los elementos dentro de ella.
 * join() unirá los caracteres que han sido invertidos por la función reverse().
 */

//textReverse("Hola Mundo");
//textReverse("");


/*

************* SOLUCIÓN PERSONAL A EJERCICIOS 6 ***************
* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo",
   "mundo") devolverá 2. 
*/
const textoEnCadena = (cadenaAEncontrar = "", textoAEvaluar = "")=>{
    if (!cadenaAEncontrar)return console.warn("No ingresaste el texto largo");
    if (!textoAEvaluar)return console.warn("No ingresaste la palabra  a evaluar");
    
    let i = 0,
     contador = 0;

     while (i !== -1) {
         i = cadenaAEncontrar.indexOf(textoAEvaluar, i);
         if(i !== -1){
            i++;
            contador++;
         }
     }
    return console.info(`La palabra (${textoAEvaluar}) se repite ${contador} veces.`);
}

//textoEnCadena();
//textoEnCadena("","mundo",);
//textoEnCadena("hola mundo adios mundo",);
//textoEnCadena("hola mundo adios mundo","mundo");
 


/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 7 ***************
* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion
   ("Salas") devolverá true. 
*/
const palindromeChecker= (str = "")=>{

    const newStr = str.replace(/[\W_]/g, "").toLowerCase()
    const strReversed = newStr.split("").reverse().join("")

    return newStr === strReversed ? "es palindromo" : "no es palindromo"
}
 
//console.info(palindromeChecker("Ali tomo tila")); // es palindromo
//console.info(palindromeChecker("Amad a la dama")); // es palindromo
//console.info(palindromeChecker("otra cosa")); // no es palindromo

/**
 * 
 * **************** OTRA FORMA DE SOLUCIONAR EL EJERCICIO # 7 **************
*/
const palindromos = (palabra = "")=>{
    if (!palabra)return console.warn("No ingresaste la palabra o frase");

    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");
    
    return(palabra === alReves)
    ? console.info(`Si es palindromo, Palabra original ${palabra}, Palabra al revés ${alReves}`)
    : console.info(`No es palindromo, Palabra original ${palabra}, Palabra al revés ${alReves}`);
}

// palindromos();
// palindromos("Hola Mundo");
// palindromos("SaLas");

/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 8 ***************
*  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
   devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarCaracteres = (textoIngresado = "", patron = "")=>
 (!textoIngresado)
  ? console.warn("No ingresaste ningun texto")
   :(!patron)
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(textoIngresado.replace(new RegExp(patron, "ig"),""));

//eliminarCaracteres();
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
//eliminarCaracteres("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et culpa. Doloremque laboriosam quaerat dignissimos!", "o");



/**
 * ************************ EJERCICIOS DEL 9 AL 11 *****************************
 * 
 * 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 * 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002)
  devolverá true.
 * 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los
     números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

*/


/*
************* SOLUCIÓN PERSONAL A EJERCICIOS 9 ***************
*  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/


const getRandomInt = (min= "", max="")=> {
    (!min)
     ? console.warn("Debes ingresar el primer parametro")
     :(!max)
     ? console.warn("Debes ingresar el segundo parametro")
     : console.info(Math.floor(Math.random() * (max - min)) + min);

  }

//getRandomInt(501, 600);
//getRandomInt(501);

/*
 ************ SOLUCIÓN PERSONAL A EJERCICIOS 10 ***************
 *  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002)
 devolverá true.
*/

const capicua = (numero = 0)=>{
    if(!numero) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`);

    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ? console.info(`Si es capicua, Numero original ${numero}, Numero al revés ${alReves}`)
    : console.info(`No es capicua, Numero original ${numero}, Numero al revés ${alReves}`)
}
//capicua();
//capicua("2000");
//capicua(2000);
//capicua(2002);


/*
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 11 ***************
 *  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
const factorial = (numero = undefined)=>{
    if(numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`);

    if (numero === 0) return console.error(`El numero NO puede ser 0`);

    if (Math.sign(numero) === -1) return console.error("El numero NO puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--) {
        factorial = factorial*i // factorial *=i (operador aritmetico)
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}

//factorial();
//factorial("5");
//factorial(-5);
//factorial(0);
//factorial(5);
//factorial(8);



/*
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 12 ***************
 *  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
const numeroPrimo = (numero = undefined)=>{
    if(numero === undefined) return console.warn("Ingresa un numero")

    if(numero === 0) return console.error("El numero NO puede ser 0")

    if(numero === 1) return console.error("El numero NO puede ser 1")

    if (Math.sign(numero) === -1) return console.error("El numero NO puede ser negativo")

    if (typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`)

    let divisible = false;

    for(let i = 2; i<numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break
        }
    }

    return(divisible)
    ? console.log(`El numero ${numero} NO es primo`) 
    : console.log(`El numero ${numero} SI es primo`);
}

//numeroPrimo();
//numeroPrimo("320");
//numeroPrimo(true);
//numeroPrimo(0);
//numeroPrimo(1);
//numeroPrimo(-13);
//numeroPrimo(13);
//numeroPrimo(200);





/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 13 ***************
 * 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
const verificaNum = (numero = undefined)=>{
    if(numero === undefined) return console.warn("Ingresa un numero")

    if(numero === 0) return console.error("No se puede ingresar un 0")

    if (typeof numero !== "number") return console.error(`El valor "${numero}" NO es un numero`)

    return (numero % 2 == 0) 
    ? console.info(`El numero ${numero} es par`) 
    : console.info(`El numero ${numero} es impar`);
    
    
}

//verificaNum();
//verificaNum(0);
//verificaNum("7");
//verificaNum(-7);
//verificaNum(7);
//verificaNum(4);



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 14 *************** 
 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertirGrados = (grados = undefined, unidad = undefined )=>{
    if(grados === undefined) return console.warn("No ingresaste ningun grado a convertir")

    if (typeof grados !== "number") return console.error(`El valor "${grados}" NO es un numero`)

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir")

    if (typeof unidad !== "string") return console.error(`El valor "${unidad}" NO es una cadena de texto`);

    if(unidad.length !== 1 ||!/(C|F)/.test(unidad)) return console.warn("Valor de unidad NO reconocido");

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`);
    }else if(unidad === "F"){
        return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`);
    }
}
//convertirGrados();
//convertirGrados(0);
//convertirGrados(0, "hola");
//convertirGrados(0, true);
//convertirGrados(0,1);
//convertirGrados(0,"C");
//convertirGrados(32, "F");


/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 15/15 *************** 
 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
const convertirBinarioDecimal = (numero = undefined, base = undefined)=>{
    if(numero === undefined) return console.warn("No ingresaste el numero a convertir.")

    if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado NO es un numero`)

    if(base === undefined) return console.warn("No ingresaste la base a convertir")

    if (typeof base !== "number") return console.error(`El valor "${base}" ingresado NO es un numero`);

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if(base === 10){
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }else{
        return console.error(`El tipo de base a convertit NO es válido`);
    }
}

//convertirBinarioDecimal();
//convertirBinarioDecimal("2");
//convertirBinarioDecimal(100);
//convertirBinarioDecimal(100, 3);
//convertirBinarioDecimal(100, 2);
//convertirBinarioDecimal(4,10);



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 16/16 *************** 
 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá
 800.
*/
const aplicarDescuento = (precio = undefined, descuento = 0)=>{
    if(precio === undefined) return console.warn("No ingresaste el precio.")

    if (typeof precio !== "number") return console.error(`El valor "${precio}" ingresado NO es un numero`)

    if (Math.sign(precio) === -1) return console.error("El precio NO puede ser negativo")

    if(precio === 0) return console.error("El precio No puede ser 0")

    if (typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado NO es un numero`)

    if (Math.sign(descuento) === -1) return console.error("El descuento NO puede ser negativo")

    
    return console.info(`${precio} pesos - ${descuento}% =  ${precio - ((precio * descuento)/100)} pesos.`);  
}

//aplicarDescuento();
//aplicarDescuento("1000");
//aplicarDescuento(1000, -20);
//aplicarDescuento(-1000, 20);
//aplicarDescuento(1000);
//aplicarDescuento(1000,20);




/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 17/17 *************** 
 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))
  devolverá 35 años (en 2020).
*/
const calcularAnios = (fecha = undefined)=>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha.")

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");

    let hoyMenosFecha = new Date().getTime()- fecha.getTime(),
     aniosEnMS = 1000 * 60 * 60 * 24 * 365, // js trabaja en milisegundos, con esto lo convertimos a años.
     aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos)=== -1)
     ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
     : (Math.sign(aniosHumanos)=== 1)
     ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}.`)
     : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}
//calcularAnios();
//calcularAnios({});
//calcularAnios(false);
//calcularAnios(new Date());
//calcularAnios(new Date(1986, 10, 17));
//calcularAnios(new Date(1886, 10, 17));
//calcularAnios(new Date(2086, 10, 17));



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 18/18 *************** 
 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales:
 4, Consonantes: 5.
*/

const cuentaLetras = (cadena = "")=>{
    if(cadena === "") return console.warn("Debes ingresar una cadena de texto, palabra o frase.")

    if (typeof cadena !== "string") return console.error(`El ingreso "${cadena}" NO es una cadena de texto.`)

    let vocales = 0, // iniciamos el contador en 0.
     consonantes = 0; // iniciamos el contador en 0.
    
    cadena = cadena.toLocaleLowerCase(); // transformamos la cadena de texto a miniscula

    for (let letra of cadena) {
        if(/[aeiouáéíóú]/.test(letra)) vocales++; //expresion regular para las vocales

        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++; //expresion regular para las consonantes.
    }
    // creamos un objeto para sacar la cadena original y luego los contadores de cada parametro.
    return console.info({
        cadena,
        vocales,
        consonantes,
    })
}

//cuentaLetras();
//cuentaLetras(3);
//cuentaLetras("Hola Mundo");
//cuentaLetras("ÑOÑO");
//cuentaLetras("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat esse optio ex molestias! Excepturi.");



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 19/19 *************** 
 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Fabian Barrera") devolverá verdadero.
*/
const validarNombre = (nombre = "")=>{
    if(!nombre) return console.warn(`No ingresaste un nombre.`)

    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado NO es una cadena de texto.`);

    let expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

    return(expReg) 
     ? console.info(`${nombre}, es un nombre valido`) 
     : console.info(`${nombre}, No es un nombre Valido.`);
   
}

//validarNombre();
//validarNombre(33651);
//validarNombre("5541154");
//validarNombre("Fabian Barrera");





/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 20/20 *************** 
 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("micorreo@gmail.com") devolverá verdadero.
*/
const validarEmail = (email = "")=>{
    if(!email) return console.warn("No ingresaste un correo electronico.")

    if(typeof email !== "string") return console.error(`El valor ${email} ingresado NO es una cadena de texto.`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return(expReg) 
     ? console.info(`${email} es un correo electronico valido.`) 
     : console.info(`${email} No es un carreo electronico valido.`);
}

//validarEmail();
//validarEmail("Fabianbarrera@gmail.");
//validarEmail("proyectosweb@gmail.com");


/**
 * 
 * SOLUCION PERSONAL A EJERCICIO FUSION 19 Y 20 - EJERCICIO PERFECTO PARA UN FORULARIO.
 * Programa una función que valide que un texto sea un email y un nombre válido.
*/

const validarPatron = (cadena = "", patron = undefined)=>{
    if(!cadena) return console.warn(`No ingresaste una cadena de texto a evaluar`)

    if(typeof cadena !== "string") return console.error(`El ingreso ${cadena} NO es una cadena de texto.`)

    if(patron === undefined) return console.warn(`No ingresaste un patron a evaluar.`)

    if(!(patron instanceof RegExp)) return console.error(`El valor ${patron} ingresado NO es una expresion regular.`)

    let expReg = patron.test(cadena);

    return(expReg) 
     ? console.info(`${cadena} cumple con el patron ingresado.`) 
     : console.info(`${cadena} No comple con el patron ingresado.`);
}

//validarPatron();
//validarPatron("fabian.proyectosweb@gmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
//validarPatron("Fabian Barrera",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g );
//validarPatron("fabianBarrera@gmail", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/", "i"));



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 21 *************** 
 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) 
 devolverá [1, 16, 25].
*/
const devolverCuadrados = (arr = undefined) =>{
    if(arr === undefined) return console.warn("Debes ingresar un arreglo de numeros.");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo.");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado NO es un arreglo`);
    }

    const newArr = arr.map(el => el*el);
    

    return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
}

//devolverCuadrados();
//devolverCuadrados(true);
//devolverCuadrados([{}]);
//devolverCuadrados([1, "3", 2]);
//devolverCuadrados([1, 4, "5"]);
//devolverCuadrados([1, 4, 5]);




/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 22 *************** 
 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
const arrayMinMax= (arr = undefined)=>{
    if(arr === undefined) return console.warn("Debes ingresar un arreglo de numeros.");

    if(!(arr instanceof Array))return console.error("El valor ingresado No es un arreglo.");

    if(arr.length === 0)return console.error("El arreglo esta vacio");

    for (let iterator of arr) {
        if(typeof iterator !== "number")return console.error(`El valor "${iterator}" ingresado NO es un numero.`);
    }

    return console.info(`Arreglo Original:${arr}\nValor Mayor: ${Math.max(...arr)}\nValor Menor: ${Math.min(...arr)}`);
}
//arrayMinMax([]);
//arrayMinMax([false]);
//arrayMinMax([1,6,"2"]);
//arrayMinMax();
//arrayMinMax([1, 4, 5, 99, -60]);



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 23 *************** 
 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const devolverParesEImpares = (arr = undefined)=>{
    if(arr === undefined)return console.warn("Debes ingresar un arreglo de numeros.");

    if(!(arr instanceof Array))return console.error("El valor ingresado No es un arreglo.");

    if(arr.length === 0)return console.error("El arreglo esta vacio");

    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado NO es un numero.`);
    }

    return console.info({
        pares: arr.filter(num=> num % 2 === 0),
        impares: arr.filter(num=> num % 2 === 1)
    })
}
//devolverParesEImpares();
//devolverParesEImpares([]);
//devolverParesEImpares([1,2, "3"]);
//devolverParesEImpares("hola");
//devolverParesEImpares([1,2,3,4,5,6,7,8,9,0]);



/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 24 *************** 
 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma
  ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordenarArreglo = (arr = undefined)=>{
    if(arr === undefined)return console.warn("Debes ingresar un arreglo de numeros.");

    if(!(arr instanceof Array))return console.error("El valor ingresado No es un arreglo.");

    if(arr.length === 0)return console.error("El arreglo esta vacio");

    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado NO es un numero.`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(), // mapeamos arreglo en arr, luego lo copiamos en asc y con el metodo sort lo ordenamos de forma 
        //ascendente
        desc: arr.map(el => el).sort().reverse()
    });
}

//ordenarArreglo();
//ordenarArreglo([]);
//ordenarArreglo([1,2,3,"4"]);
//ordenarArreglo([1,2,3,4, true]);
//ordenarArreglo([7, 5,7,8,6]);

/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 25 *************** 
 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
 devolverá ["x", 10, 2, "10", true].
*/
const arrNoRepet = (arr = undefined)=>{
    if(arr === undefined) return console.warn("Debes ingresar un arreglo independiente del tipo de dato.")

    if(!(arr instanceof  Array)) return console.error(`El ${arr} ingresado NO es un arreglo.`)

    if(arr.length === 0) return console.error("El arreglo esta vacio")

     if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos.");

    return console.info({
        original: arr,
        sinDuplicados: [...new Set(arr)]
    })
}
//arrNoRepet();
//arrNoRepet([]);
//arrNoRepet([1]);
//arrNoRepet(["x", 10, "x", 2, "10", 10, true, true]);


/**
 * 
 * ******************* OTRA FORMA DE SOLUCIONAR EL EJERCICIO 25 **************************
 *  
*/
const quitarDuplicados = (arr = undefined)=>{
    if(arr === undefined) return console.warn("Debes ingresar un arreglo independiente del tipo de dato.")

    if(!(arr instanceof  Array)) return console.error(`El ${arr} ingresado NO es un arreglo.`)

    if(arr.length === 0) return console.error("El arreglo esta vacio")

     if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos.");

    return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self)=> self.indexOf(value) === index)
    });
}

//quitarDuplicados();
//quitarDuplicados([]);
//quitarDuplicados([1]);
//quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);


/**
 ************* SOLUCIÓN PERSONAL A EJERCICIOS 26 *************** 
 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
const promedio = (arr = undefined) =>{
    if(arr === undefined) return console.warn("Debes ingresar un arreglo de numeros.");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo.");

    if(arr.length === 0) return console.error("El arreglo esta vacio")

     if(arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos.");

    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado NO es un arreglo`);
    }

    let count = arr.length;
    
    arr = arr.reduce((previous, current)=> current +=previous);

    return console.info(`Promedio del arreglo: ${arr/=count}`);
}
//promedio();
//promedio([]);
//promedio([8,9,2,1,"1"]);
//promedio([9,8,7,6,5,4,3,2,1,0]);
//promedio([2, 56, 3, 41, 0, 4, 100, 23]);

/**
 * 
 * ******************* OTRA FORMA DE SOLUCIONAR EL EJERCICIO 26 **************************
 *  
*/
const promedio2 = (arr = undefined) =>{
    if(arr === undefined) return console.warn("Debes ingresar un arreglo de numeros.");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste NO es un arreglo.");

    if(arr.length === 0) return console.error("El arreglo esta vacio")

    for (let num of arr) {
        if(typeof num !== "number")return console.error(`El valor "${num}" ingresado NO es un arreglo`);
    }


   return console.info(
       arr.reduce((total,num, index, arr)=>{
           total += num;
           if(index === arr.length -1){
            return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`;
           }else{
               return total;
           }
       })
   )
}

//promedio2();
//promedio2([]);
//promedio2([1,2,true]);
//promedio2(["Hola"]);
//promedio2([9,8,7,6,5,4,3,2,1,0]);




/**
 * 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

    