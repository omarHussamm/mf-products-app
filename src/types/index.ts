export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
}

export interface AppProps {
  user?: User | null;
  basePath?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  productCount: number;
}