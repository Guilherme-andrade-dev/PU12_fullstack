<template>
  <div id="app" class="font-sans p-6 bg-gray-50 min-h-screen">
    <h1 class="text-2xl font-bold mb-6">Loja de Informática</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
      <ProductCard 
        v-for="prod in products" 
        :key="prod.id" 
        :product="prod" 
        @add-to-cart="addToCart"
      />
    </div>
    <section class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4 flex items-center gap-2"><i class="pi pi-shopping-cart text-blue-600"></i>Resumo do Carrinho</h2>
      <p class="mb-2">Total de itens: <strong>{{ totalItems }}</strong></p>
      <p class="mb-4">Preço Final: <strong>R$ {{ totalPrice.toFixed(2) }}</strong></p>
      <ListBox v-if="cartItems.length" :options="cartItems" optionLabel="product.name" class="w-full mb-4">
        <template #option="slotProps">
          <div class="flex items-center justify-between w-full">
            <div>
              <span class="font-medium">{{ slotProps.option.product.name }}</span>
              <span class="ml-2 text-gray-500">x </span>
              <InputNumber v-model="slotProps.option.quantity" :min="1" :max="99" showButtons buttonLayout="horizontal" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" class="w-20 mr-2" @input="onQuantityChange(slotProps.option)" />
              <span class="ml-2 text-green-600 font-semibold">R$ {{ (slotProps.option.product.price * slotProps.option.quantity).toFixed(2) }}</span>
            </div>
            <div class="flex gap-2">
              <Button icon="pi pi-trash" class="p-button-sm p-button-danger p-button-text" @click="removeItem(slotProps.option.product)" />
            </div>
          import InputNumber from 'primevue/inputnumber';
          </div>
        </template>
      </ListBox>
      <Card v-else class="bg-gray-100 text-center p-4">
        <template #content>
          <span class="text-gray-500">Seu carrinho está vazio.</span>
        </template>
      </Card>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '../ProductCard.vue';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';
import ListBox from 'primevue/listbox';
import Button from 'primevue/button';
import Card from 'primevue/card';

export default defineComponent({
  components: { ProductCard, ListBox, Button, Card, InputNumber },
    methods: {
      addToCart(product: Product) {
        this.cart.addItem(product);
      },
      removeOne(product: Product) {
        this.cart.removeOne(product);
      },
      removeItem(product: Product) {
        this.cart.removeItem(product);
      },
      onQuantityChange(item: any) {
        if (item.quantity < 1) {
          this.cart.removeItem(item.product);
        }
      }
    }
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