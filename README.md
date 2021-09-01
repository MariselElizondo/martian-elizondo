# martian-elizondo
Proyecto: Martian
Alumna: Casandra Marisel Elizondo

Para este proyecto decidí hacer uso de Componentes de react bootstrap facilitando cuestiones  estéticas y responsive, además de lograr una mejor visualización del código por medio de dichos componentes; no añadí otras librerias externas siguiendo la directriz del curso de reducir las dependencias usadas que son fácilmente reemplazables.

Me enfoqué en realizar un Ecommerce el cual llamé Martian que vende productos comestibles de almacen, verdulería, panadería y carnicería. Desarrollé una barra de navegación la cual tiene el nombre del negocio y las secciones en las que puede navegar.
La sección principal a la cual abre inicialmente es la que tiene todos los productos. Al obtener datos de firebase la carga se evidencia con el uso de un spinner. Se puede navegar entre secciones filtrando el contenido según corresponda (por la categoría). Al presionar sobre la card de un artículo se puede ver el detalle de éste junto con la opción de añadir la cantidad que se desee al changuito. Al realizar esto, aparece, al final de la barra de navegación, el boton del carro junto con el número de unidades dentro. Al presionar en él, podemos ver el detalle de productos añadidos, con su precio por elemento, y el total, teniendo la posibilidad de eliminar líneas completas. (Si se eliminan todos los productos da la opción de volver al inicio) Para comprar, el usuario debe ingresar sus datos y en ese momento se mostrará el boton para realizar la compra que al presionarlo, mostrará el código de compra.
Además, todas las pantallas que muestran productos tienen en la parte superior un sector donde se muestra en que parte de la navegación de la página se encuentran.
También, agregué una sección de contacto con 2 redes sociales, y un "contactate con nosotros" que lleva a un pequeño formulario que simula la gestión de consultas o quejas. Seguido a esto un footer dividido en 3 secciónes, una que tiene algunas de las marcas de los productos en venta, una del logo y la última como algunos datos útiles.
Además, hice uso de svg e imágenes

En el video puede verse el flujo de navegación.

Muchas gracias.

*Recordar hacer **npm install** antes del **npm start***
