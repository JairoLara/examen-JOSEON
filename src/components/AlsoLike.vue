<template>
    <div class="also-like-container">
      <p style="font-family: none; font-size: 60px; text-align: start">
        YOU MAY ALSO LIKE
      </p>
      <div class="productos-grid">
        <div
          class="producto"
          @click="goToProduct(producto.ID)"
          v-for="producto in LKProductos"
          :key="producto.id"
        >
          <img
            :src="producto.imagen"
            :alt="producto.nombre"
            class="producto-imagen"
          />
          <p class="producto-categoria">{{ producto.categoria }}</p>
          <div class="producto-info">
            <span class="producto-nombre">{{ producto.nombre }}</span>
            <span class="producto-precio">${{ producto.precio }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const productos = ref([])
  const LKProductos = ref([])
  
  onMounted(async () => {
    const response = await fetch(
      'https://66a189667053166bcabf3141.mockapi.io/producs',
    )
    const data = await response.json()
    productos.value = data
    seleccionarMasGustados()
  })
  
  function goToProduct(ID) {
    // router.push({ path: `/products/${ID}` }) // Comentado window.location.replace
  window.location.replace(`/products/${ID}`)
  }
  
  function seleccionarMasGustados() {
    LKProductos.value = productos.value.slice(0, 3)
  }
  </script>
  






<style scoped>
.also-like-container {
  padding: 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.productos-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.producto {
  cursor: pointer;
  flex: 1;
  max-width: 800px;
  padding: 10px;
}

.producto-imagen {
  width: 100%;
  margin-bottom: 10px;
}

.producto-info {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}

.producto-categoria {
  text-align: left;
}

.producto-nombre {
  color: gray;
  font-size: 13px;
  text-align: left;
}

.producto-precio {
  text-align: right;
}
</style>
