---
Title: APE Airflow
Date: 2020-07-26
---


# Uso de aplicación APE Airflow

## Instalación aplicación Airflow Autopress
En este tutorial se asumirá que se tiene instalada la versión de airflow en ambiente local, con sus dependencias instaladas

1. Activar ambiente virtual ```conda activate airflow```
2. Exportar variables ```export AIRFLOW_ENV='DEV'```
3. Echar a andar docker: en carpeta ~/ape_airflow, ejecutar: ```sudo docker-compose up``` (solo la primera vez). Asegurarse que se está en carpeta ~/ape_airflow y además que la versión en docker-compose.yml es 2.0 (sino saldra error)
4. Echar a andar docker: en carpeta ~/ape_airflow, ejecutar: ```sudo docker-compose start```
5. INiciarlizar las bases de datos : ```python airflow_cli.py initdb```
6. Para instalar dependencias, para evitar porblema GPL: ```python airflow_cli.py webserver```
7. Instalar dependencias: ```sudo pip install -r requirements.txt```. Es posible que queden dependencias no cargadas por que no se encuentra la versión, en cuyo caso se debe modificar la versión de la dependencia agregando un >=
8. Copiar y pegar archivo de configuracion development.env en carpeta de configuracion
9. Iniciar servidor web : ```python airflow_cli.py webserver```
10. Problemas frecuentes, desinstalar e instalar nuevamente dotenv (desinstalar python-dotenv y dotenv)

## Iniciar Airflow en ambiente Local

1. Se debe activar ambiente virtual donde está instalada la aplicación: ```conda activate airflow```
2. Se deben configurar variables de entorno en la consola en que se ejecutará: ```export AIRFLOW_ENV='DEV'```
3. Se deben iniciar los docker donde están instaladas las bases de datos que usa airflow. Esto se hace simplemente con el comando: ```sudo docker-compose start```
4. Se debe iniciar el webserver con el siguiente comando: ```python airflow_cli.py webserver```
5. Se debe abrir una nueva consola, configurar misma variable de entorno y luego iniciar el scheduler de airflow con el siguiente comando: ```python airflow_cli.py scheduler```
6. Se puede acceder a la aplicación local en ```http://localhost:8080```

## Acceder a Airflow en ambiente producción

Ejecutar comando en consola: 
```
ssh autopress-vpn -L 8080:172.32.53.232:8080 -N -v 
```
Esto permitira acceder a la aplicación Airflow de producción a través de un tunel ssh. Con esto podremos acceder desde ```localhost:8080```. La opción -L indica que se especificará un puerto local, seguido del a dirección remota y el puerto remoto de la forma ```puerto_local:direccion_remota:puerto_direccion_reomta```. Con esto, los request que salgan del puerto especificado en la máquina local, serán redirigidos a la dirección y puerto de la máquina remota especificada.


## Creación de un nuevo DAG



