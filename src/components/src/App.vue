<template>
  <div id="app" style="font-family: sans-serif; padding: 20px;">
    <h1>Loja de Informática</h1>
    <div style="display: flex; flex-wrap: wrap;">
      <ProductCard 
        v-for="prod in products" 
        :key="prod.id" 
        :product="prod" 
        @add-to-cart="addToCart"
      />
    </div>
    <hr />
    <section>
      <h2>🛒 Resumo do Carrinho</h2>
      <p>Total de itens: <strong>{{ totalItems }}</strong></p>
      <p>Preço Final: <strong>R$ {{ totalPrice.toFixed(2) }}</strong></p>
      <ul>
        <li v-for="item in cartItems" :key="item.product.id">
          {{ item.product.name }} x {{ item.quantity }}
          <button @click="removeOne(item.product)">-1</button>
          <button @click="removeItem(item.product)">Remover</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '../ProductCard.vue';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';

export default defineComponent({
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Teclado Mecânico', price: 250.00, category: 'Periféricos' },
        { id: 2, name: 'Mouse Gamer', price: 120.50, category: 'Periféricos' },
        { id: 3, name: 'Monitor 24 Polegadas', price: 850.00, category: 'Hardware' }
      ] as Product[],
      cart: new Cart()
    };
  },
  computed: {
    cartItems(): any[] {
      return this.cart.getItems();
    },
    totalItems(): number {
      return this.cart.getTotalItems();
    },
    totalPrice(): number {
      return this.cart.getTotalPrice();
    }
  },
  methods: {
    addToCart(product: Product) {
      this.cart.addItem(product);
    },
    removeOne(product: Product) {
      this.cart.removeOne(product);
    },
    removeItem(product: Product) {
      this.cart.removeItem(product);
    }
  }
});
</script>
