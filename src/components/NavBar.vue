<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const searchQuery = ref('');
const products = ref([]);
const filteredProducts = ref([]);
const showSearchResults = ref(false); 

const goToShop = () => {
  router.push({ path: '/productlist' });
};

const goToGlassSkinDuo = () => {
  router.push({ name: 'ProductDetail', params: { ID: 1 } });
};

const goToHome = () => {
  router.push({ path: '/' });
};

const goToCart = () => {
  router.push({ path: '/cart' });
};

const goToProduct = (productId) => {
  window.location.replace(`/products/${productId}`);
};

const fetchProducts = async () => {
  const response = await fetch('https://66a189667053166bcabf3141.mockapi.io/producs');
  const data = await response.json();
  products.value = data;
  filteredProducts.value = []; // Inicialmente no mostrar productos
};

const filterProducts = () => {
  const query = searchQuery.value.toLowerCase();
  filteredProducts.value = products.value.filter(product =>
    product.nombre.toLowerCase().includes(query)
  );
  showSearchResults.value = filteredProducts.value.length > 0 || searchQuery.value.length > 0; 
};

// Cargar productos al inicio
fetchProducts();

// Función para cerrar 
const closeSearch = () => {
  searchQuery.value = ''; 
  filteredProducts.value = []; 
  showSearchResults.value = false; 
};
</script>

<template>
  <div class="container-fluid" id="nav">
    <div class="row">
      <div class="col" style="text-align: start">
        <a @click="goToShop()" href="#"><span>SHOP</span></a>
        <a href="#"><span>ABOUT US</span></a>
        <a @click="goToGlassSkinDuo()" href="#"><span>GLASS SKIN DUO</span></a>
      </div>
      <div class="col">
        <img @click="goToHome()"
          class="logo"
          src="https://i0.wp.com/beautyfeed.org/wp-content/uploads/2024/08/0-02-05-49d2ac187d2d7f767ae6122638d9714c0d32759cc6b44e9bcd74fe742e3619ab_f9b359a9a4080609.png?fit=1553%2C685&ssl=1"
          alt="logo"
        />
      </div>
      <div class="col" style="text-align: end">
        <a @click="goToCart()" href="#"><span>CART</span></a>
        <a href="#" @click="showSearchResults = true"><span>SEARCH</span></a> 
      </div>
    </div>
    
    <!-- bsqueda -->
    <div v-if="showSearchResults" style="margin-top: 20px; text-align: center;">
      <input
        type="text"
        v-model="searchQuery"
        @input="filterProducts"
        placeholder="Escribe el nombre del producto"
        required
        id="search-input"  
        style="padding: 10px; width: 300px; border: 1px solid #ccc; border-radius: 4px;"
      />
      <button @click="closeSearch" style="margin-left: 10px;">Cerrar</button>
    </div>

    <!-- Resultados de búsqueda -->
    <div v-if="filteredProducts.length > 0" style="margin-top: 20px; text-align: center;">
      <h3>Resultados de búsqueda:</h3>
      <ul>
        <li v-for="product in filteredProducts" :key="product.ID">
          <div @click.prevent="goToProduct(product.ID)" class="res">
  <img :src="product.imagen" alt="Imagen de {{ product.nombre }}">
  <span>{{ product.nombre }}</span>
  <span>{{ product.precio }}$</span>
</div>
        </li>
      </ul>
    </div>
    <div v-else-if="searchQuery.length > 0">
      <p>No se encontraron productos.</p>
    </div>
  </div>
</template>

<style scoped>
#nav {
  top: 0%;
  width: 99vw;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 20px;
  position: fixed;
  background-color: #ffffff;
  z-index: 100;
}

.logo {
  cursor: pointer;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  width: 170px;
  max-height: 200px;
  overflow: hidden;
}

a {
  font-size: 18px;
  padding: 6px 20px;
  margin: 5px;
  position: relative;
  display: inline-block;
  border: 2px solid #1e1e1e;
  text-transform: uppercase;
  text-decoration: none;
  color: #1e1e1e;
  font-weight: 600;
  z-index: 3;
}

a::before {
  content: '';
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 12px);
  background-color: #ffffff;

  transition: 0.2s ease-in-out;
  transform: scaleY(1);
}

a:hover::before {
  transform: scaleY(0);
}

a::after {
  content: '';
  position: absolute;
  left: 6px;
  top: -2px;
  height: calc(100% + 4px);
  width: calc(100% - 12px);
  background-color: #ffffff;

  transition: 0.2s ease-in-out;
  transform: scaleX(1);
  transition-delay: 0.2s;
}

a:hover::after {
  transform: scaleX(0);
}

a span {
  position: relative;
  z-index: 3;
}

.row {
  display: flex;
  margin-bottom: 10px;
}

.col {
  flex: 1;
  padding: 20px;
  margin-right: 10px;
  text-align: center;
}

.col:last-child {
  margin-right: 0;
}
.res {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  gap: 10px;
}

.res img {
  width: 50px;
  height: auto;
}
input{
  background-color: #ffffff
}
</style>



