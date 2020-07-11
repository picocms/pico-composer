---
Title: Docker
---

# Docker



## Tutorial de 3 minutos

Este tutorial asume que ya se cuenta con una version de docker instalada y tiene como objetivo el uso basico en un pc con linux a traves de la consola. Para la instalacion de docker en Ubuntu 18.04 seguir los pasos del siguiente [Tutorial](https://www.digitalocean.com/community/tutorials/como-instalar-y-usar-docker-en-ubuntu-18-04-1-es)

#### Que es Docker
Docker es una herramienta para gestionar contenedores. Los contenedores son similares a las maquinas virtuales, pero comparten el kernel del sistema donde estan instalados, lo que lo hace mucho mas livianos que una maquina virtual. En cuanto a funcionalidades son similares, es decir permiten levantar un sistema virtual, con la configuracion que se desee, y gestionarlo de manera independiente del sistema en el cual corre.


#### Testear version instalada

Despues de la instalacion, con los siguientes comandos se pueden monitorear las caracteristicas y el estado de docker en el pc
```
$ docker --version
Docker version 19.03.5, build 633a0ea
```

#### Verificar si docker esta corriendo

```
$ sudo systemctl status docker
```

#### Estructura de comandos docker

```
$ docker [option] [command] [arguments]
```

### Empezando a utilizar docker
</br>
#### Hello World

Antes de levantar un contenedor, para verificar que docker esta corriendo correctamente, ejecutar siguiente comando:

```
$ sudo docker run hello-world
```

Debiera dar como respuesta algo asi:

```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete 
Digest: sha256:d58e752213a51785838f9eed2b7a498ffa1cb3aa7f946dda11af39286c3db9a9
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
.
.
```
</br>
#### Subcomandos importantes

- search: busca imagenes segun palabra clave (Ej. ```$ sudo docker search ubuntu```)
- pull: descargar imagen (Ej. ```$ sudo docker pull ubuntu```)
- images: entrega listado de imagenes descargadas (Ej. ```$ sudo docker images```)


### Gestionar contenedores

Enlistar contenedores activos
```
$ sudo docker ps 
```

Enlistar todos los contenedores
```
$ sudo docker ps -a
```
Se mostrara algo como esto
```
CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS                     PORTS                    NAMES
a737b8233d51        hello-world             "/hello"                 8 minutes ago       Exited (0) 8 minutes ago                            elastic_lumiere
f78b9ca8694f        redis:3.2.7             "docker-entrypoint.s…"   22 hours ago        Created                                             airflow_redis_1
bda801009283        postgres:9.6            "docker-entrypoint.s…"   22 hours ago        Created                                             airflow_postgres_1
44ecf5e63779        redis:3.2.7             "docker-entrypoint.s…"   26 hours ago        Up 25 hours                0.0.0.0:6379->6379/tcp   apeairflow_redis_1
1e0b825872a7        postgres:9.6            "docker-entrypoint.s…"   26 hours ago        Up 25 hours                0.0.0.0:5432->5432/tcp   apeairflow_postgres_1
5f0b47d66f01        amazon/dynamodb-local   "java -jar DynamoDBL…"   2 weeks ago         Exited (143) 4 days ago                             quizzical_napier
ddfe0c86510b        php:7.4-apache          "docker-php-entrypoi…"   6 weeks ago         Exited (0) 4 days ago                               api_ident
```

</br>
 #### Subcomandos basicos para gestionar contenedores
 - create: crear un nuevo contenedor
 - run: montar un contenedor a partir de una imagen descargara (Ej. ```$ sudo docker run ubuntu```)
 - start: iniciar un contenedor (Ej. ```$ sudo docker start container_id / name```)
 - stop: detener un contenedor activo (Ej. ```$ sudo docker stop container_id / name```)
 - rm: eliminar un contenedor (Ej. ```$ sudo docker rm container_id / name```)

#### Aprender mas

Es muy sencillo aprender utilizando el manual de la libreria. Al ejecutar el comando ```$ sudo docker``` se desplegaran todos los comandos. ALgunos comandos utiles son:
- cp: copiar entre repositorio y sistema de archivos local


