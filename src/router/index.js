import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import ProductDetail from '@/components/ProductDetails.vue' // Path to your product detail page
import ProductList from '../views/ProductList.vue'
import Checkout from '../views/CheckoutPage.vue'
import Cart from '../views/CartView.vue'
import Also from '../components/AlsoLike.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductList,
    },
    {
      path: '/products/:ID',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true, // This allows passing the route parameter as a prop to the component
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    { path: '/checkout', name: 'checkout', component: Checkout },
    { path: '/also', name: 'also', component: Also },
  ],
})

export default router
