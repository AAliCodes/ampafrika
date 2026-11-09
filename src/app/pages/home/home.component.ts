import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container">
        <span class="badge">Enterprise Integration Architecture</span>
        <h1>Powering Africa's Next Business Ecosystem</h1>
        <p class="hero-sub">
          AmpAfrika consolidates clean energy technology, ethical livestock distribution, clinical peptide storefronts, and micro-dairy supply chains under one unified web platform.
        </p>
        <div class="cta-group">
          <a routerLink="/meats" class="btn-primary">Explore AmpAfrika Meats</a>
          <a routerLink="/compounds" class="btn-outline">View Clinical Compounds</a>
        </div>
      </div>
    </section>

    <section class="sectors container">
      <h2>Consolidated Sub-Businesses</h2>
      <div class="grid">
        <div class="card">
          <span class="badge">Protein Distribution</span>
          <h3>AmpAfrika Meats</h3>
          <p>Halaal certified grass-fed beef, free-range Karoo lamb, and artisanal biltong modeled on Mikaeel wholesale costs and Pureveld retail benchmarks.</p>
          <a routerLink="/meats" class="card-link">Access Meat Catalog &rarr;</a>
        </div>

        <div class="card">
          <span class="badge">Specialty E-Commerce</span>
          <h3>Clinical Compounds</h3>
          <p>High-purity research peptides featuring batch lot verification, downloadable HPLC/Mass Spec analytical reports, and PayGate routing.</p>
          <a routerLink="/compounds" class="card-link">Access Peptide Store &rarr;</a>
        </div>

        <div class="card">
          <span class="badge">Smart Infrastructure</span>
          <h3>AmpAfrika Energy</h3>
          <p>Modular renewable systems, grid-independent solar outdoor street lighting, and commercial GU10 LED energy-saving fixtures.</p>
          <a routerLink="/energy" class="card-link">View Solar & Tech &rarr;</a>
        </div>

        <div class="card">
          <span class="badge">Agri-Food Logistics</span>
          <h3>The Milk Run</h3>
          <p>Micro-dairy bulk fresh cream distribution (38% milkfat) and probiotic Amasi powered by whole-milk mass balance economics.</p>
          <a routerLink="/dairy" class="card-link">Order Bulk Dairy &rarr;</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 80px 0;
      text-align: center;
      background: radial-gradient(circle at center, rgba(0, 230, 118, 0.08) 0%, transparent 70%);
      h1 { font-size: 3rem; font-weight: 800; margin: 16px 0; }
      .hero-sub { max-width: 700px; margin: 0 auto 30px; color: #9aaec2; font-size: 1.15rem; }
      .cta-group { display: flex; gap: 16px; justify-content: center; }
    }
    .sectors { padding: 60px 0; h2 { margin-bottom: 30px; } }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
    .card {
      background: #141414;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s, border-color 0.2s;
      &:hover { transform: translateY(-4px); border-color: #00e676; }
      h3 { font-size: 1.4rem; margin: 12px 0 8px; }
      p { color: #9aaec2; font-size: 0.95rem; margin-bottom: 20px; }
      .card-link { font-weight: 700; color: #00e676; }
    }
  `]
})
export class HomeComponent {}
