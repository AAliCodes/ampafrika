import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  template: `
    <div class="container page-wrapper">
      <h1>Consolidated Checkout</h1>
      
      @if (cartService.cartItems().length === 0) {
        <div class="empty-box">
          <p>Your umbrella shopping cart is currently empty.</p>
        </div>
      } @else {
        <div class="cart-layout">
          <div class="items-list">
            @for (item of cartService.cartItems(); track item.product.id) {
              <div class="cart-item">
                <div class="item-details">
                  <span class="badge">{{ item.product.category }}</span>
                  <h3>{{ item.product.name }}</h3>
                  <div class="mono text-muted">SKU: {{ item.product.sku }}</div>
                </div>
                <div class="item-price">
                  <div>R{{ (item.product.price * item.quantity).toFixed(2) }}</div>
                  <div class="unit-sub">({{ item.quantity }} x R{{ item.product.price.toFixed(2) }})</div>
                </div>
                <button (click)="cartService.removeFromCart(item.product.id)" class="btn-outline remove-btn">Remove</button>
              </div>
            }
          </div>

          <div class="summary-card">
            <h3>Order Summary</h3>
            <div class="summary-row">
              <span>Total Sub-Business Items:</span>
              <span>{{ cartService.totalItems() }}</span>
            </div>
            <div class="summary-row total-row">
              <span>Total Amount:</span>
              <span class="total-amount">R{{ cartService.totalPrice().toFixed(2) }}</span>
            </div>
            <div class="payment-gateways">
              <span class="mono">Redirecting to PayGate / Paystack Merchant Gateway</span>
            </div>
            <button (click)="processCheckout()" class="btn-primary full-width">Proceed to PayGate Payment</button>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .page-wrapper { padding: 50px 0; h1 { margin-bottom: 30px; } }
    .empty-box { background: #141414; padding: 40px; border-radius: 12px; text-align: center; color: #9aaec2; }
    .cart-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
    .cart-item {
      background: #141414;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item-details h3 { font-size: 1.1rem; margin: 4px 0; }
      .item-price { font-size: 1.2rem; font-weight: 700; color: #00e676; text-align: right; }
      .unit-sub { font-size: 0.75rem; color: #9aaec2; font-weight: 400; }
      .remove-btn { padding: 6px 12px; font-size: 0.8rem; border-color: rgba(255, 0, 0, 0.3); color: #ff5555; }
    }
    .summary-card {
      background: #141414;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 24px;
      height: fit-content;
      h3 { margin-bottom: 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 10px; }
      .summary-row { display: flex; justify-content: space-between; margin-bottom: 12px; color: #9aaec2; }
      .total-row { border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 12px; font-weight: 800; color: #fff; font-size: 1.2rem; }
      .total-amount { color: #00e676; }
      .payment-gateways { font-size: 0.75rem; color: #79a0d1; margin: 20px 0; text-align: center; }
      .full-width { width: 100%; text-align: center; }
    }
  `]
})
export class CartComponent {
  cartService = inject(CartService);

  processCheckout() {
    alert('Simulating PayGate merchant payment redirect for total: R' + this.cartService.totalPrice().toFixed(2));
  }
}
