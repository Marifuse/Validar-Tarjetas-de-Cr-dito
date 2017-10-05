README SEGUNDA FORMULA PARA VÁLIDAR TARJETA DE CRÉDITO (Sólo me compiló en el HTML, puesto que en el app.js, no invocaba el prompt. Esto, lo dejaré considerado en unas anotaciones al final de los pasos implementados en el código).

PASO 1: Primeramente, llamamos a nuestra función. La función recibirá el nombre de isValidCard, donde dentro del parentesis se deja vacío.

PASO 2: En este punto, se deben generar variables, donde la primera sea un prompt value. Una segunda variable que
considere el número de la tarjeta que se está ingresando, más el método toString (este método retorna una respuesta o
cadena que representa al objeto que estamos trabajando); una tercera variable que me devuelva un null (valor vacío); y la cuarta variable que me devuelva un total 0.

PASO 3: Una vez que estén definidas nuestras variables, se debe invocar un for (función que encapsula formulas de una linea), donde dentro de los parentesis se debe generar una variable que sea igual a 0, que esa variable recorra la longitud del array (length), y que la variable me sume o sea igual a 2 para que sume de 2 en 2. Luego de esto, en la siguiente linea se debe invocar a la variable empty, y que ésta sea igual a un parseInt (método que convierte a números enteros), donde dentro de los parentesis, se invoque la variable entry, y un charAt (método que cuenta carácteres y puede entregar vacíos), y en sus parentesis se coloque la variable que se definió en el for, y esto se multiplique por 2, ya que debe calcular los números pares (Según el Argoritmo de Lunh: este método o argoritmo permite verificar por medio de una suma, si el número de la tarjeta ingresada es válida o no válida).

PASO 4: Luego de esto, se debe generar un if (si), y dentro de sus parentesis invoco a la variable empty, y que éste sea mayor (>) a 9. Esto me entregará en la siguiente linea mi tercera variable empty, la cual será igual a la variable empty con el método toString, y en la siguiente linea, se cita nuevamente la variable empty, y que ésta sea igual a un parseInt de empty junto a charAt(0), más otro parseInt, en el cual se debe colocar (dentro de los parentesis) la variable empty con un charAt(1).

PASO 5: A posteriori del cierre de llave del if, se debe citar la variable sumResult, y que éste sume o sea igual a mi variable empty. Después de esto, se cierra con la llave del for.

PASO 6: Seguidamente, se invoca un nuevo for donde, nuevamente, cuenta la longitud del array, y que esto sume o sea igual a 2, para luego poner en la siguiente linea la variable sumResult, el cual debe sumar o ser igual a un parseInt de la variable entry, más un charAt con la variable que se definió en este for.

PASO 7: Parte nueva del código anterior HTML: Se debe generar cuatro if y un else, los cuales, contienen lo siguiente:

1.- si la variable empty queda vacía o con una string, y sean distintos de los numbers, arrojará una alerta al usuario para que ingrese un número.
2.- si se recorren los números ingresados en el prompt, y estos son similares a 16, generará una alerta al usuario que avisará que su tarjeta es válida.
3.- si se recorren los números ingresados en el prompt, y estos son dmayores a 16 (colocar más de 16 números), generará una alerta al usuario que avisará que la cantidad de números ingresados no corresponden.
4.- si la variable sumResult es residuo (%) de 10, y la respuesta de aquella operación retorne un resultado que sea similar (==) de 0, generará una alerta al usuario que le avisará que su tarjeta es válida. (Todas estas afirmaciones siguen a una respuesta verdadera = True/Boolean).

En caso contrario (else), generará una alerta que le indicará que su tarjeta no es válida (False = Boolean). Por último, enlazamos todo a un onload con el nombre de la function para que recorra todo el código y compile con todas las funciones utilizadas. 
____________________________________________________________________________________________________________________
CONSIDERACIONES DE ESTA SEGUNDA FORMULA HTML

A) Estas anotaciones también están dentro del código, ya que me ayuda a comprender las funciones que estoy utilizando.

B) Este código es mucho más completo que el primero, ya que considera todas las opciones que se pueden ingresar 
dentro del prompt (a diferencia del primero, puesto que si dejaba el prompt vacío, igual me validaba la tarjeta), 
y dependiendo de la respuesta del usuario, se va a generar la alerta correspondiente.

C) Dentro de los pasos que sugerí, me da un problema con el prompt, puesto que no se puede invocar dentro de la función, por lo tanto, no me entrega los alert correspondientes al if y al else. Se debe enseñar cómo llamar un prompt dentro de la función para que retorne las alertas, puesto que se ejecuta, pero no llega a nada.