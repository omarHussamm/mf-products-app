import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { mockCategories } from '../data/mockProducts.js'

export const CreateProduct = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    inStock: true
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.description || !formData.price || !formData.category) {
      alert('Please fill in all required fields')
      return
    }

    // Here you would normally save to your backend
    console.log('Creating product:', formData)
    
    // Show success message and redirect
    alert('Product created successfully!')
    navigate('/list')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Add New Product</h1>
        <Link to="/list" className="btn btn-outline">
          ← Back to Products
        </Link>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
                style={{ width: '100%' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                required
                rows={4}
                style={{ width: '100%', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Price *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  required
                  style={{ width: '100%' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  style={{ width: '100%' }}
                >
                  <option value="">Select a category</option>
                  {mockCategories.map(category => (
                    <option key={category.id} value={category.name.toLowerCase()}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Image URL (Optional)
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                style={{ width: '100%' }}
              />
              {formData.imageUrl && (
                <div style={{ marginTop: '10px' }}>
                  <img 
                    src={formData.imageUrl} 
                    alt="Preview"
                    style={{ 
                      width: '200px', 
                      height: '150px', 
                      objectFit: 'cover', 
                      borderRadius: '4px' 
                    }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>
              )}
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                />
                <span style={{ fontWeight: '500' }}>Product is in stock</span>
              </label>
            </div>

            <div style={{ display: 'flex', gap: '10px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
              <button type="submit" className="btn" style={{ flex: 1 }}>
                ➕ Create Product
              </button>
              <Link to="/list" className="btn btn-outline" style={{ flex: 1, textAlign: 'center' }}>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="card" style={{ backgroundColor: '#f8f9fa' }}>
        <h4 style={{ marginBottom: '10px' }}>💡 Tips</h4>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>Use a descriptive product name that customers will search for</li>
          <li>Include key features and benefits in the description</li>
          <li>Add high-quality images to increase conversions</li>
          <li>Select the most appropriate category for better organization</li>
        </ul>
      </div>
    </div>
  )
}
