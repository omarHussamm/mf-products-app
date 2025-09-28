import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockProducts } from '../data/mockProducts.js'
import type { Product } from '../types/index.js'

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const foundProduct = mockProducts.find(p => p.id === id)
      setProduct(foundProduct || null)
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div>Loading product...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Product Not Found</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          The product you're looking for doesn't exist.
        </p>
        <Link to="/list" className="btn">
          ← Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-outline"
            style={{ marginRight: '15px' }}
          >
            ← Back
          </button>
          <Link to="/list" className="btn btn-outline">
            All Products
          </Link>
        </div>
        <Link to={`/edit/${product.id}`} className="btn">
          ✏️ Edit Product
        </Link>
      </div>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div>
            <img 
              src={product.imageUrl} 
              alt={product.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}`
              }}
            />
          </div>
          
          <div>
            <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>{product.name}</h1>
            
            <div style={{ marginBottom: '20px' }}>
              <span className={`badge ${product.inStock ? 'badge-success' : 'badge-danger'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
              <span className="badge badge-outline" style={{ marginLeft: '10px' }}>
                {product.category}
              </span>
            </div>

            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#007bff', marginBottom: '20px' }}>
              ${product.price}
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ marginBottom: '10px' }}>Description</h3>
              <p style={{ lineHeight: '1.6', color: '#555' }}>
                {product.description}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {product.inStock ? (
                <button className="btn" style={{ flex: 1 }}>
                  🛒 Add to Cart
                </button>
              ) : (
                <button className="btn" style={{ flex: 1, opacity: 0.6 }} disabled>
                  Out of Stock
                </button>
              )}
              <button className="btn btn-outline">
                ❤️ Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: '15px' }}>Product Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div>
            <strong>Product ID:</strong> {product.id}
          </div>
          <div>
            <strong>Category:</strong> {product.category}
          </div>
          <div>
            <strong>Added:</strong> {new Date(product.createdAt).toLocaleDateString()}
          </div>
          <div>
            <strong>Status:</strong> {product.inStock ? 'Available' : 'Out of Stock'}
          </div>
        </div>
      </div>
    </div>
  )
}
