<script>
export default {
  name: 'AppFooter',
}
</script>
<template>
  <div class="footer flex">
    <div class="flex"></div>
    <div class="footertop">
      <h1
        style="font-size: 25px; font-weight: bold"
        font.family="'Century Gothic', sans-serif"
      >
        SING UP FOR UPDATES
      </h1>
      <br />
      email address
      <hr />
      by singing up you agree to our teams
    </div>
    <div style="display: flex; margin-left: auto">
      <svg width="170" height="200" viewBox="0 0 250 200">
        <defs>
          <path
            id="text-circle"
            d="M 125, 125 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
          />
        </defs>

        <text
          fill="#333"
          font-size="25"
          font-family="Arial"
          text-anchor="middle"
          letter-spacing="0"
          font-weight="bold"
        >
          <textPath href="#text-circle">
            SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT SUBMIT
            SUBMIT
          </textPath>
        </text>
      </svg>
    </div>
    <div class="social-icons">
      <a href="#"
        ><img
          src="https://cdn-icons-png.flaticon.com/128/4406/4406234.png"
          alt="Facebook"
          class="icon"
        /><br /><br />CONTACT US</a
      >
      <a href="#"
        ><img
          src="https://cdn-icons-png.flaticon.com/128/13670/13670372.png"
          alt="Instagram"
          class="icon"
        /><br /><br />FAQ</a
      >
      <a href="#"
        ><img
          src="https://cdn-icons-png.flaticon.com/128/220/220375.png"
          alt="Twitter"
          class="icon"
        /><br /><br />SHIPPING</a
      >
      <a href="#"
        ><img
          src="https://cdn-icons-png.flaticon.com/128/15713/15713409.png"
          alt="TikTok"
          class="icon"
        /><br /><br />PRIVACY POLICY</a
      >
    </div>
  </div>
  <div class="bigText">BEAUTY OF JOSEON</div>
</template>

<style scoped>
.footer {
  display: flex;
  bottom: 0;
  text-align: center;
  padding: 40px;
  font-size: 17px;
  align-items: center;
  text-align: center;
  font-family: 'Century Gothic', sans-serif;
  color: #5c5c5c;
}

.footertop {
  position: relative;
}

hr {
  width: 780px;
  border: 0;
  border-top: 3px solid #000000;
  margin: 0;
  padding: 0;
  top: 70px;
  left: 50%;
  position: absolute;
  transform: translateX(-20%);
}

.bigText {
  font-size: 173px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  color: #404040;
}

.social-icons {
  display: flex;
  gap: 100px;
  margin-bottom: 10px;
  margin-left: auto; /* Empuja el contenedor hacia la derecha */
}

.icon {
  width: 64px;
  height: 64px;
}
</style>
