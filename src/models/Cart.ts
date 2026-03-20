import { Product } from './Product';
import { CartItem } from './CartItem';

export class Cart {
  private items: CartItem[] = [];

  addItem(product: Product) {
    const found = this.items.find(item => item.product.id === product.id);
    if (found) {
      found.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
  }

  removeOne(product: Product) {
    const found = this.items.find(item => item.product.id === product.id);
    if (found) {
      found.quantity--;
      if (found.quantity <= 0) {
        this.removeItem(product);
      }
    }
  }

  removeItem(product: Product) {
    this.items = this.items.filter(item => item.product.id !== product.id);
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotalItems(): number {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }
}
