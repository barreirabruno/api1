## Caso de uso

1. ✅ Recebe uma requisição do tipo **GET** na rota **/api/meter-price**
2. ✅ Busca o preço do metro quadrado dentro do mongo db
3. ✅ Retorna **200** com local, preço do metro quadrado e id

## Exceções

1. ✅ Retorna **500** se de erro ao buscar o preço do metro quadrado no banco de dados