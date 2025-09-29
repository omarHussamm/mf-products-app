import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext.js'
import { AppLayout } from './components/layout/AppLayout.js'
import { ProductList } from './pages/ProductList.js'
import { ProductDetail } from './pages/ProductDetail.js'
import { CreateProduct } from './pages/CreateProduct.js'
import { Categories } from './pages/Categories.js'

// Flag to determine if app runs standalone or as a federated remote
// Default to false (federation mode), only standalone when explicitly set to 'true'
const STANDALONE = import.meta.env.VITE_STANDALONE === 'true'

// Import User type from context
import type { User } from './contexts/AppContext.js'

interface AppProps {
  basePath?: string;
  user?: User | null;
}

function App({ basePath = '', user = null }: AppProps) {
  const AppContent = (
    <AppProvider basePath={basePath} user={user}>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to={STANDALONE ? "/list" : `${basePath}/list`} replace />} />
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
              <Navigate to={STANDALONE ? "/list" : `${basePath}/list`} replace />
            </div>
          } />
        </Routes>
      </AppLayout>
    </AppProvider>
  )

  // Conditionally wrap with BrowserRouter for standalone mode
  return STANDALONE ? (
    <BrowserRouter>
      {AppContent}
    </BrowserRouter>
  ) : (
    AppContent
  )
}

export default App
