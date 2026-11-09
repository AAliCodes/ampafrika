import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="navbar">
      <div class="container nav-wrapper">
        <a routerLink="/" class="brand">
          <span class="logo-accent">AMP</span>AFRIKA <span class="sub-tag">GROUP</span>
        </a>
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Umbrella Hub</a>
          <a routerLink="/meats" routerLinkActive="active">Meats</a>
          <a routerLink="/compounds" routerLinkActive="active">Compounds</a>
          <a routerLink="/energy" routerLinkActive="active">Energy Tech</a>
          <a routerLink="/dairy" routerLinkActive="active">Milk Run</a>
        </nav>
        <div class="nav-actions">
          <a routerLink="/cart" class="cart-btn">
            Cart ({{ cartService.totalItems() }}) - R{{ cartService.totalPrice().toFixed(2) }}
          </a>
        </div>
      </div>
    </header>

    <main class="content-area">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; 2026 AmpAfrika Enterprise Group. Consolidated Multi-Sector Platform.</p>
        <p class="mono text-muted">Deployed on Vercel Edge Network | PayGate Verified</p>
      </div>
    </footer>
  `,
  styles: [`
    .navbar {
      background: #0d0d0d;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 16px 0;
    }
    .nav-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      font-size: 1.4rem;
      font-weight: 800;
      color: #fff;
      letter-spacing: -0.5px;
    }
    .logo-accent { color: #00e676; }
    .sub-tag { font-size: 0.75rem; color: #9aaec2; margin-left: 4px; font-weight: 600; }
    .nav-links {
      display: flex;
      gap: 24px;
      a {
        color: #9aaec2;
        font-weight: 600;
        font-size: 0.95rem;
        &.active, &:hover { color: #00e676; }
      }
    }
    .cart-btn {
      background: rgba(0, 230, 118, 0.15);
      border: 1px solid #00e676;
      color: #00e676;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.9rem;
    }
    .content-area { min-height: calc(100vh - 160px); }
    .footer {
      background: #080808;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      padding: 30px 0;
      text-align: center;
      font-size: 0.85rem;
      color: #9aaec2;
    }
  `]
})
export class AppComponent {
  cartService = inject(CartService);
}
