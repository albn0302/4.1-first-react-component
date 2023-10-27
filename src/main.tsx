import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './components/Layouts.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Checkout from './pages/Checkout.tsx'
import ProductCards from './components/ProductCards.tsx'
import Index from './pages/Index.tsx'
import Shop from './pages/Shop.tsx'
import Login from './pages/Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/products' element={<ProductCards data={{
            id: 0,
            name: '',
            stock: 0,
            price: 0,
            imgurl: ''
          }}/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <App />
    </Layout>
    </Router>
  </React.StrictMode>,
)
