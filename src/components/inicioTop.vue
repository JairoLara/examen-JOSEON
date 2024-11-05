<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </head>
  <div class="inicio">
    <div class="bigText animate__fadeIn">
      BEAUTY <br /><span style="margin-left: 25%"
        >OF JOSE<img
          class="img3 animate__zoomIn"
          style="margin-left: 75%; margin-top: -7%; width: 160px; height: 160px"
          src="../../public/img/imagen2.png"
          alt=""
      /></span>
      <div style="margin-left: 70%; margin-top: -7%">N</div>
    </div>
    <div class="img1 animate__animated animate__fadeInLeft">
      <img src="../../public/img/imagen.png" alt="" />
    </div>
    <img
      class="img2 animate__animated animate__fadeInLeft"
      src="https://www.dermaluxcr.com/cdn/shop/files/3_a2c8cd35-52fd-457c-a0d6-7919c4a5b791.webp?v=1720554530&width=600"
      alt=""
    />
    <div
      class="text-below animate__zoomIn"
      style="
        animation-duration: 1.5s;
        animation-delay: 0.5s;
        font-size: 20px;
        letter-spacing: -1px;
        font-family: 'Century Gothic', sans-serif;
        margin-top: 850px;
        left: 65%;
        position: absolute;
      "
    >
      Treat Your Skin Concern with
      <br />
      Hanbang Modern Ingredients
    </div>
  </div>

  <div class="also-like-container">
    <p
      style="
        font-family: none;
        font-size: 130px;
        text-align: start;
        color: #404040;
      "
    >
      PRODUCTS
    </p>
    <p style="text-align: end">
      BUY ALL<span
        @click="goToShop()"
        class="material-symbols-outlined"
        style="cursor: pointer"
      >
        arrow_circle_right
      </span>
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

  <div class="aboutUs">
    <div
      style="
        font-size: 130px;
        font-family: 'Times New Roman', Times, serif;
        text-align: start;
        color: #404040;
      "
    >
      OUR MISSION
    </div>
    <div class="container-fluid">
      <div class="image-container">
        <div class="image-column small-image">
          <div class="container-text">
            <p style="width: 16rem; text-align: start">
              With a focus on clear, pure and healthy skin, the mission at
              Beauty of Joseon is to provide the perfect products for every skin
              type.
            </p>
          </div>
          <img
            src="https://koelleza.mx/cdn/shop/files/3_2048x_def9cfbf-5af3-446f-baf0-803b2ab9f1b0.webp?v=1726182124&width=540"
            alt=""
          />
        </div>

        <div class="image-column large">
          <img
            src="https://kronabeautymx.com/cdn/shop/files/reviveserum_2.jpg?v=1721759098&width=800"
            alt=""
          />
        </div>

        <div class="image-column small-image right">
          <img
            src="https://tienditadeandy.com/cdn/shop/collections/IMG_1858.jpg?v=1700697912&width=750"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div class="seccionGlassSkin">
    <div
      style="
        font-size: 130px;
        font-family: 'Times New Roman', Times, serif;
        text-align: start;
        color: #404040;
      "
    >
      GLASS SKIN
    </div>
    <div class="contenedorGlassSkin">
      <div class="textoGlassSkin">
        <p style="width: 16rem; text-align: start">
          To guide you on yout path to glass skin, we re thrilled to introduce
          our Glass Skin Due - the Glow Serum and Dynasty Cream.
        </p>
      </div>

      <div class="imagenGlassSkin imagenColumna">
        <img
          src="https://www.pielcoreana.com/cdn/shop/files/4_c16babe9-aa05-400a-8857-c6591fc4e280.png?v=1708043358&width=600"
          alt="Imagen 1"
        />
      </div>

      <div class="imagenGlassSkin imagenColumna">
        <img
          src="https://m.media-amazon.com/images/I/71Azno56mDL._AC_SX679_.jpg"
          alt="Imagen 2"
        />
      </div>
    </div>
    <p style="text-align: start">
      BUY NOW<span
        @click="goToGlassSkinDuo()"
        class="material-symbols-outlined"
        style="cursor: pointer"
      >
        arrow_circle_right
      </span>
    </p>
  </div>

  <div class="also-like-container">
    <p
      style="
        font-family: none;
        font-size: 130px;
        text-align: start;
        color: #404040;
      "
    >
      SHOP BY
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
        <div class="producto-info"></div>
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

