<template>
  <h1 style="font-size: 60px; font-family: none">SHOP ALL</h1>
  <ul class="lista-opciones">
    <li>ALL</li>
    <li>TONER</li>
    <li>SERUM</li>
    <li>MASK</li>
  </ul>
  <div class="contenedor-productos mb-64">
    <div class="grid-productos">
      <div
        class="producto imagen-grande"
        v-if="productos[0]"
        @click="goToProductDetail(productos[0].ID)"
      >
        <img :src="productos[0].imagen" :alt="productos[0].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[0].nombre }}</span>
          <span class="producto-precio">${{ productos[0].precio }}</span>
        </div>
      </div>
      <div
        class="producto"
        v-if="productos[1]"
        @click="goToProductDetail(productos[1].ID)"
      >
        <img :src="productos[1].imagen" :alt="productos[1].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[1].nombre }}</span>
          <span class="producto-precio">${{ productos[1].precio }}</span>
        </div>
      </div>
      <div
        class="producto"
        v-if="productos[2]"
        @click="goToProductDetail(productos[2].ID)"
      >
        <img :src="productos[2].imagen" :alt="productos[2].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[2].nombre }}</span>
          <span class="producto-precio">${{ productos[2].precio }}</span>
        </div>
      </div>
    </div>

    <!-- Fila 2 -->
    <div class="grid-productos">
      <div
        class="producto"
        v-if="productos[3]"
        @click="goToProductDetail(productos[3].ID)"
      >
        <img :src="productos[3].imagen" :alt="productos[3].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[3].nombre }}</span>
          <span class="producto-precio">${{ productos[3].precio }}</span>
        </div>
      </div>
      <div class="producto vacio"></div>
      <!-- Espacio vacío -->
      <div
        class="producto"
        v-if="productos[4]"
        @click="goToProductDetail(productos[4].ID)"
      >
        <img :src="productos[4].imagen" :alt="productos[4].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[4].nombre }}</span>
          <span class="producto-precio">${{ productos[4].precio }}</span>
        </div>
      </div>
      <div
        class="producto"
        v-if="productos[5]"
        @click="goToProductDetail(productos[5].ID)"
      >
        <img :src="productos[5].imagen" :alt="productos[5].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[5].nombre }}</span>
          <span class="producto-precio">${{ productos[5].precio }}</span>
        </div>
      </div>
    </div>

    <!-- Fila 3 -->
    <div class="grid-productos">
      <div class="producto vacio"></div>
      <!-- Espacio vacío -->
      <div
        class="producto"
        v-if="productos[6]"
        @click="goToProductDetail(productos[6].ID)"
      >
        <img :src="productos[6].imagen" :alt="productos[6].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[6].nombre }}</span>
          <span class="producto-precio">${{ productos[6].precio }}</span>
        </div>
      </div>
      <div class="producto vacio"></div>
      <!-- Espacio vacío -->
      <div
        class="producto"
        v-if="productos[7]"
        @click="goToProductDetail(productos[7].ID)"
      >
        <img :src="productos[7].imagen" :alt="productos[7].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[7].nombre }}</span>
          <span class="producto-precio">${{ productos[7].precio }}</span>
        </div>
      </div>
    </div>

    <!-- Fila 4 -->
    <div class="grid-productos">
      <div
        class="producto"
        v-if="productos[8]"
        @click="goToProductDetail(productos[8].ID)"
      >
        <img :src="productos[8].imagen" :alt="productos[8].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[8].nombre }}</span>
          <span class="producto-precio">${{ productos[8].precio }}</span>
        </div>
      </div>
      <div
        class="producto"
        v-if="productos[9]"
        @click="goToProductDetail(productos[9].ID)"
      >
        <img :src="productos[9].imagen" :alt="productos[9].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[9].nombre }}</span>
          <span class="producto-precio">${{ productos[9].precio }}</span>
        </div>
      </div>
      <div
        class="producto imagen-grande-horizontal"
        v-if="productos[10]"
        @click="goToProductDetail(productos[10].ID)"
      >
        <img :src="productos[10].imagen" :alt="productos[10].nombre" />
        <div class="producto-info">
          <span class="producto-nombre">{{ productos[10].nombre }}</span>
          <span class="producto-precio">${{ productos[10].precio }}</span>
        </div>
      </div>
    </div>
  </div>

  <FooterComp />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FooterComp from '@/components/Footer.vue'

const productos = ref([])
const router = useRouter()

onMounted(async () => {
  try {
    const response = await fetch('https://66a189667053166bcabf3141.mockapi.io/producs')
    const data = await response.json()
    productos.value = data
  } catch (error) {
    console.error('Error al cargar los productos:', error)
  }
})

function goToProductDetail(productId) {
  router.push({ name: 'ProductDetail', params: { ID: productId } })
}
</script>

<style scoped>
.contenedor-productos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Grid para cada fila de productos */
.grid-productos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
}

/* Estilos para los productos */
.producto {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.lista-opciones {
  display: flex;
  gap: 10px; /* Espacio entre los elementos */
  list-style-type: none; /* Quita los puntos de la lista */
  padding: 0;
  margin: 0;
  color: gray;
  :hover {
    color: black;
    cursor: pointer;
  }
}

/* Imagenes */
.imagen-grande {
  grid-column: span 2; /* Expande en dos columnas */
}

.imagen-grande-horizontal {
  grid-column: span 2; /* Expande en dos columnas en la última fila */
}

.vacio {
  background: transparent; /* Espacio vacío */
}

.imagen-producto {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Información del producto */
.producto-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
}

.producto-nombre {
  font-weight: bold;
  text-align: left;
}

.producto-precio {
  color: #555;
  text-align: right;
}

img {
  cursor: pointer;
}
</style>
