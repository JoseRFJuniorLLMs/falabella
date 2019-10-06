# Problema:
Bender es fanático de las cervezas y quiere tener un registro de todas las cervezas que prueba y como calcular el precio 
que necesita para comprar una caja de algún tipo especifico de cervezas. Para esto necesita una API REST con esta información
que posteriormente compartirá con sus amigos.

Descripción:
Se solicita crear un API REST basándonos en la definición que se encuentra en el archivo openapi.yaml.

Funcionalidad:
GET /Beers: Lista todas las cervezas que se encuentran en el sistema.
POST /Beers: Permite ingresar una nueva cerveza.
GET /beers/{beerID}: Lista un detalle de una cerveza especifica.
GET /beets/{beerID}/boxprice: Entrega el valor que cuesta una caja específica de cerveza dependiendo de los parámetros ingresados,
 esto quiere decir que multiplique el precio por la cantidad una vez se homologara la moneda a lo que se ingreso por parámetro.
Quantity: Cantidad de cervezas a comprar (valor por defecto 6).
Currency: Tipo de moneda con la que desea pagar, para este caso se recomienda que utilice esta API https://currencylayer.com/

Requisitos:
Puede usar alguno de los siguientes lenguajes Java, NodeJS, Go o Python. Aunque valoramos el uso de GO.
Usar Docker y Docker Compose para los diferentes servicios.
Se puede usar librarías externas y frameworks
Requisito un 70% de cobertura de código
Completa libertad para agregar nuevas funcionalidades.

Entrega:
Enviar el link del repositorio donde se realiza este ejercicio.

# Solución:
![](./vai.png)
# PROYECTO 0 - FrontEnd - Angular8
![](./t1.png)
![](./t2.png)
![](./t2.png)
# PROYECTO 1 - Java-REST-MongoDB-WebFlux
![](./flux.png)
Spring Boot 
Spring WebFlux utiliza internamente Project Reactor y sus implementaciones de editor: Flux y Mono.
El nuevo marco admite dos modelos de programación: Componentes reactivos basados en anotaciones
Enrutamiento y manejo funcional MongoDB






