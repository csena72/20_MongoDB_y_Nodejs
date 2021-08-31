# Desafío: MongoDB y Node.js

### Consigna:  
1. Sobre el desafío entregable de la clase número 17, almacenar los mensajes en una base de datos MongoDB llamada ‘ecommerce’ dentro de una colección ‘mensajes’.

2. Cambiar la capa de persistencia de la Api Rest de productos 
por un servicio de base de datos MongoDB.

3. La base de datos a utilizar será ‘ecommerce’, colección ‘productos’.

## Notas
- Utilizar la dependencia Mongoose para interactuar con la base de datos


## Ejemplo para consumir el EP que crea un producto:

```
curl --location --request POST 'localhost:9000/api/productos' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Melón",
  "price": 390,
  "thumbnail": "melon.jpg"
}
'
```

## Ejemplo para consumir el EP que lista un producto por id:

```
curl --location --request GET 'localhost:9000/api/productos/612e65dbe324e44454f5debc'
```

## Ejemplo para consumir el EP que lista todos los productos:

```
curl --location --request GET 'localhost:9000/api/productos'
```


## Ejemplo para consumir el EP que actualiza un producto:

```
curl --location --request PATCH 'localhost:9000/api/productos/612e65dbe324e44454f5debc' \
--header 'Content-Type: application/json' \
--data-raw '[
    {
        "title": "manzana",
        "price": "222",
        "thumbnail": "manzana.jpg"        
    }
]'
```

## Ejemplo para consumir el EP que borra un producto:

```
curl --location --request DELETE 'localhost:9000/api/productos/612e646b877c24b89dbd6e5c'
```

## Ejemplo para consumir el EP que crea un mensaje:

```
curl --location --request POST 'localhost:9000/api/mensajes' \
--header 'Content-Type: application/json' \
--data-raw '{
  "mensaje": "jajajaj",
  "hora": "",
  "email": "juan@example.com"
}'
```

## Ejemplo para consumir el EP que lista todos los mensajes:

```
curl --location --request GET 'localhost:9000/api/mensajes'
```

