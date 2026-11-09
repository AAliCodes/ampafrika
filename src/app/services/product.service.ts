import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = signal<Product[]>([
    {
      id: 'm1',
      name: 'Grass-Fed Ground Beef (Mince)',
      category: 'meats',
      sku: 'MEAT-BF-MNC-01',
      price: 135.00,
      wholesaleCost: 85.00,
      unit: '1 kg pack',
      description: '100% grass-fed lean beef mince. Free of brine or routine antibiotics.',
      tags: ['Halaal', 'Grass-Fed', 'Pureveld Standard']
    },
    {
      id: 'm2',
      name: 'Free-Range Karoo Lamb Chops',
      category: 'meats',
      sku: 'MEAT-LM-CHP-02',
      price: 185.00,
      wholesaleCost: 120.00,
      unit: '1 kg pack',
      description: 'Ethically raised Karoo lamb chops, ideal for braai or oven roasting.',
      tags: ['Halaal', 'Free-Range', 'Karoo']
    },
    {
      id: 'm3',
      name: 'Traditional Beef Biltong Strips',
      category: 'meats',
      sku: 'MEAT-SNK-BLT-03',
      price: 320.00,
      wholesaleCost: 210.00,
      unit: '1 kg bulk',
      description: 'Artisanal cured beef biltong seasoned with coriander and sea salt.',
      tags: ['Snack', 'High-Protein']
    },
    {
      id: 'c1',
      name: 'BPC-157 Clinical Peptide (5mg)',
      category: 'compounds',
      sku: 'CMP-BPC-5MG',
      price: 650.00,
      unit: 'Vial',
      description: 'High-purity research peptide with independent HPLC & Mass Spec validation.',
      tags: ['cGMP Manufactured', 'Purity >99%'],
      purity: '99.6%',
      batchNumber: 'BPC-2026-04'
    },
    {
      id: 'c2',
      name: 'TB-500 Thymosin Beta-4 (10mg)',
      category: 'compounds',
      sku: 'CMP-TB4-10MG',
      price: 980.00,
      unit: 'Vial',
      description: 'ISO 9001 cleanroom batch verified research peptide.',
      tags: ['ISO 9001', 'Purity >99%'],
      purity: '99.4%',
      batchNumber: 'TB-2026-02'
    },
    {
      id: 'e1',
      name: 'Grid-Independent Solar Street Light (100W)',
      category: 'energy',
      sku: 'ENG-SOL-STR-100',
      price: 1450.00,
      unit: 'Unit',
      description: 'Wide coverage 100% solar outdoor street lighting with intelligent battery management.',
      tags: ['100% Renewable', 'Zero Grid']
    },
    {
      id: 'e2',
      name: 'GU10 LED Energy-Saving Globe (Warm White)',
      category: 'energy',
      sku: 'ENG-ELE-GU10-WW',
      price: 45.00,
      unit: 'Unit',
      description: 'Twist-and-lock 10mm bi-pin LED globe for commercial downlight fixtures.',
      tags: ['Energy-Efficient', 'GU10 Base']
    },
    {
      id: 'd1',
      name: 'Bulk Fresh Whipping Cream (38% Fat)',
      category: 'dairy',
      sku: 'DRY-CRM-5L',
      price: 320.00,
      wholesaleCost: 240.00,
      unit: '5L PP Bucket',
      description: 'Pasteurized 38% milkfat fresh whipping cream for bakeries and kitchens.',
      tags: ['B2B Bulk', 'Cold-Chain Delivery']
    },
    {
      id: 'd2',
      name: 'Traditional Cultured Amasi / Maas',
      category: 'dairy',
      sku: 'DRY-AMS-2L',
      price: 32.00,
      unit: '2L HDPE Bottle',
      description: 'Probiotic-rich cultured whole milk produced via mass-balance valorisation.',
      tags: ['Probiotic', 'Fresh Dairy']
    }
  ]);

  getProducts() {
    return this.products();
  }

  getProductsByCategory(category: string) {
    return this.products().filter(p => p.category === category);
  }
}
