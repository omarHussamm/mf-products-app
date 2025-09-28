import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout.js'
import { ProductList } from './pages/ProductList.js'
import { ProductDetail } from './pages/ProductDetail.js'
import { CreateProduct } from './pages/CreateProduct.js'
import { Categories } from './pages/Categories.js'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/list" replace />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={
            <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
              <h2>Page Not Found</h2>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                The page you're looking for doesn't exist.
              </p>
              <Navigate to="/list" replace />
            </div>
          } />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
