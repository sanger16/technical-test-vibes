
## Endpoints

```
GET /api/products?search=&sort=price|name&order=asc|desc&page=1&limit=10&available=true|false
```

- Cuando existe texto de busqueda en el parámetro search se filtra tanto en el nombre del producto como en la categoría, esto permite una busqueda más general que permite al usuario obtener mejores resultados cuando no tiene muy claro el nombre que va a buscar.
