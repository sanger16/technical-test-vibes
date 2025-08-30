## Instrucciones

---

Para ejecutar la aplicación en producción es posible hacer uso del script start-api.sh para el backend y el script start-web pata el frontend

```
chmod +x ./start-api.sh

./start-api.sh
```

```
chmod +x /start-web.sh

./start-web.sh
```

La aplicación web cuenta con una página que lista los productos en /products, desde allí es posible aplicar los filtros de ordenamiento por nombre o precio y en orden ascedente y descendente, tambi[en es posible filtrar por producto disponible o buscar un procuto específico. Al final de esta página se implementó un componente que muestra los productos en oportunidad los cuales tienen el precio m[as bajo y en orden descendente, para esto se usó la función getTopCheapestAvailable en el backend.

El enpoint /api/products es quien responde a las solicitudes de productos con filtros, en caso de no recibirse ningún filtro se toma por defecto un limite de 10 productos, este endpoint además retorna un objeto paginación que permite manejar la paginación en la web. A continuación los campos que se entregan en este objeto.

```
{
  totalProducts: number; // Indica la cantidad total de productos que genera la consulta
  totalPages: number; // Indica el número total de páginas para el límite dado
  currentPage: number; // Indica la página actual que fue consultada, este es igual al valor recibigo en el qury param
  limit: number; // Cantidad de productos solicitados
  next: number | null; // Pagina siguiente, es null cuando es la útima página
  prev: number | null;// Número de página anterior, es null cuando es la primera página
}
```

En el caso del endpoint /api/products/:id responde a la solicitud retornando un solo producto para ser mostrado en la página de detalles.

## Endpoints

---

```
GET /api/products?search=&sort=price|name&order=asc|desc&page=1&limit=10&available=true|false
```

- Cuando existe texto de busqueda en el parámetro search se filtra tanto en el nombre del producto como en la categoría, esto permite una busqueda más general que permite al usuario obtener mejores resultados cuando no tiene muy claro el nombre que va a buscar.

## Pendientes

---

* Implementar conexión con base de datos para datos persistentes.
* Crear un archivo Make que permita ejecutar ambas aplicaciones al mismo tiempo para produción.
