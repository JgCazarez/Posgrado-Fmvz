# Proyecto del Sitio Web de Posgrado FMVZ

Este proyecto contiene el código fuente para el sitio web del Posgrado de la Facultad de Medicina Veterinaria y Zootecnia.

## Estructura del Proyecto

-   `/index.html`: Página de inicio.
-   `/css/`: Contiene los archivos de estilos (CSS).
    -   `styles.css`: Estilos principales para la versión de escritorio.
    -   `responsive.css`: Estilos para adaptar el sitio a dispositivos móviles.
-   `/js/`: Contiene los archivos de JavaScript.
    -   `site-header.js`: Controla la carga dinámica y el comportamiento de la barra de navegación.
    -   `menu.js`: Lógica para el menú de navegación (posiblemente para el menú móvil).
-   `/assets/`: Imágenes y otros recursos.
-   `/pages/`: Contiene las páginas secundarias del sitio.

## ¿Cómo funciona la barra de navegación?

Para simplificar el mantenimiento, la barra de navegación no se escribe directamente en cada archivo HTML. En su lugar, se utiliza un componente web personalizado.

Para insertar la barra de navegación en cualquier página, simplemente agrega la siguiente etiqueta en el lugar donde quieras que aparezca:

```html
<site-header data-root="RUTA_A_LA_RAIZ"></site-header>
```

### El atributo `data-root`

Este atributo es **muy importante**. Le dice al script dónde se encuentra la raíz del proyecto en relación con el archivo HTML actual. Esto permite que los enlaces (como "Inicio", "Oferta Educativa", etc.) y las imágenes del menú funcionen correctamente sin importar en qué página te encuentres.

**Ejemplos:**

1.  **Para `index.html` (en la raíz del proyecto):**
    El `data-root` debe ser `./`.

    ```html
    <site-header data-root="./"></site-header>
    ```

2.  **Para una página dentro de `/pages/` (ej: `nosotros.html`):**
    El `data-root` debe ser `../`.

    ```html
    <site-header data-root="../"></site-header>
    ```

3.  **Para una página en un subdirectorio (ej: `pages/doctorado/tesis-en-proceso.html`):**
    El `data-root` debe ser `../../`.

    ```html
    <site-header data-root="../../"></site-header>
    ```
