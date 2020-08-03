---
Title: Test data
Date: 2020-07-26
---

# Test Data Engineer

## TEMA 1: Python

#### Pregunta 1. Escribe un programa en python que valide si una palabra es palíndrome o no (palíndrome: palabra que se lee igual en ambos sentidos. Ej. radar)

**Solución:**

*Opción 1 (básica):*
```python
def fun(string):
    s1 = string
    s2 = string[::-1]
    if s1==s2:
        return true
    else
        return false
```
*Opción 2:*
```python
fun = lambda a: True if a == a[::-1] else False
```

#### Pregunta 2. Dada la clase Perro, definida en el código siguiente, crea una clase llamada Quiltro, heredada de la clase Perro y sobrecarga el método speak() usando un sonido o palabra específica para el Quiltro (Ej. "guau"). 

```python
class Perro:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def speak(self, sound):
        return f"{self.name} says {sound}"  
```

**Solución:**
```python
class Quiltro(Dog):
    def speak(self, sound="guau")
	    return super().speak(sound)
```

#### Pregunta 3. Escribe una función en python que reciba un número n y entregue una lista con una serie de fibonacci hasta el número n. Luego escribe un generador que entregue un iterador de números de fibonacci hasta el número n. Finalmente decora ambas funciones con un wrapper que agregue a la salida el tiempo de ejecución de la función y compara los tiempos de ejecución. (Serie de fibonacci es una serie matemática donde cada número es el resultado de la suma de los 2 anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21...)

**Solución:**
```python
import time

def time_decorator(func):
    def wrapper(arg):
        start_time=time.time()
        result=func(arg)
        return [result, time.time()-start_time)
    return wrapper

@time_decorator
def fib_gen(n):
    p, q = 0, 1
    while(p < n):
        yield p
        p, q = q, p + q

@time_decorator
def fib_calc(n):
    result=[]
    p, q = 0, 1
    while(p<n)
        result.append(p)
        p, q = q, p + q
    return result

a=fib_gen(1000000)
b=fib_calc(1000000)

#Comparación de tiempos de ejecución
a[1] / b[1]
```

#### Pregunta 4. El siguiente código recorre de forma secuencial un listado de sitios web y despliega su longitud. A través del uso de la librería asyncio transforma el código para que los distintos request se ejecuten de manera asíncrona. Agrega en la salida el tiempo del proceso completo y compara la duración usando el método original vs el método asíncrono.

```python
import requests

sites = ["http://quotes.toscrape.com/tag/love/",
         "http://quotes.toscrape.com/tag/inspirational/",
         "http://quotes.toscrape.com/tag/life/",
         "http://quotes.toscrape.com/tag/humor/",
         "http://quotes.toscrape.com/tag/books/",
         "http://quotes.toscrape.com/tag/reading/"]

def download_site(url, session):
    with session.get(url) as response:
        print(f"Read {len(response.content)} from {url}")

def download_all(sites):
    with requests.Session() as session:
        for url in sites:
            download_site(url, session)

if __name__=="__main__":
    download_all(sites)
```

**Solución:**

```python
import asyncio
import time
import aiohttp

sites = ["http://quotes.toscrape.com/tag/love/",
         "http://quotes.toscrape.com/tag/inspirational/",
         "http://quotes.toscrape.com/tag/life/",
         "http://quotes.toscrape.com/tag/humor/",
         "http://quotes.toscrape.com/tag/books/",
         "http://quotes.toscrape.com/tag/reading/"]

async def download_site(session, url):
    async with session.get(url) as response:
        print("Read {0} from {1}".format(response.content_length, url))

async def download_all_sites(sites):
    async with aiohttp.ClientSession() as session:
        tasks = []
        for url in sites:
            task = asyncio.ensure_future(download_site(session, url))
            tasks.append(task)
        await asyncio.gather(*tasks, return_exceptions=True)

if __name__ == "__main__":
    start_time = time.time()
    asyncio.get_event_loop().run_until_complete(download_all_sites(sites))
    duration = time.time() - start_time
    print(f"Downloaded {len(sites)} sites in {duration} seconds")
```

## TEMA 2: SQL

#### Pregunta 1. De acuerdo a la base de datos descrita en el siguiente diagrama, escribe una query que entregue como resultado el total de usuarios de la ciudad de Santiago.

![db](assets/python/db.png)

**Solución:**
```sql
SELECT COUNT(*) 
FROM
	Users a INNER JOIN Cities b ON a.id_city=b.id_city
WHERE 
	city="Santiago"
```

#### Pregunta 2. Para la misma base de datos, supongamos que uno de los tipos de indicadores de la tabla 'Indicator_type' es 'height', que representa la altura (cm) de un usuario dado. Escribe una query en SQL para obtener la ciudad donde la altura promedio de sus usuarios es la mayor.

**Solución:** 
```sql
SELECT 
     city, AVG(indicator_value) as 'altura' 
FROM Indicators a 
     INNER JOIN Users b on a.id_user = b.id_user
     INNER JOIN Cities c on b.id_city = c.id_city
     INNER JOIN Indicators_types d on a.indicator_type_id = d.indicator_type_id
WHERE 
     indicator_type='altura' 
GROUP BY 
     city 
ORDER BY 
     'altura' DESC 
LIMIT 1
```

#### Pregunta 3. Escribe una query similar a la anterior pero ahora busca la ciudad donde la altura promedio de sus usuarios es la tercera mayor, considerando únicamente las ciudades que tengan más de 1000 usuarios.

