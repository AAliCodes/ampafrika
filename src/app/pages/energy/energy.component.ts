import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-energy',
  standalone: true,
  template: `
    <div class="container page-wrapper">
      <div class="header-box">
        <span class="badge">Core Tech Division</span>
        <h1>AmpAfrika Energy & Lighting</h1>
        <p>Grid-independent solar infrastructure and high-efficiency commercial LED fixtures.</p>
      </div>

      <div class="product-grid">
        @for (p of energyProducts; track p.id) {
          <div class="product-card">
            <h3>{{ p.name }}</h3>
            <p class="desc">{{ p.description }}</p>
            <div class="price-row">
              <div class="price">R{{ p.price.toFixed(2) }}</div>
              <button (click)="cartService.addToCart(p)" class="btn-primary">Select Item</button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper { padding: 50px 0; }
    .header-box { margin-bottom: 40px; h1 { font-size: 2.4rem; margin: 10px 0; } p { color: #9aaec2; } }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
    .product-card {
      background: #141414;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 24px;
      h3 { font-size: 1.3rem; margin-bottom: 8px; }
      .desc { color: #9aaec2; font-size: 0.9rem; margin-bottom: 20px; }
      .price-row { display: flex; justify-content: space-between; align-items: center; }
      .price { font-size: 1.4rem; font-weight: 800; color: #00e676; }
    }
  `]
})
export class EnergyComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
  energyProducts = this.productService.getProductsByCategory('energy');
}
