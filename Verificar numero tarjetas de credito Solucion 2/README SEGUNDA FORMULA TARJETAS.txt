README SEGUNDA FORMULA PARA V�LIDAR TARJETA DE CR�DITO (S�lo me compil� en el HTML, puesto que en el app.js, no invocaba el prompt. Esto, lo dejar� considerado en unas anotaciones al final de los pasos implementados en el c�digo).

PASO 1: Primeramente, llamamos a nuestra funci�n. La funci�n recibir� el nombre de isValidCard, donde dentro del parentesis se deja vac�o.

PASO 2: En este punto, se deben generar variables, donde la primera sea un prompt value. Una segunda variable que
considere el n�mero de la tarjeta que se est� ingresando, m�s el m�todo toString (este m�todo retorna una respuesta o
cadena que representa al objeto que estamos trabajando); una tercera variable que me devuelva un null (valor vac�o); y la cuarta variable que me devuelva un total 0.

PASO 3: Una vez que est�n definidas nuestras variables, se debe invocar un for (funci�n que encapsula formulas de una linea), donde dentro de los parentesis se debe generar una variable que sea igual a 0, que esa variable recorra la longitud del array (length), y que la variable me sume o sea igual a 2 para que sume de 2 en 2. Luego de esto, en la siguiente linea se debe invocar a la variable empty, y que �sta sea igual a un parseInt (m�todo que convierte a n�meros enteros), donde dentro de los parentesis, se invoque la variable entry, y un charAt (m�todo que cuenta car�cteres y puede entregar vac�os), y en sus parentesis se coloque la variable que se defini� en el for, y esto se multiplique por 2, ya que debe calcular los n�meros pares (Seg�n el Argoritmo de Lunh: este m�todo o argoritmo permite verificar por medio de una suma, si el n�mero de la tarjeta ingresada es v�lida o no v�lida).

PASO 4: Luego de esto, se debe generar un if (si), y dentro de sus parentesis invoco a la variable empty, y que �ste sea mayor (>) a 9. Esto me entregar� en la siguiente linea mi tercera variable empty, la cual ser� igual a la variable empty con el m�todo toString, y en la siguiente linea, se cita nuevamente la variable empty, y que �sta sea igual a un parseInt de empty junto a charAt(0), m�s otro parseInt, en el cual se debe colocar (dentro de los parentesis) la variable empty con un charAt(1).

PASO 5: A posteriori del cierre de llave del if, se debe citar la variable sumResult, y que �ste sume o sea igual a mi variable empty. Despu�s de esto, se cierra con la llave del for.

PASO 6: Seguidamente, se invoca un nuevo for donde, nuevamente, cuenta la longitud del array, y que esto sume o sea igual a 2, para luego poner en la siguiente linea la variable sumResult, el cual debe sumar o ser igual a un parseInt de la variable entry, m�s un charAt con la variable que se defini� en este for.

PASO 7: Parte nueva del c�digo anterior HTML: Se debe generar cuatro if y un else, los cuales, contienen lo siguiente:

1.- si la variable empty queda vac�a o con una string, y sean distintos de los numbers, arrojar� una alerta al usuario para que ingrese un n�mero.
2.- si se recorren los n�meros ingresados en el prompt, y estos son similares a 16, generar� una alerta al usuario que avisar� que su tarjeta es v�lida.
3.- si se recorren los n�meros ingresados en el prompt, y estos son dmayores a 16 (colocar m�s de 16 n�meros), generar� una alerta al usuario que avisar� que la cantidad de n�meros ingresados no corresponden.
4.- si la variable sumResult es residuo (%) de 10, y la respuesta de aquella operaci�n retorne un resultado que sea similar (==) de 0, generar� una alerta al usuario que le avisar� que su tarjeta es v�lida. (Todas estas afirmaciones siguen a una respuesta verdadera = True/Boolean).

En caso contrario (else), generar� una alerta que le indicar� que su tarjeta no es v�lida (False = Boolean). Por �ltimo, enlazamos todo a un onload con el nombre de la function para que recorra todo el c�digo y compile con todas las funciones utilizadas. 
____________________________________________________________________________________________________________________
CONSIDERACIONES DE ESTA SEGUNDA FORMULA HTML

A) Estas anotaciones tambi�n est�n dentro del c�digo, ya que me ayuda a comprender las funciones que estoy utilizando.

B) Este c�digo es mucho m�s completo que el primero, ya que considera todas las opciones que se pueden ingresar 
dentro del prompt (a diferencia del primero, puesto que si dejaba el prompt vac�o, igual me validaba la tarjeta), 
y dependiendo de la respuesta del usuario, se va a generar la alerta correspondiente.

C) Dentro de los pasos que suger�, me da un problema con el prompt, puesto que no se puede invocar dentro de la funci�n, por lo tanto, no me entrega los alert correspondientes al if y al else. Se debe ense�ar c�mo llamar un prompt dentro de la funci�n para que retorne las alertas, puesto que se ejecuta, pero no llega a nada.