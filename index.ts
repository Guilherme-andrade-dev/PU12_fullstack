interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

type UserRole = "ADMIN" | "CUSTOMER";

interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}

interface CartItem {
  product: Product;
  quantity: number;
}

class Cart {
  private items: CartItem[] = [];

  public addItem(product: Product, quantity: number): void {
    let found = false;

    for (let item of this.items) {
      if (item.product.id === product.id) {
        item.quantity += quantity;
        found = true;
        break;
      }
    }

    if (!found) {
      this.items.push({ product, quantity });
    }
  }

  public getTotalItems(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.quantity;
    }
    return total;
  }

  public getFinalPrice(): number {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += item.product.price * item.quantity;
    }
    return totalPrice;
  }

  public getItems(): CartItem[] {
    return this.items;
  }
}

const techCategory: Category = { id: 1, name: "Tecnologia" };

const mouse: Product = { 
  id: 10, 
  name: "Mouse Sem Fio", 
  price: 80.00, 
  category: techCategory 
};

const keyboard: Product = { 
  id: 11, 
  name: "Teclado Mecânico", 
  price: 250.00, 
  category: techCategory 
};

const myCart = new Cart();

myCart.addItem(mouse, 1);
myCart.addItem(mouse, 2);
myCart.addItem(keyboard, 1);

console.log("--- Resumo do Carrinho ---");
console.log("Total de Itens (Unidades):", myCart.getTotalItems());
console.log("Preço Final: R$", myCart.getFinalPrice());

const adminUser: User = {
  id: 1,
  username: "admin_master",
  email: "admin@loja.com",
  role: "ADMIN"
};

console.log("\nUsuário logado:", adminUser.username, "| Role:", adminUser.role);