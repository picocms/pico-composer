---
Title: Estilos
Description: This description will go in the meta description tag
Author: Joe Bloggs
Date: 2001-04-25
Robots: noindex,nofollow
Template: index
---

# Guía de estilos (H1)

## Elementos básicos de Markdown (H2)

- Heading: # -> H1, ## -> H2, ### -> H3, etc.
- Style: **bold** -> \*\*text\*\*, *italic* -> \*text\*, ~~tachado~~ -> \~\~text\~\~.        
- Cita: \> blockquote
- Codigo entre lineas: `code` -> \`code\`
- Bloque de codigo: \`\`\` code... \`\`\`
- Link: [title](https://www.example.com) -> \[title\]\(https://www.example.com\)
- Imagen: \!\[alt text\]\(path_to/image.jpg\)
- Linea horizontal: \-\-\-
- Listas: ordenadas -> 1., 2., 3. ... , desordenada-> -, -, -, ...
- Nota al pie: Here's a sentence with a footnote. \[^1\], \[^1\]: This is the footnote.
- Tablas: 
    - encabezado: | Nombre | Apellido | Pais | Fecha nacimiento | Edad | sexo |
    - separador encabezado: | ----- | ----- | ----- | ----- | ----- | ----- |
    - Fila i: | Juan | Batlle | Chile | 11/11/1980 | 39 | M |
    - .
    - . 
    - Fila x: | Magdalena | Poblete | Chile | 15/01/1986 | 34 | F |
<br/><br/>

#### Tabla del ejemplo

| Nombre | Apellido | Pais | Fecha nacimiento | Edad | sexo |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Juan | Batlle | Chile | 11/11/1980 | 39 | M |
| Magdalena | Poblete | Chile | 15/01/1986 | 34 | F |


## Configuración CMS PICO

**Estructura encabezado yaml**
Al principio del archivo se incluye el siguiente header YAML. Se pueden omitir los campos que se deseen. Para que el contenido aparezca en el index lateral se debe incluir el campo title, cuyo valor asignado se presentara en el index
```
---
Title: Estilos
Description: This description will go in the meta description tag
Author: Joe Bloggs
Date: 2001-04-25
Robots: noindex,nofollow
Template: 
---
```

**Templates**
- Los templates son archivos html que usan la libreria twig para definir la estructura, estilo y contenido de un template dado (Ej.index, blog, contacto, etc). 
- Los templates son parte de los themes y son archivos con la extension .twig que se guardan dentro de la carpeta de cada theme.


## Uso de Twig

## Configuración Theme Bits and Pieces

#### Navegacion: 
- Estan implementados estilos para #(H1), ##(H2) y ###(H3). El resto aparecen en negrita
- El menu lateral de navegacion se configura automaticamente de acuerdo al atributo title del YAML Header
- Se puede establecer orden por el atributo que se desee, especificandolo en config/config.yml, con las variables page_order_x
<br/><br/>

#### Cargar archivos css externos: -> deprecado
```php
$config['external_css'] = array(
  'url/to/external/css-file-1.css',
  'url/to/path-to/file-2.css',
);
```
<br/>

#### Templates
El theme  Bits and Pieces solo tiene un template, que se llama index. Estos se declara en el encabezado YAML (template: index) y se puede editar en themes/bitsandpieces/index.twig

<br/>

#### Estilo
El estilo esta definido en el archivo main.css, en themes/bitsandpieces/styles/main.css

## Uso de plugins