README VÁLIDAR TARJETA DE CRÉDITO (Sólo me compiló en el HTML, puesto que en el app.js, no invocaba el prompt. Esto, 
lo dejaré considerado en unas anotaciones al final de los pasos implementados en el código).

Paso 1: Primeramente, llamamos a nuestra función. La función recibirá el nombre de isValidCard, donde
dentro del parentesis se debe dejar vacío.

Paso 2: En este punto, se deben generar variables, donde la primera sea un prompt lunh (este método o argoritmo permite verificar por medio de una suma, si el número de la tarjeta ingresada es válida o no válida). Una segunda variable que considere el número de la tarjeta que se está ingresando, más el método toString (este método retorna una respuesta o cadena que representa al objeto que estoy trabajando); una tercera variable que me devuelva un null (valor vacío); y la cuarta variable que me devuelva un total 0.

Paso 3: Una vez que estén definidas mis variables, se debe invocar un for (función que encapsula formulas de una linea), donde dentro de los parentesis se debe generar una variable que sea igual a 0, que esa variable recorra la longitud del array (length), y que la variable me sume o sea igual a 2 para que sume de 2 en 2. Luego de esto, en la siguiente linea se debe invocar a la variable empty, y que ésta sea igual a un parseInt (método que convierte a números enteros), donde dentro de los parentesis, se invoque la variable entry, y un charAt (método que cuenta carácteres y puede entregar vacíos), y en sus parentesis se coloque la variable que se definió en el for, y esto se multiplique por 2, ya que debe calcular los números pares (Según el Argoritmo de Lunh).

Paso 4: Luego de esto, se debe generar un if (si), y dentro de sus parentesis invoco a la variable empty, y que éste sea mayor (>) a 9. Esto me entregará en la siguiente linea mi tercera variable empty, la cual será igual a la variable empty con el método toString, y en la siguiente linea, se cita nuevamente la variable empty, y que ésta sea igual a un parseInt de empty junto a charAt(0), más otro parseInt, en el cual se debe colocar (dentro de los parentesis) la variable empty con un charAt(1).

Paso 5: A posteriori del cierre de llave del if, se debe citar la variable sumResult, y que éste sume o sea igual a mi variable empty. Después de esto, se cierra con la llave del for.

Paso 6: Seguidamente, se invoca un nuevo for donde, nuevamente, cuenta la longitud del array, y que esto sume o sea igual a 2, para luego poner en la siguiente linea la variable sumResult, el cual debe sumar o ser igual a un parseInt de la variable entry, más un charAt con la variable que se definió en este for.

Paso 7: En seguida del cierre de la llave del for, se debe invocar un if (si), y un else (sino), el cual, el primero debe contener la variable sumResult, y que ésta sea residuo (%) de 10, para que el resultado de aquella operación retorne un resultado que sea similar (==) de 0. Si la primera afirmación es verdadera (True = Boolean), ejecutará un alert (ventana emergente) que le avise al usuario que su tarjeta de credito es válida. En caso contrario, generará otro alert que le indicará que su tarjeta no es válida (False = Boolean). Por último, enlazamos todo a un onload con el nombre de la function para que recorra todo el código y compile con todas las funciones utilizadas.
--------------------------------------------------------------------------------------------------------------------
CONSIDERACIONES:

A) Estas anotaciones también están dentro del código, ya que me ayuda a comprender las funciones que estoy utilizando.

B) Dentro de los pasos que sugerí, me da un problema con el prompt, puesto que no se puede invocar dentro de la función, por lo tanto, no me entrega los alert correspondientes al if y al else. Se debe enseñar cómo llamar un prompt dentro de la función para que retorne las alertas, puesto que se ejecuta, pero no llega a nada.