**Solución:**
```sql
SELECT 
     city, AVG(indicator_value) as 'altura' 
FROM Indicators a 
     INNER JOIN Users b on a.id_user = b.id_user
     INNER JOIN Cities c on b.id_city = c.id_city
     INNER JOIN Indicators_types d on a.indicator_type_id = d.indicator_type_id
WHERE 
     indicator_type='altura' 
GROUP BY 
     city 
HAVING
    COUNT(DISTINCT id_users) > 1000
ORDER BY 
     'altura' DESC 
LIMIT 2, 1
```

#### Pregunta 4. Supongamos que la tabla 'Indicators' de la base de datos acumula 40 millones de registros. Nombra 5 estrategias distintas que utilizarías para optimizar el desempeño de la base de datos en general. Intenta describir en detalle la acción a realizar (ej. qué columnas específicas manipularas) y qué tipo de queries podrían mejorar su desempeño (consulta o modificación). Toma como supuesto que inicialmente la base de datos está en el mismo servidor que la aplicación, es una base MySQL con motor InnoDB y es necesario que la base de datos se mantenga como una base relacional.

**Respuestas posibles:**

*Tunning DB*
1. Indexar columnas (columnas presentes en sentencias WHERE, GROUP BY, ORDER BY), utilizar sentencias EXPLAIN, ANALIZE, evitar recorrer tablas de principio a fin, etc
2. Tunning parámetros de configuración de base de datos -> miles de opciones relacionadas con buffers, cache, max_conections, timeouts, logs, table_sizes, etc.
3. Evaluar quitar información antigua y archivarla (si no es estrictamente necesario mantenerla).
4. Configuración de base de datos almacenadas por columnas -> Mejora para consultas SELECT

*Tunning Servidor o Instancia*
1. Respuestas relacionadas con el hardware: Uso de discos duros RAID, separar temp en otra partición del disco duro, evitar uso de SWAP, ocupar más discos, más rápidos y más pequeños, uso de SSD.
2. Respuestas relacionadas con uso óptimo del servidor: eliminar daemons, paquetes sin usar, y tunning del servidor en general para desempeño óptimo de Base de datos
3. Iniciativas de escalamiento horizontal: Aumentar tamaño de instancia, utilizar instancia optimizada para DB

*Infraestructura*
1. Separar base de datos de la aplicación e instalarla en un nuevo servidor
2. Evaluar migración a motor de BD compatible y más eficiente (Ej. RDS de AWS)
3. Escalamiento de la base de datos utilizando réplicas de solo lectura (arquitectura maestro-esclavo)


## TEMA 3: Cloud and Networking

#### Pregunta 1. Explica el propósito de al menos 4 tipos de requests HTTP cuando éstos son utilizados para consultar una API tipo Restful

**Respuesta posibles:** 

En la arquitectura Restful se alinean los métodos http nativos con las acciones tipo CRUD de una aplicación. En una API Restful cada url de la aplicación representa un recurso el cual puede ser manipulado a través de los distintos métodos http. Los métodos http más típicamente utilizados en la arquitectura Restful son:
- GET: Obtener información de un recurso dado
- POST: Crear un nuevo recurso
- PUT: Actualizar un recurso dado
- DELETE: Eliminar el recurso dado


#### Pregunta 2. Diseña una versión simplificada de Twitter, donde usuarios puedan: 1. postear, 2. seguir a otros usuarios y 3. poder visualizar el timeline. Los requerimientos son: 1. alta disponibilidad, 2. alto volumen de usuarios y tweets, 3. actualización de mensajes en muy poco tiempo. Para el diseño, sigue la siguiente pauta:

- a. Escribe todas las preguntas que necesites hacer, que creas que sean relevantes para un diseño inicial tipo MVP. Así mismo escribe todos los supuestos que estés asumiendo para este diseño. 
- b. De acuerdo a los requerimientos describe una arquitectura básica para la base de datos.
- c. Dibuja un diseño de alto nivel (usuarios, servidores, bases de datos y otros elementos). Justifica tus decisiones considerando los requerimientos expuestos. 
- d. En una etapa posterior al MVP, qué herramientas utilizarías para la implementación de la funcionalidad Trending Topic 
	
**Respuestas posibles:**

- a. Supuestos relevantes son de volumen de usuarios, volumen de tweets, la velocidad de actualización, la consistencia de la información, el almacenamiento puede no ser relevante por que los tweets ocupan solo 140 caracteres
- b. Describir las principales tablas: Users, Tweets, Followers
- c. Lo más complejo es implementar el timeline que verá cada usuario, y que éste se actualice en tiempo real, dado que es una consulta no escalable. Una alternativa es precalcular cada timeline y guardarlo en una base en memoria como redis, además de la base de datos principal. Luego, cada tweet al ser posteado, se inyecta únicamente en los timelines en memoria, de sus seguidores, quienes eventualmente podrán verlo. Es valioso considerar el uso de balanceador de carga para los requests, replicación de nodos para alta disponibilidad, implementación de cluster redis que puedan escalar, gestión de usuarios inactivos (no actualizar sus timelines por ejemplo), entre otros.
- d. Se puede implementar una herramienta de computo en tiempo real para este fin. Una alternativa es Apache storm, que se usa para procesar streaming de datos. Los resultados obtenidos se pueden almacenar en bases en memoria, al igual que los timelines.

![twitter](assets/python/twitter.png)

