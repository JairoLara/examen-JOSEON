<!-- src/views/ProductDetail.vue -->
<template>
  <div class="mb-64" v-if="product">
    <div class="bg-stone-200 h-auto px-12 py-16">
      <!-- Nombre -->
      <div class="titles text-6xl text-center mb-10 mt-44">{{ product.nombre }}</div>

      <!-- Columnas -->
      <div class="grid grid-cols-3">
        <!-- Información y precio -->
        <div>
          <div class="h-96 flex items-end mb-4">
            <p class="text-2xl font-semibold">${{ product.precio }}</p>
          </div>
          <p class="text-xl leading-6 pe-36">{{ product.descripcion }}</p>
        </div>
        <!-- imagen -->
        <div>
          <img :src="product.imagen" alt="Product Image" />
        </div>
        <!-- Cantidad y contenido -->
        <div>
          <!-- Cantidad -->
          <div class="h-96 flex items-end justify-between ps-36">
            <p class="text-2xl">Quantity</p>
            <button
              class="btn btn-sm rounded-3xl hover:bg-stone-300 hover:scale-110 hover:border-transparent btn-outline text-black font-bold"
              @click="removeFromQuantity()"
            >
              -
            </button>
            <p class="text-2xl">{{ quantity }}</p>
            <button
              class="btn btn-sm rounded-3xl hover:bg-stone-300 hover:scale-110 hover:border-transparent btn-outline text-black font-bold"
              @click="quantity++"
            >
              +
            </button>
          </div>
          <br />
          <!-- contenido -->
          <div class="flex items-end justify-between text-2xl ps-36">
            <p>Size</p>
            <p>150ML</p>
          </div>
          <br />
          <!-- Agregar a carrito -->
          <div class="flex w-full items-end justify-between text-2xl ps-36">
            <button
              class="btn btn-outline text-black font-normal text-2xl rounded-3xl w-full hover:bg-stone-300 hover:scale-110 hover:border-transparent"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Como usarlo -->
    <span>
      <p class="text-6xl mt-32 titles">HOW TO USE</p>
    </span>
    <div class="grid grid-cols-3 mt-16">
      <p class="pe-36">{{ product.comoUsar }}</p>
      <div>
        <img
          src="https://beautyofjoseon.com/cdn/shop/files/Untitleddesign_36.jpg?v=1726309404&width=3000"
          alt=""
        />
      </div>
      <div class="flex w-full items-end justify-end">
        <img
          class="w-3/6"
          src="https://beautyofjoseon.com/cdn/shop/files/GroundRiceMaskThumb_0003_LayerComp4.jpg?v=1720063017&width=3000"
          alt=""
        />
      </div>
    </div>

    <!-- Ingredientes -->
    <span>
      <p class="text-6xl mt-32 titles">INGREDIENTS</p>
    </span>
    <div class="grid gap-4 grid-cols-3 my-16">
      <div>
        <p class="pe-36">{{ product.ingredientes }}</p>
        <div class="flex h-full pb-24 w-full items-end">
          <p class="text-xl pb-3 me-3">READ MORE</p>
          <button
            class="btn rounded-3xl text-black w-12 btn-outline btn-md hover:bg-stone-300"
          >
            <img class="w-6" src="../assets/iconoFlecha.png" alt="" />
          </button>
        </div>
      </div>
      <div>
        <img :src="product.imagen" alt="" />
      </div>
      <div class="flex w-full items-end justify-end">
        <img
          src="https://beautyofjoseon.com/cdn/shop/files/texture_0001_LayerComp2_1ebafa5d-897a-4858-a39f-6099d762dfa5.jpg?v=1717879546&width=3000"
          alt=""
        />
      </div>
    </div>

    <AlsoLike />

    <!-- Sugerencias -->
    <!-- <span>
      <p class="text-6xl mt-32">YOU MAY ALSO LIKE</p>
    </span>
    <div class="grid gap-4 grid-cols-3 mt-16">
      <div v-for="product in otherProducts" :key="product.ID">
        <p>{{ otherProducts.nombre }}</p>
        <img :src="otherProducts[0].imagen" alt="">
      </div>
    </div> -->
  </div>

  <FooterComp />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AlsoLike from './AlsoLike.vue'
import FooterComp from '@/components/Footer.vue'

const route = useRoute()
const product = ref(null)
const quantity = ref(1)
const otherProducts = ref([])

async function fetchProduct(ID) {
  try {
    const response = await fetch(
      `https://66a189667053166bcabf3141.mockapi.io/producs?ID=${ID}`,
    )
    if (!response.ok) {
      throw new Error(`Product not found: ${response.status}`)
    }
    const data = await response.json()
    product.value = data[0]
    fetchOtherProducts()
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`)
  }
}

async function fetchOtherProducts() {
  try {
    const response = await fetch(
      `https://66a189667053166bcabf3141.mockapi.io/producs`,
    )
    if (!response.ok) {
      throw new Error(`Product not found: ${response.status}`)
    }
    const data = await response.json()
    otherProducts.value = data
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`)
  }
}

onMounted(() => {
  const productId = route.params.ID
  try {
    fetchProduct(productId)
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`)
  }
})

const removeFromQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>

<style scoped>
.titles {
  font-family: none;
}
</style>
