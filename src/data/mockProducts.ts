import type { Product, Category } from '../types/index.js';

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling headphones with 30-hour battery life and superior sound quality",
    price: 299.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    inStock: true,
    createdAt: "2024-01-15T10:30:00Z"
  },
  {
    id: "2", 
    name: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches and programmable keys",
    price: 159.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a",
    inStock: true,
    createdAt: "2024-01-12T14:20:00Z"
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    description: "Adjustable ergonomic office chair with lumbar support and breathable mesh back",
    price: 399.99,
    category: "furniture",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    inStock: false,
    createdAt: "2024-01-10T09:15:00Z"
  },
  {
    id: "4",
    name: "Stainless Steel Water Bottle",
    description: "Insulated water bottle that keeps drinks cold for 24h or hot for 12h",
    price: 34.99,
    category: "lifestyle",
    imageUrl: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
    inStock: true,
    createdAt: "2024-01-08T16:45:00Z"
  },
  {
    id: "5",
    name: "Yoga Mat Premium",
    description: "Non-slip yoga mat made from eco-friendly materials with alignment lines",
    price: 79.99,
    category: "fitness",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
    inStock: true,
    createdAt: "2024-01-05T11:30:00Z"
  },
  {
    id: "6",
    name: "Smart Watch Series 5",
    description: "Advanced fitness tracker with heart rate monitor and GPS capability",
    price: 249.99,
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    inStock: true,
    createdAt: "2024-01-03T13:22:00Z"
  },
  {
    id: "7",
    name: "Coffee Grinder Manual",
    description: "Hand-crank coffee grinder with adjustable grind settings for perfect brewing",
    price: 89.99,
    category: "kitchen",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    inStock: false,
    createdAt: "2024-01-01T08:00:00Z"
  }
];

export const mockCategories: Category[] = [
  {
    id: "1",
    name: "Electronics",
    description: "Gadgets, devices, and electronic accessories",
    productCount: 12
  },
  {
    id: "2", 
    name: "Furniture",
    description: "Home and office furniture items",
    productCount: 8
  },
  {
    id: "3",
    name: "Lifestyle",
    description: "Everyday items that enhance your lifestyle",
    productCount: 15
  },
  {
    id: "4",
    name: "Fitness",
    description: "Sports and fitness equipment",
    productCount: 6
  },
  {
    id: "5",
    name: "Kitchen",
    description: "Kitchen appliances and cooking tools",
    productCount: 9
  }
];