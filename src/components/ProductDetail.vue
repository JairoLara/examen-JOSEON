<!-- src/views/ProductDetail.vue -->
<template>
  <div v-if="product">
    <div class="bg-stone-200 h-auto px-12 py-16">
      <span>
        <h1 class="text-center text-6xl">{{ product.nombre }}</h1>
      </span>
      <div class="grid grid-cols-3">
        <!-- Información y precio -->
        <div class="flex justify-start items-end h-screen pe-48">
          <div>
            <p class="text-2xl font-semibold">$ {{ product.precio }}.00</p>
            <p class="text-xl mt-4">{{ product.descripcion }}</p>
          </div>
        </div>

        <!-- Imagen -->
        <div>
          <img class="pt-16" :src="product.imagen" alt="Product Image" />
        </div>

        <div>
          <!-- Cantidad -->
          <div class="flex justify-start items-end h-screen w-full">
            <span class="grid grid-cols-4 text-2xl text-bold ps-48">
              <div class="pt-2">
                <p class="justify-self-center ps-3">Quantity</p>
              </div>
              <button
                class="btn justify-self-end h-10 hover:bg-stone-300 rounded-3xl text-3xl bg-stone-200 text-black pb-1"
                @click="removeFromQuantity()"
              >
                -
              </button>
              <p class="pt-1 text-3xl justify-self-center">{{ quantity }}</p>
              <button
                class="btn justify-self-start h-10 hover:bg-stone-300 rounded-full text-2xl bg-stone-200 text-black pb-1"
                @click="quantity++"
              >
                +
              </button>
            </span>
          </div>
          <!-- Size -->
          <div class="">
            <span class="grid grid-cols-2 text-2xl text-bold ps-48">
              <div class="pt-2">
                <p class="justify-self-start">Size</p>
              </div>
              <div class="ps-6">
                <p>150ML</p>
              </div>
            </span>
          </div>

          <!-- Añadir al carrito -->
          <div class="ps-48">
            <span>
              <button class="btn btn-outline w-full">ADD TO CART</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)
const quantity = ref(1)

async function fetchProduct(ID) {
  try {
    const response = await fetch(
      `https://66a189667053166bcabf3141.mockapi.io/producs?ID=${ID}`,
    )
    if (!response.ok) {
      throw new Error(`Product not found: ${response.status}`)
    }
    const data = await response.json()
    product.value = data[0] // Update the product ref with the retrieved data
  } catch (error) {
    console.error(`Error fetching product: ${error.message}`)
  }
}

// Fetch product data when the component is mounted
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