function seleccionarMasGustados() {
  LKProductos.value = productos.value.slice(0, 3)
}

const goToShop = () => {
  router.push({ path: '/productlist' })
}

const goToGlassSkinDuo = () => {
  router.push({ name: 'ProductDetail', params: { ID: 1 } })
}

function goToProduct(ID) {
    // router.push({ path: `/products/${ID}` }) // Comentado window.location.replace
  window.location.replace(`/products/${ID}`)
  }
</script>

<style scoped>
.inicio {
  display: flex;
  padding: 40px;
  align-items: center;
  text-align: center;
}

.img1 {
  display: flex;
  width: 900px;
  height: 900px;
  animation-duration: 1.5s;
  animation-delay: 0.5s;
  position: relative;
  z-index: 1;
}
.img2 {
  display: flex;
  width: 170px;
  height: 200px;
  margin-left: auto;
  margin-top: 120px;
  animation-duration: 1.5s;
  animation-delay: 0.5s;
}
.img3 {
  animation-duration: 1.5s;
  animation-delay: 0.5s;
}

.bigText {
  font-size: 140px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  color: #404040;
  position: absolute;
  width: 100%;
  left: 49%;
  top: 48%;
  transform: translate(-50%, -50%);
  line-height: 0.9;
  animation-duration: 2.5s;
  animation-delay: 0.5s;
  z-index: 2;
}

.aboutUs {
  text-align: center;
  margin: 20px;
  margin-top: 150px;
}

.container {
  position: relative;
  max-width: 1000px;
  margin: auto;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.image-column img {
  width: 100%;
  height: auto;
}

.image-column.large img {
  max-width: 25%;
  height: auto;
}

.image-column.small-image {
  position: absolute;
  max-width: 150px;
}

.image-column.small-image img {
  max-width: 100%;
}

.image-column.small-image:first-child {
  bottom: 0;
  left: 0;
}

.image-column.small-image.right {
  top: 0;
  right: 0;
}
.container-text {
  position: absolute;
  bottom: 190%;
  left: 0;
}

.also-like-container {
  padding: 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 150px;
}

.productos-grid {
  display: flex;
  gap: -10px;
  justify-content: center;
}

.producto {
  cursor: pointer;
  flex: 1;
  max-width: 800px;
  padding: 10px;
}

.producto-imagen {
  width: 90%;
  margin-bottom: 10px;
}

.producto-info {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
}

.producto-categoria {
  text-align: left;
  font-size: 25px;
}

.producto-nombre {
  color: gray;
  font-size: 25px;
  text-align: left;
}

.producto-precio {
  margin-top: -6.5%;
  margin-right: 50px;
}

.seccionGlassSkin {
  text-align: center;
  margin: 20px;
}

.contenedorGlassSkin {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
}

.textoGlassSkin {
  flex: 1;
  padding: 20px; /* Agrega espacio alrededor del texto */
}

.textoGlassSkin p {
  font-size: 18px;
  margin: 0;
}

.imagenGlassSkin {
  flex: 1; /* Cada columna ocupa un espacio igual */
  display: flex;
  justify-content: center; /* Centra la imagen dentro de la columna */
  align-items: center; /* Alinea verticalmente en el centro */
}

.imagenColumna img {
  width: 100%; /* Ajusta la imagen al ancho de la columna */
  height: auto; /* Mantiene la proporción de la imagen */
  max-width: 300px; /* Opcional: establece un ancho máximo para las imágenes */
}
</style>
