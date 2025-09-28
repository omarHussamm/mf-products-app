import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockCategories } from '../data/mockProducts.js'
import type { Category } from '../types/index.js'

export const Categories = () => {
  const [categories] = useState<Category[]>(mockCategories)
  const [newCategory, setNewCategory] = useState({ name: '', description: '' })
  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCategory.name || !newCategory.description) {
      alert('Please fill in all fields')
      return
    }
    
    // Here you would normally save to your backend
    console.log('Adding category:', newCategory)
    alert('Category added successfully!')
    
    setNewCategory({ name: '', description: '' })
    setShowAddForm(false)
  }

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Categories</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/list" className="btn btn-outline">
            ← Back to Products
          </Link>
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="btn"
          >
            {showAddForm ? '✖️ Cancel' : '➕ Add Category'}
          </button>
        </div>
      </div>

      {showAddForm && (
        <div className="card">
          <h3 style={{ marginBottom: '15px' }}>Add New Category</h3>
          <form onSubmit={handleAddCategory}>
            <div style={{ display: 'grid', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Category Name
                </label>
                <input
                  type="text"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter category name"
                  required
                  style={{ width: '100%' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Description
                </label>
                <textarea
                  value={newCategory.description}
                  onChange={(e) => setNewCategory(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Enter category description"
                  rows={3}
                  required
                  style={{ width: '100%', resize: 'vertical' }}
                />
              </div>
              
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" className="btn">
                  Add Category
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowAddForm(false)}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="product-grid">
        {categories.map(category => (
          <div key={category.id} className="card">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ 
                fontSize: '48px', 
                marginBottom: '15px'
              }}>
                {getCategoryIcon(category.name)}
              </div>
              
              <h3 style={{ 
                fontSize: '20px', 
                marginBottom: '10px',
                textTransform: 'capitalize' 
              }}>
                {category.name}
              </h3>
              
              <p style={{ 
                color: '#666', 
                fontSize: '14px',
                lineHeight: '1.4',
                marginBottom: '15px'
              }}>
                {category.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span className="badge badge-primary">
                  {category.productCount} Products
                </span>
                <Link 
                  to={`/list?category=${category.name.toLowerCase()}`}
                  className="btn btn-outline"
                >
                  View Products
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {categories.length === 0 && (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <h3>No Categories Found</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>
            Start by adding your first category to organize products.
          </p>
          <button 
            onClick={() => setShowAddForm(true)}
            className="btn"
          >
            Add First Category
          </button>
        </div>
      )}
    </div>
  )
}

// Helper function to get category icons
const getCategoryIcon = (categoryName: string): string => {
  const icons: Record<string, string> = {
    electronics: '💻',
    furniture: '🪑',
    lifestyle: '🌟',
    fitness: '🏋️',
    kitchen: '🍳',
  }
  
  return icons[categoryName.toLowerCase()] || '📦'
}
