<template>
  <div>
    <div v-if="products.length">
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p><strong>Precio:</strong> {{ product.price }}</p>
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    // Llamada a la API cuando el componente se monta
    fetch('https://66a189667053166bcabf3141.mockapi.io/producs')
      .then(response => response.json())
      .then(data => {
        this.products = data // Almacenar los datos en la propiedad `products`
      })
      .catch(error => console.error('Error al cargar los productos:', error))
  },
}
</script>

<style scoped>
.product {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>
