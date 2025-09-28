import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockProducts } from '../data/mockProducts.js'
import type { Product } from '../types/index.js'

export const ProductList = () => {
  const [products] = useState<Product[]>(mockProducts)
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Products</h1>
        <Link to="/create" className="btn">
          ➕ Add New Product
        </Link>
      </div>

      <div className="card">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ 
            width: '100%', 
            marginBottom: '20px',
            padding: '12px',
            fontSize: '16px'
          }}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="product-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`
              }}
            />
            <div className="product-title">{product.name}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-description">{product.description}</div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={`badge ${product.inStock ? 'badge-success' : 'badge-danger'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              <Link to={`/detail/${product.id}`} className="btn btn-outline">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <h3>No products found</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Try adjusting your search terms or add a new product.
          </p>
          <Link to="/create" className="btn">
            Add First Product
          </Link>
        </div>
      )}
    </div>
  )
}
