# E-commerce Vue.js & TypeScript
  
  
- Listagem de produtos
- Código totalmente tipado em TypeScript
- Componentização (ProductCard)
- Lógica de negócio separada na model Cart

## Estrutura de Pastas
```
src/
  components/
    ProductCard.vue
    src/
      App.vue
  models/
    Product.ts
    Category.ts
    CartItem.ts
    Cart.ts
```

## Como rodar o projeto
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```sh
   npm run serve
   ```
3. Acesse no navegador: http://localhost:8080

## Observações
- O projeto utiliza Vue 3 + TypeScript.
- Toda a lógica do carrinho está encapsulada na classe `Cart`.
- O componente `ProductCard` é reutilizável e recebe o produto via prop.

---

Atividade prática para entrega no Google Sala de Aula.

---

Se tiver dúvidas, consulte o professor ou abra uma issue!
