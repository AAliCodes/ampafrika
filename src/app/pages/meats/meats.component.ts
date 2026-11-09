import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-meats',
  standalone: true,
  template: `
    <div class="container page-wrapper">
      <div class="header-box">
        <span class="badge">AmpAfrika Sub-Business</span>
        <h1>AmpAfrika Meats</h1>
        <p>Ethical, grass-fed beef & free-range Karoo lamb. Priced with transparent wholesale cost benchmarks.</p>
      </div>

      <div class="product-grid">
        @for (p of meatProducts; track p.id) {
          <div class="product-card">
            <div class="tags">
              @for (tag of p.tags; track tag) { <span class="tag">{{ tag }}</span> }
            </div>
            <h3>{{ p.name }}</h3>
            <p class="desc">{{ p.description }}</p>
            <div class="pricing-box">
              <div class="retail-price">R{{ p.price.toFixed(2) }} <span class="unit">/ {{ p.unit }}</span></div>
              @if (p.wholesaleCost) {
                <div class="wholesale-note mono">Wholesale Base: R{{ p.wholesaleCost.toFixed(2) }}</div>
              }
            </div>
            <button (click)="cartService.addToCart(p)" class="btn-primary full-width">Add to Order</button>
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
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tags { display: flex; gap: 8px; margin-bottom: 12px; }
      .tag { background: rgba(255, 255, 255, 0.05); color: #9aaec2; padding: 2px 8px; border-radius: 4px; font-size: 0.75rem; }
      h3 { font-size: 1.3rem; margin-bottom: 8px; }
      .desc { color: #9aaec2; font-size: 0.9rem; margin-bottom: 16px; flex-grow: 1; }
      .pricing-box { margin-bottom: 16px; border-top: 1px dashed rgba(255, 255, 255, 0.1); padding-top: 12px; }
      .retail-price { font-size: 1.5rem; font-weight: 800; color: #00e676; }
      .unit { font-size: 0.85rem; color: #9aaec2; font-weight: 400; }
      .wholesale-note { font-size: 0.75rem; color: #79a0d1; margin-top: 4px; }
      .full-width { width: 100%; text-align: center; }
    }
  `]
})
export class MeatsComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
  meatProducts = this.productService.getProductsByCategory('meats');
}
