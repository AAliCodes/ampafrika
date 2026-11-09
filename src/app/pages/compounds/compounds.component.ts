import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-compounds',
  standalone: true,
  template: `
    <div class="container page-wrapper">
      <div class="header-box">
        <span class="badge">Migrated Sub-Business</span>
        <h1>Compounds Clinical Storefront</h1>
        <p>Medical-precision research peptides with independent batch lot validation and HPLC verification.</p>
      </div>

      <div class="purity-banner">
        <h3>Independent Testing Guarantee</h3>
        <p>Every lot is batch-linked to downloadable raw HPLC & Mass Spec certificates. Purity guaranteed >98%.</p>
      </div>

      <div class="product-grid">
        @for (p of compoundProducts; track p.id) {
          <div class="product-card">
            <div class="batch-info mono">
              <span>LOT: {{ p.batchNumber }}</span> | <span class="purity-highlight">PURITY: {{ p.purity }}</span>
            </div>
            <h3>{{ p.name }}</h3>
            <p class="desc">{{ p.description }}</p>
            <div class="price-row">
              <div class="price">R{{ p.price.toFixed(2) }} <span class="unit">/ {{ p.unit }}</span></div>
              <button (click)="cartService.addToCart(p)" class="btn-primary">Add Vial</button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .page-wrapper { padding: 50px 0; }
    .header-box { margin-bottom: 30px; h1 { font-size: 2.4rem; margin: 10px 0; } p { color: #9aaec2; } }
    .purity-banner {
      background: rgba(5, 150, 105, 0.1);
      border: 1px solid #059669;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 30px;
      h3 { color: #059669; font-size: 1.1rem; margin-bottom: 4px; }
      p { color: #d1ecff; font-size: 0.9rem; }
    }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
    .product-card {
      background: #0a192f;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 24px;
      .batch-info { font-size: 0.75rem; color: #9aaec2; margin-bottom: 12px; }
      .purity-highlight { color: #059669; font-weight: 700; }
      h3 { font-size: 1.3rem; margin-bottom: 8px; color: #fff; }
      .desc { color: #9aaec2; font-size: 0.9rem; margin-bottom: 20px; }
      .price-row { display: flex; justify-content: space-between; align-items: center; }
      .price { font-size: 1.4rem; font-weight: 800; color: #00e676; }
      .unit { font-size: 0.8rem; color: #9aaec2; font-weight: 400; }
    }
  `]
})
export class CompoundsComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
  compoundProducts = this.productService.getProductsByCategory('compounds');
}
