# E-commerce Vue.js & TypeScript

Este projeto é uma atividade prática de e-commerce utilizando Vue 3, TypeScript e Options API, com componentização e lógica de carrinho separada em uma classe Cart.

## Funcionalidades
- Listagem de produtos
- Adição de produtos ao carrinho
- Remoção de unidades ou itens inteiros do carrinho
- Resumo dinâmico do carrinho (total de itens e valor)
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
