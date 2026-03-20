<template>
  <Card class="p-4 shadow-lg rounded-lg">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-lg">{{ product.name }}</h3>
        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{{ product.category }}</span>
      </div>
    </template>
    <div class="mt-2 mb-4">
      <p class="text-gray-700 font-semibold">Preço: <span class="text-green-600">R$ {{ product.price.toFixed(2) }}</span></p>
    </div>
    <template #footer>
      <Button label="Adicionar ao Carrinho" icon="pi pi-shopping-cart" class="w-full" @click="adicionar" />
    </template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../../models/Product';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineComponent({
  name: 'ProductCard',
  components: { Card, Button },
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
