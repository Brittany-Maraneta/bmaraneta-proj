<template>
  <div class="index-container">
    <video autoplay muted loop class="background-video">
      <source
        src="https://videos.pexels.com/video-files/1722881/1722881-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <h1>Brittany Maraneta</h1>
    <h2 class="main">
      <span class="designer">Designer</span>
      <span class="separator">&</span>
      <span class="developer">Developer</span>
    </h2>
    <div class="button-group">
      <NuxtLink to="/about">
        <button>Learn About Me</button>
      </NuxtLink>
      <NuxtLink to="/art">
        <button>Explore</button>
      </NuxtLink>
    </div>
  </div>

  <!-- <div class="header">
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
  </div> -->
  <!-- <Carousel /> -->
</template>

<style scoped>
.index-container {
  position: relative; /* Enables layering for video and content */
  min-height: 100vh;
  width: 100vw;
  overflow: hidden; /* Prevents video overflow */
  margin: 0;
  padding: 0;
}

.background-video {
  position: absolute; /* Positioned to cover the container */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video fills the container */
  z-index: -1; /* Sends the video behind the content */
}

.content {
  position: relative; /* Keeps content above the video */
  z-index: 1; /* Ensures content appears above the video */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff; /* Optional: Adjust text color for visibility */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional: Add text shadow for better readability */
}

h1 {
  text-align: center;
  margin-top: 140px;
  font-size: 80px;
  margin-bottom: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(50, 50, 50);
}
button {
  text-align: center;
  font-size: 20px;
  margin-left: 50px;
  margin-right: 100px;
  margin-top: 1rem;
}

h2 {
  text-align: center;
  font-size: 40px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 2rem;
  color: rgb(11, 11, 11);
}

.header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px; /* Adjust spacing between images */
  margin-bottom: 20px;
  margin-top: 145px;
}

.header img {
  width: 100%;
  height: auto;
  object-fit: cover;
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

h2.main {
  display: flex;
  justify-content: center; /* Center horizontally in parent */
  align-items: center; /* Align vertically in parent */
  gap: 10px; /* Add space between items */
  font-size: 40px;
  margin-top: 2rem;
  color: rgb(11, 11, 11);
}

h2.main .designer {
  font-weight: bold;
}

h2.main .separator {
  font-size: 30px; /* Smaller size for contrast */
  color: rgb(90, 88, 88); /* Gray for visual distinction */
}

h2.main .developer {
  font-weight: bold;
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

h2.main .designer {
  animation: slide-in 1s ease-out;
}

h2.main .developer {
  animation: slide-in-right 1s ease-out;
}

.button-group {
  display: flex; /* Arrange buttons horizontally */
  justify-content: center; /* Center horizontally within the container */
  gap: 20px; /* Add space between buttons */
  margin-top: 20px; /* Add some space between the text and buttons */
}

button {
  text-align: center;
  font-size: 20px;
  padding: 10px 20px; /* Add padding for a better look */
  background-color: #007bff; /* Optional: Button background color */
  color: white; /* Optional: Button text color */
  border: none;
  border-radius: 5px; /* Optional: Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
}

button:hover {
  background-color: #0056b3; /* Optional: Change color on hover */
}
</style>
