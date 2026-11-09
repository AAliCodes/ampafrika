export interface Product {
  id: string;
  name: string;
  category: 'energy' | 'meats' | 'compounds' | 'dairy';
  sku: string;
  price: number;
  unit: string;
  wholesaleCost?: number;
  description: string;
  tags: string[];
  specs?: Record<string, string>;
  purity?: string;
  batchNumber?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
