import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import ProductCollectionPage from './pages/ProductCollectionPage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import {AuthProvider} from './components/auth/AuthContext'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path='/mall' exact component={HomePage}/>
          <Route path='/mall/:categoryName' exact component={ProductCollectionPage} />
          <Route path='/login' component={LoginPage}/>
          <Route path='/cart' component={CartPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/:productName' exact component={ProductPage} />
          <Redirect to='/mall'></Redirect>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App