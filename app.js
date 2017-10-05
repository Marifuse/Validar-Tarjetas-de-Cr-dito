/*Cuando hayamos creado nuestro index.html y nuestra app.js, debemos generar una variable fuera de nuestra función principal
que pregunte al usuario que ingrese su número de tarjeta de credito. Esto se hace por medio de un prompt.*/
var question = prompt("Ingrese su número de Tarjeta de Credito aquí");
/*Una vez generado nuestro prompt, llamamos a nuestra función. La función recibirá el nombre de isValidCard, donde
dentro del parentesis se debe colocar una variable (en este caso, recibirá en nombre lunh, puesto que este método permite
verificar por medio de una suma, si el número de la tarjeta ingresada es válida o no válida).*/
//function isValidCard(lunh) {
function isValidCard(lunh) {
//var question = prompt("Ingresa un numero de tarjeta aquí ","");
/*En este punto, se deben generar variables, donde la primera me considere el número de la tarjeta que se está ingresando,
más el método toString (este método retorna una respuesta o cadena que representa al objeto que estoy trabajando); una
segunda variable que me devuelva un null (valor vacío); y la tercera variable que me devuelva un total 0.*/
var entry = lunh.toString();
var empty = null;
var sumResult = 0;
/*Una vez que estén definidas mis variables, se debe invocar un for (función que encapsula formulas
 de una linea),
donde dentro de los parentesis se debe generar una variable que sea igual a 0, que esa variable recorra la longitud del array
(length), y que la variable me sume o sea igual a 2 para que sume de 2 en 2. Luego de esto, en la siguiente linea se debe
invocar a la variable empty, y que ésta sea igual a un parseInt (método que convierte a números enteros), donde dentro de
los parentesis se invoque la variable entry, y un charAt (método que cuenta carácteres y puede entregar vacíos), donde dentro
de sus parentesis se coloque la variable que se definió en el for, y esto se multiplique por 2, ya que debe calcular los números
pares.*/
for (var a = 0; a < entry.length; a += 2) {
  empty = parseInt(entry.charAt(a)) * 2;
/*Luego de esto, se debe generar un if (si), y dentro de sus parentesis invoco a la variable empty, y que éste sea mayor (>)
a 9. Esto me entregará en la siguiente linea mi segunda variable, la cual será igual a la variable empty con el método
toString, y en la siguiente linea, se cita nuevamente la variable empty, y que ésta sea igual a empty junto a charAt(0),
más otro parseInt, en el cual se debe colocar (dentro de los parentesis) la variable empty con un charAt(1).*/
    if (empty > 9) {
      empty = empty.toString();
      empty = parseInt(empty.charAt(0)) + parseInt(empty.charAt(1));
           }
/*A posteriori del cierre de llave del if, se debe citar la variable sumResult, y que éste sume o sea igual a mi variable empty.
después de esto, se cierra con la llave del for*/
       sumResult += empty;
         }
/*Seguidamente, se invoca un nuevo for donde, nuevamente, cuenta la longitud del array, y que esto sume o sea igual a 2,
para luego poner en la siguiente linea la variable sumResult, el cual debe sumar o ser igual a un parseInt de la variable
entry, más un charAt con la variable que se definió en este for.*/
for (var b = 0; b < entry.length; b += 2) {
  sumResult += parseInt(entry.charAt(b));
      }
/*En seguida del cierre de la llave del for, se debe invocar un if (si), y un else (sino), el cual, el primero debe contener
la variable sumResult, y que ésta sea residuo (%) de 10, para que el resultado de aquella operación retorne un resultado
que sea similar (==) de 0. Si la primera afirmación es verdadera (True = Boolean), ejecutará un alert (ventana emergente)
que le avise al usuario que su tarjeta de credito es válida. En caso contrario, generará otro alert que le indicará que su
tarjeta no es válida (False = Boolean).*/
        if ((sumResult % 10) == 0) {
        alert("Su número de Tarjeta es VÁLIDO");
   } else {
        alert("Su número de Tarjeta es INVÁLIDO. Favor ingresar un número válido");
 }
}

//Posdata
/*Dentro de los pasos que sugerí, me da un problema con el prompt, puesto que no se puede invocar dentro de la función,
por lo tanto, no me entrega los alert correspondientes al if y al else. Se debe enseñar cómo llamar un prompt dentro
de la función para que retorne las alertas, puesto que se ejecuta, pero no llega a nada.*/
