export interface ProductImage {
  url: string;
  alt?: string;
}

export interface ProductVideo {
  url: string;
  alt?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  videos?: ProductVideo[];
  category: ProductCategory;
  tags?: string[];
}
