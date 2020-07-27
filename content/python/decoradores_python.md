---
Title: Decoradores Python
Author: Juan Pablo Batlle
Date: 2020-07-16
---

## Decoradores en python

Un decorador o wrapper es un [patrón de diseño]() que permite añadir funcionalidad adicional a un método existente. En simple, lo que hace es tomar la salida del método que "decora", lo modifica según como sea diseñado (nueva funcionalidad) y devuelve la salida "decorada". Es una alternativa flexible y sencilla a crear subclases o clases abstractas, ahorrando complejidad. 

La gracia del decorador es que puede ser utilizado para múltiples métodos agregando solo una línea de código, disminuyendo el código repetido en los distintos métodos a los que se le aplica. Habitualmente se utiliza cuando existe una acción recurrente o una "decoración" que se desea hacer de forma similar en muchos métodos y en vez de agregar el mismo código decorador a cada método se crea un único método decorador. Como ejemplo, supongamos que tenemos múltiples métodos cuya salida es un string. Deseamos hacer que todas estos métodos entreguen un string en mayúscula. Para esto creamos un único método decorador que toma un string y lo transforma en mayúscula. Luego, se utiliza el decorador en cada método que se desee. Se pueden crear y asignar mútlples decoradores de manera flexible a los distintos métodos de la aplicación.

### Sintaxis y uso

Para entender cómo funcionan los decoradores es importante entender en profundidad cómo funcionan las funciones en python. En la siguiente [entrada](http://) se exponen las distintas características de las funciones en python y se recomienda leerla antes de seguir en esta sección.


El decorador es simplemente un método que recibe una función como argumento y modifica su salida según la lógica del decorador:
```
salida_decorada = decorador(funcion_a_decorar(args))
```

Python permite a las funciones anidadas, acceder a las variables fuera de su scope, en el nivel superior. Este concepto es fundamental para que los decoradores puedan implementarse. Este patrón se llama Closure o Cierre. Python provee una sintaxis especial que evita la complejidad de llamar una función dentro de otra. Cada función o método se puede "decorar" simplemente declarando el nombre del decorador después de un "@", antes de la definición del métddo, como se describe a continuación:

```
def decorador(funcion(args), x, y):
    def funcion_wrapper(args)
        ... codigo a decorar usando funcion ...
    return funcion_wrapper

@decorador(x, y)
def funcion_a_decorar(args):
    ... codigo de la funcion ...
    return salida

salida_decorada = funcion_a_decorar(args)
```

Como se ve en el código, por haberse declarado el decorado (@decorador) al definir la función a decorar, al ser ésta usada, la salida sale decorada. Además de esto, los argumentos de la función, como se explicó anteriormente, pueden ser utilizados desde la función wrapper en el decorador. Además de esto un decorador puede tener sus propios argumentos, los cuales se ingresan en el momento en que se declara el decorador al inicio de la definición del método a decorar, tal cual aparece en el ejemplo con las variables x, y.


