---
Title: Música
---
<script type='text/javascript' src='//www.midijs.net/lib/midi.js'></script>


# Tutorial Lilypond


### Codigo se escribe entre parentesis { ... }

El codigo de lilypond referente a las notas mismas va dentro de parentesis de llaves. Se pueden escribir comentarios para escribir en el codigo las indicaciones que se estimen convenientes. Estos comentarios deben ir entre dos simbolos %, Lo que este escrito como comentario el compilador lo saltara.
```
%estructura basica%
{
    %comentarios%

}
```


![ejemplo](http://i.imgur.com/uzn7UTG.png)

<a onClick="MIDIjs.play('content/musica/prueba2.midi');">Escuchar ejemplo</a>

Libreria para escucvhar midi en web [link](http://www.midijs.net/midijs_api.html)

### Opciones por defecto
- Si no se detalla el tipo de compas, la armadura, la duracion de la nota, la octava de la nota, la llave, se utilizaran las opciones por defecto, que son en estos cinco casos:
    - 4/4 (o C),
    - negra, 
    - llave de sol, 
    - octava 3 (nota al pie) -> por defecto el la3 (la a 440, cercano al do central es "a" a secas, de ahi que el do central (do4), sea c')
    - armadura do mayor (sin sostenidos ni bemoles)
- Como ejemplo, para escribir un Do en 3a octava (C3), en llave de sol, en 4/4, con duracion de negra, simplemente se escribe:
```
{
    c
}
```

### Escribir notas
- Las notas se especifican como letras minusculas en clave americana (a, b, c, d, e, f, g -> La, Si, Do, Re, Mi, Fa, Sol).
- Se despliegan dentro de los parentesis de llave { }, con separacion de espacio entre una y otra.
- se ocupan los caracteres ' y , para indicar octavas especificas de cada nota. Como ejemplo, el do central o C4 se escribe como c'. El codigo entonces para escribir notas do en un pentagrama en clave de sol, desde C2 hasta C6 es el siguiente:
```
{
    c, c c' c'' c'''
}
```

- Los sostenidos y bemoles se indican agregando las letras "is" y "es", sin espacio entre medio, a cada nota que se desee alterar. Como ejemplo si el do4 se indica como ```c'```, entonces el do4 sostenido se indicara como ```c'is```
- La escala de la mayor se puede escribir de la siguiente forma:
```
{
    a b cis' d' e' fis' gis' a'
}
```
- La escala de do menor se puede escribir de la siguiente forma:
```
{
   c' d' ees' f' g' aes' bes' c''
}
```

### Configuracion basica del pentagrama
En la primera seccion se hablo de valores por defecto para distintos parametros del pentagrama como son el compas, la armadura, la llave, entre otros. Los distintos parametros se configuran dentro del las llaves { }, justo antes de agregar las notas, de la siguiente forma:
```
{
    \parametro1 valor1
    \parametro2 valor2
    ..
    ..
    notas
}
```
- Los parametros principales se detallan a continuacion:
    - compas: \time -> toma valores del compas que se desee. Ej. 4/4, 3/4 2/4, 6/8, etc
    - llave: \clef -> indica que llave usara, puede ser llave de sol, de fa, de do, etc. Ej. treble (llave sol), bass (llave fa), alto, tenor
    - armadura: \key -> corresponde a la tonalidad del pentagrama, y por tanto a la armadura que se mostrara. Se especifica con la nota de la tonalidad deseada, seguido del tipo minor o major, segun se refiera a una tonalidad mayor o menor, de la siguiente forma: ```nota \tipo```\
    - tempo -> pendiente
- A continuacion se muestra ejemplo para un pentagrama en La mayor, 3/4, en llave de fa, con tres negras haciendo un fa#3
```
{
    \key a \major
    \time 3/4
    \clef bass
    fis fis fis
}
```


### Duraciones
- Las duraciones se especifican con un numero justo al final de cada nota.
- Los numeros posibles son 1, 2, 4, 8, 16, 32, 64, correspondientes respectivamente a redonda, blanca, negra, corchea, semicorchea, fusa y semifusa.
- El siguiente codigo genera un pentagrama con un la4 en todas las figuras desde la redonda hasta la semifusa.
```
{
    a'1 a'2 a'4 a'8 a'16 a'32 a'64
}
```

### Silencios

### Configuraciones que aplican a todo el documento

### Estructura general

### Uso de parametro relative