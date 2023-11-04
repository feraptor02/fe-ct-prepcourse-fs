/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var primerElemento = array[0];
   return (primerElemento);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimoElemento = array[array.length -1];
   return ultimoElemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var obtenerLargoArray;
   obtenerLargoArray = array.length;
   return obtenerLargoArray;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var arregloIncrementado = array.map((num) =>{
      return num +1;
   })
   return arregloIncrementado;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(" ");
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if(array.includes(elemento)){
      return true;
   }else{
      return false;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumatoria = 0;
   arrayOfNums.forEach(element => {
      sumatoria = sumatoria + element;
   });
   return sumatoria;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedioNotas = 0;
   var sumaNotas = 0;
   for(var i = 0; i < resultadosTest.length; i++){
      sumaNotas = sumaNotas + resultadosTest[i];
      promedioNotas = sumaNotas/resultadosTest.length;
   }
   return promedioNotas;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numMayor = arrayOfNums[0];

   for(var i = 1; i < arrayOfNums.length; i++){
      if(arrayOfNums[i]>numMayor){
         numMayor = arrayOfNums[i];
      }
   }
   return numMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0){
      return 0;
   }else if (arguments.length === 1){
      return arguments[0];
   }

   if(arguments.length>=2){
      var multiplicacion = 1;
   for(var i=0; i < arguments.length;i++){
      multiplicacion = multiplicacion*arguments[i];
   }
   return multiplicacion;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   array.forEach((num) => {
      if(num > 18){
         contador +=1;
      }
   })
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia=== 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6 ){
      var diaLaboral = "Es dia laboral";
      return diaLaboral;
   }else if(numeroDeDia === 1 || numeroDeDia === 7){
      var findeSemana = "Es fin de semana";
      return findeSemana;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var promedio = Math.round(num/9);
   if(num > 8*promedio && num < 10*promedio){
      return true;
   }else{
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var condicion = false;
   for(var i=0; i<array.length-1;i++){
      if(array[i] === array[i+1]){
         condicion = true;
      }else{
         condicion = false;
      }
   }
   return condicion;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   if(array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")){
      var arrayIncludes = [];
      for(var i = 0; i < array.length; i++){
         if(array[i] === "Enero"){
            arrayIncludes.push(array[i]);
         }
         if(array[i] === "Marzo"){
            arrayIncludes.push(array[i]);
         }
         if(array[i] === "Noviembre"){
            arrayIncludes.push(array[i]);
         }
      }
      return arrayIncludes;
   }else{
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla6 = [];
   for(var i=0; i<=10;i++){
      tabla6.push(i*6);
   }
   return tabla6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var cumple = false;
      for(var i = 0; i < array.length;i++){
         if(array[i]>=0 && array[i]<=200){
            cumple = true;
         }
      }

      if(cumple === true){
         var arrayMayor100 = [];
         for(var j = 0; j < array.length; j++){
            if(array[j]>100){
               arrayMayor100.push(array[j]);
            }
         }
         return arrayMayor100;
      }else{
         return false;
      }
   }

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arregloNuevo = [];
   for(var i =0;i<10;i++){
      num += 2;
      arregloNuevo.push(num);
      if(num === (i+1)){
         return  "Se interrumpió la ejecución";
      }
   }
   return arregloNuevo;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrCotinue = [];

   for(var i=0;i<10;i++){
      if((i+1)!=5){
         num += 2;
         arrCotinue.push(num);
      }else{
         continue;
      }
   }
   return arrCotinue;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
