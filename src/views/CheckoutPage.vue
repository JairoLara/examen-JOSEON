<template>
  <div class="checkout-container h-screen">
    <div class="columna-izquierda mt-36">
      <p style="font-size: 60px; font-family: none">YOUR ORDER</p>
      <hr />
      <div
        class="producto"
        v-for="producto in productosSeleccionados"
        :key="producto.id"
      >
        <img
          :src="producto.imagen"
          :alt="producto.nombre"
          class="producto-imagen"
        />
        <div class="producto-info">
          <p class="producto-nombre">{{ producto.nombre }}</p>
          <p class="producto-precio">${{ producto.precio }} USD</p>
        </div>
      </div>
      <div class="resumen">
        <div class="line-item">
          <span>Shipping:</span>
          <span>${{ shipping }} USD</span>
        </div>
        <div class="line-item">
          <span>Subtotal:</span>
          <span>${{ subtotal }} USD</span>
        </div>
        <hr />
        <div class="line-item total">
          <span>Total:</span>
          <span>${{ total }} USD</span>
        </div>
      </div>
    </div>
    <div class="columna-derecha  mt-44">
      <p style="font-family: none; font-size: 30px">CONTACTS</p>
      <form>
        <div class="form-row">
          <div class="form-group">
            <input type="text" placeholder="First name" />
          </div>
          <div class="form-group">
            <input type="email" id="email" placeholder="Last name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input type="text" id="direccion" placeholder="Email" />
          </div>
          <div class="form-group">
            <input type="text" id="telefono" placeholder="Phone" />
          </div>
        </div>
      </form>

      <p style="font-family: none; font-size: 30px">DELIVERY</p>
      <form>
        <div class="form-row">
          <div class="form-group">
            <input
              type="text"
              id="nombre-delivery"
              placeholder="Country/Region"
            />
          </div>
          <div class="form-group">
            <input type="text" id="direccion-delivery" placeholder="City" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <input type="text" id="telefono-delivery" placeholder="Post Code" />
            <div
              class="radio-group"
              style="display: flex; align-items: center; margin-left: 10px"
            >
              <input
                type="radio"
                id="option1"
                name="delivery-option"
                style="margin-right: 5px"
              />
              <label for="option1">3-7 Free</label>
              <input
                type="radio"
                id="option2"
                name="delivery-option"
                style="margin-right: 5px; margin-left: 10px"
              />
              <label for="option2">2-3 $10</label>
            </div>
          </div>
          <div class="form-group">
            <input type="text" id="horario-delivery" placeholder="Address" />
          </div>
        </div>
      </form>
      <button style="border: 2px solid black; width: 100%; border-radius: 8px">
        PAYMENT
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productosSeleccionados: [],
      shipping: 5.99,
      subtotal: 0,
      total: 0,
      idsSeleccionados: ['3', '6'],
    }
  },
  computed: {
    calcularSubtotal() {
      return this.productosSeleccionados.reduce(
        (acc, producto) => acc + producto.precio,
        0,
      )
    },
    calcularTotal() {
      return (this.calcularSubtotal + this.shipping).toFixed(2)
    },
  },
  mounted() {
    fetch('https://66a189667053166bcabf3141.mockapi.io/producs')
      .then(response => response.json())
      .then(data => {
        this.productosSeleccionados = data.filter(producto =>
          this.idsSeleccionados.includes(producto.ID),
        )
        this.subtotal = this.calcularSubtotal
        this.total = this.calcularTotal
      })
      .catch(error => {
        console.error('Error al cargar los productos:', error)
      })
  },
}
</script>

<style scoped>
.checkout-container {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.columna-izquierda,
.columna-derecha {
  flex: 1;
}

.producto {
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
  display: flex;
  flex-direction: column;
}

.producto-nombre {
  font-weight: bold;
}

.resumen {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.line-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total {
  font-weight: bold;
}

.form-row {
  display: flex;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
  margin-right: 10px;
}

.form-group:last-child {
  margin-right: 0;
}

label {
  display: block;
  margin-bottom: 5px;
  color: gray;
}

input {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid gray;
  color: rgb(83, 83, 83);
}
</style>
