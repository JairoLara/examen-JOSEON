<template>
  <div class="cart-container h-screen">
    <div class="cart-items  mt-36">
      <h1 style="font-family: none;">CART</h1>
      <hr>
      <div class="cart-item" v-for="producto in productosSeleccionados" :key="producto.id">
        <img :src="producto.imagen" :alt="producto.nombre" class="producto-imagen" />
        <div class="producto-info">
          <p class="producto-nombre">{{ producto.nombre }}</p>
          <p class="producto-tamano">Size: {{ producto.tamano }}</p>
          <div class="producto-cantidad">
            <button @click="cambiarCantidad(producto, -1)">-</button>
            <span>{{ producto.cantidad }}</span>
            <button @click="cambiarCantidad(producto, 1)">+</button>
          </div>
        </div>
        <p class="producto-precio">${{ (producto.precio * producto.cantidad).toFixed(2) }}</p>
      </div>
      <hr />
    </div>

    <div class="cart-total  mt-36">
      <h1 style="font-family: none;">TOTAL</h1>
      <hr>
      <div class="total-line">
        <span>Total:</span>
        <span>${{ subtotal.toFixed(2) }}</span>
      </div>
      <p style="color: gray;">Shipping:               Calculated at checkout</p>
      <input type="text" placeholder="Discount code" class="discount-input" style="background-color: white; border-bottom:1px solid gray;"/>
      <button class="apply-btn">APPLY</button>
      <button @click="irACheckout" class="checkout-btn">CHECKOUT</button>
    </div>
  </div>
  <hr>
</template>

<script>
export default {
  data() {
    return {
      productosSeleccionados: [],
      idsSeleccionados: ["3", "6"], // IDs de ejemplo
      subtotal: 0,
    };
  },
  computed: {
    calcularSubtotal() {
      return this.productosSeleccionados.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    },
  },
  methods: {
    cambiarCantidad(producto, valor) {
      producto.cantidad = Math.max(1, producto.cantidad + valor); // No permite cantidades menores a 1
      this.actualizarSubtotal();
    },
    actualizarSubtotal() {
      this.subtotal = this.calcularSubtotal;
    },
    irACheckout() {
      this.$router.push("/checkout");
    },
  },
  mounted() {
    fetch("https://66a189667053166bcabf3141.mockapi.io/producs")
      .then((response) => response.json())
      .then((data) => {
        this.productosSeleccionados = data
          .filter((producto) => this.idsSeleccionados.includes(producto.ID))
          .map((producto) => ({
            ...producto,
            cantidad: 1,
          }));
        this.actualizarSubtotal();
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      });
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  gap: 20px;
  padding: 20px;

}

.cart-items,
.cart-total {
  flex: 1;
}

h1 {
  font-family: sans-serif;
  font-size: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.producto-imagen {
  width: 80px;
  height: auto;
  margin-right: 15px;
  border-radius: 4px;
}

.producto-info {
  flex: 1;
}

.producto-nombre {
  font-weight: bold;
}

.producto-tamano {
  color: gray;
}

.producto-cantidad {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
}

.producto-precio {
  font-weight: bold;
}

.cart-total {
  border-left: 1px solid #ddd;
  padding-left: 20px;
}

.total-line {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.discount-input,
.apply-btn,
.checkout-btn {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.apply-btn {
  background-color: #f0f0f0;
}

.checkout-btn {
  background-color: black;
  color: white;
  font-weight: bold;
}
</style>
