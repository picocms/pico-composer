---
Title: Ambientes virtuales
Date: 2020-07-03
---

# Ambientes virutales

Descripcion

## Ambientes virtuales con Anaconda

En esta seccion se describe el uso de ambientes virtuales utilizando la libreria incluida en Anaconda, distribucion de Python para Data Science. Para instalar Anaconda seguir el siguiente [link](https://www.anaconda.com/products/individual). La documentacion oficial de gestion de ambientes virtuales se puede encontrar en el siguiente [link](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html). Para utilizar la libreria virtualenv dirigirse a la siguiente seccion. 

Los ambientes virtuales permite mantener librerias y dependencias especificas para distintos proyectos en un mismo equipo. De esta forma, al trabajar en un proyecto especifico, se debe antes activar su ambiente virtual y se podrán usar sus dependencias sin el peligro que hayan sido actualizadas, eliminadas, modificadas por otros proyectos. 

Se puede saber en cualquier momento qué ambiente virtual está activado ya que este se muestra con su nombre entre parentesis justo antes del prompt:
```
(myenv) user@host:/path$
```

### Comandos basicos

- Crear un ambiente virtual
```
$ conda create --name myenv
```

- Crear ambiente virtual con version especifica de python
```
$ conda create -n myenv python=3.6
```

- Listado de ambientes virtuales creados
```
$ conda env list
```

- Activar ambiente virtual
```
$ conda activate myenv
```

- Desactivar ambiente virtual
```
$ conda deactivate
```

- Clonar ambiente a partir de otro existente
```
$ conda create --name myclone --clone myenv
```

- Activar ambiente virtual
```
$ conda activate myenv
```

- Desactivar ambiente virtual
```
$ conda deactivate
```

- Eliminar ambientes virtuales
```
$ conda remove --name myenv --all
```

### Uso de librerias

Las librerias se instalan por lo general usando el comando [pip](https://pypi.org/project/pip/). Con la distribucion de Anaconda, a traves del comando conda se pueden instalar librerias disponibles en el repositorio de Anaconda. El comando pip es mas universal. Las librerias que se instalen a traves de estos comandos, quedaran instaladas en carpeta dentro del entorno virtual, a la cual no se tiene acceso desde afuera. Sse ocupa comando apt o apd-get, entonces se instalara fuera de entornos virtuales y estaran disponibles en cualquier entorno (con los riesgos que esto conlleva). 

- Instalar una libreria
```
$ pip install libreria
```

- Enlistar librerias y dependencias de un repositorio
```
$ conda list --explicit
```

- Crear archivo de dependencias de un repositorio
```
$ conda list --explicit > spec-file.txt
```

- Crear ambiente a partir de archivo de dependencias
```
$ conda create --name myenv --file spec-file.txt
```

### Variables de entorno

- Crear variable de entorno
```
$ conda env config vars set my_var=value
```

- Lista de variables de entorno creadas
```
$ conda env config vars list
```


## Ambientes virtuales con libreria virtualenv