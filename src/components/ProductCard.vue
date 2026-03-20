<template>
  <div style="border: 1px solid #ccc; padding: 10px; margin: 10px; border-radius: 8px;">
    <h3>{{ product.name }}</h3>
    <p>Categoria: {{ product.category }}</p>
    <p>Preço: R$ {{ product.price.toFixed(2) }}</p>
    <button @click="adicionar">Adicionar ao Carrinho</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../models/Product';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  emits: ['add-to-cart'],
  methods: {
    adicionar() {
      this.$emit('add-to-cart', this.product);
    }
  }
});
</script>
