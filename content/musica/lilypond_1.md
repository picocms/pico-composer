---
Title: Lilypond  - parte 1
---
<script type='text/javascript' src='//www.midijs.net/lib/midi.js'></script>


# Tutorial Lilypond - Parte 1
## Una melodía / un pentagrama


### Codigo se escribe entre parentesis { ... }

El código de lilypond referente a las notas mismas va dentro de paréntesis de llaves. Se pueden escribir comentarios para escribir en el cédigo las indicaciones que se estimen convenientes. Estos comentarios se anotan entre dos símbolos %. Lo que este escrito como comentario el compilador lo saltará.
```
%estructura basica%
{
    %comentarios%

}
```

![ejemplo](assets/lilypond/ej_lilypond.png)

<a onClick="MIDIjs.play('content/musica/prueba2.midi');">Escuchar ejemplo</a>

Librería para escuchar midi en web [link](http://www.midijs.net/midijs_api.html)

### Opciones por defecto
- Lilypond se encarga de completar automáticamente todo lo que el usuario no específica. Esto es muy útil para ahorrar código y tiempo. Si no se detalla el tipo de compás, la armadura, la duración de la nota, la octava de la nota, la llave, se utilizarán las opciones por defecto, que son en estos cinco casos:
    - 4/4 (o C),
    - negra, 
    - llave de sol, 
    - octava 3 (nota al pie) -> por defecto el la3 (la a 440, cercano al do central es "a" a secas, de ahi que el do central (do4), sea c')
    - armadura do mayor (sin sostenidos ni bemoles)
- Más adelante se especifica cómo se definen cada uno de estos parámetros. Como ejemplo, para escribir un La en 3a octava (A3), en llave de sol, en 4/4, con duracion de negra, simplemente se escribe:
```
{
    a
}
```
![ejemplo](assets/lilypond/ej1.png)

### Escribir notas
- Las notas se especifican como letras minúsculas en clave americana (a, b, c, d, e, f, g -> La, Si, Do, Re, Mi, Fa, Sol).
- Se despliegan dentro de los paréntesis de llave { }, con separacion de espacio entre una y otra.
- se ocupan los caracteres ' y , para indicar octavas específicas de cada nota. Como ejemplo, el do central o C4 se escribe como c'. El código entonces para escribir notas do en un pentagrama en clave de sol, desde C2 hasta C6 es el siguiente:
```
{
    c, c c' c'' c'''
}
```
![ejemplo](assets/lilypond/ej2.png)

- Los sostenidos y bemoles se indican agregando las letras "is" y "es", sin espacio entre medio, a cada nota que se desee alterar. Como ejemplo si un do4 se indica como ```c'```, entonces el do4 sostenido se indicara como ```c'is```
- La escala de la mayor se puede escribir de la siguiente forma:

```
{
    a b cis' d' e' fis' gis' a'
}

```

![ejemplo](assets/lilypond/ej3.png)


- La escala de do menor se puede escribir de la siguiente forma:
```
{
   c' d' ees' f' g' aes' bes' c''
}
```
![ejemplo](assets/lilypond/ej4.png)

### Configuracion básica del pentagrama
En la primera seccion se habló de valores por defecto para distintos parámetros del pentagrama como son el compás, la armadura, la llave, entre otros. Los distintos parámetros se configuran dentro de las llaves { }, justo antes de escribir las notas, de la siguiente forma:
```
{
    \parametro1 valor1
    \parametro2 valor2
    ..
    ..
    notas
}
```
- Los parámetros principales se detallan a continuacion:
    - compas: \time -> toma valores del compás que se desée. Ej. 4/4, 3/4 2/4, 6/8, etc
    - llave: \clef -> indica que llave usará. Puede ser llave de sol, de fa, de do, etc. Ej. treble (llave sol), bass (llave fa), alto, tenor
    - armadura: \key -> corresponde a la tonalidad del pentagrama, y por tanto a la armadura que se mostrará. Se especifica con la nota de la tonalidad deseada, seguido del tipo minor o major, segun se refiera a una tonalidad menor o mayor, de la siguiente forma: ```nota \tipo```\
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
![ejemplo](assets/lilypond/ej5.png)


### Duraciones
- Las duraciones se especifican con un numero justo al final de cada nota.
- Los numeros posibles son 1, 2, 4, 8, 16, 32, 64, correspondientes respectivamente a redonda, blanca, negra, corchea, semicorchea, fusa y semifusa.
- El siguiente codigo genera un pentagrama con un la4 en todas las figuras desde la redonda hasta la semifusa.
```
{
    a'1 a'2 a'4 a'8 a'16 a'32 a'64
}
```
![ejemplo](assets/lilypond/ej6.png)

#### el puntillo
Para el puntillo simplemente se debe agregar un punto a continuación del número de la duración de la siguiente formaÑ
```
{
    \time 6/8
    c'4. d'8. e'16 f'8 g'1
}
```
![ejemplo](assets/lilypond/ej8.png)

#### el tresillo


### Silencios
El silencio se especifica con una "r", y en cuanto a duraciones funciona como cualquier nota, es decir, junto a la r se especifica un número dentro de los posibles (1, 2, 4, 8, 16, 32, 64). Si no se especifica, se asume que es silencio de negra. En el siguiente pentagrama se especifica el código para mostrar los distintos tipos de silencio.
```
{
    r1 r2 r4 r8 r16 r32 r64
}
```
![ejemplo](assets/lilypond/ej7.png)

### Configuraciones que aplican a todo el documento

### Estructura general

### Uso de parametro relative