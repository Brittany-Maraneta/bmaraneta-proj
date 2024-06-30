<template>
  <div class="header">
    <img
      src="https://images.pexels.com/photos/16780323/pexels-photo-16780323/free-photo-of-lens-ad-a-digital-camera-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Image 1 - Camera"
    />
    <img
      src="https://images.pexels.com/photos/16735218/pexels-photo-16735218/free-photo-of-close-up-of-a-flying-dji-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Image 2 - Drone"
    />
    <img
      src="https://images.pexels.com/photos/16888144/pexels-photo-16888144/free-photo-of-electronic-devices-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Image 3 - Tech"
    />
  </div>
  <h1>Brittany Maraneta</h1>
  <p>
    A developer and artist! Love for media, art and developing! I explore the
    art world in different ways and believe that design is a beautiful way to
    express. Developing and building is my passion, to be able to create and
    build something from the bottom to the top.
  </p>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 80px;
  font-size: 50px;
  margin-bottom: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

p {
  text-align: center;
  font-size: 20px;
  margin-left: 100px;
  margin-right: 100px;
}

.header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px; /* Adjust spacing between images */
  margin-bottom: 20px;
  margin-top: 115px;
}

.header img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Ensures images cover their containers without distortion */
}

.logo-and-text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.logo-container {
  margin-top: 50px;
  margin-right: 20px;
}

.logo-container img {
  max-width: 100%;
  width: 450px;
  height: auto;
}

.about-us-text {
  flex: 1 1 auto;
  margin-left: 60px;
  margin-right: 60px;
  font-family: "Courier New", Courier, monospace;
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;
}

@media (max-width: 768px) {
  .logo-container {
    flex-direction: column;
    align-items: center;
  }

  .about-us-text {
    margin-top: 20px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .logo-container {
    margin-right: 0;
  }
}
</style>
