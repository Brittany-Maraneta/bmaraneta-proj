<template>
  <div class="page-container">
    <Carousel />
    <h1>Hello</h1>
    <h1>Hello</h1>
  </div>
</template>

<script></script>

<style scoped>
/* Ensure HTML and body cover full height, no margins, no padding, no scroll */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent scrolling */
}

/* Full viewport container */
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://images.pexels.com/photos/4252522/pexels-photo-4252522.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
