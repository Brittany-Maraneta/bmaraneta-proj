<template>
  <div class="index-container">
    <video autoplay muted loop class="background-video">
      <source
        src="https://videos.pexels.com/video-files/1722881/1722881-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
    </video>
    <Logo />
    <h2 class="main">
      <!-- Designer Section -->
      <span class="designer">
        <NuxtLink to="/art">Designer</NuxtLink>
      </span>

      <span class="separator">&</span>

      <!-- Developer Section -->
      <span class="developer">
        <NuxtLink to="/coding">Developer</NuxtLink>
      </span>
    </h2>

    <!-- Button Group -->
    <div class="button-group">
      <NuxtLink to="/about">
        <button>About</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// No special logic for pencil or hover effect in this version
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.index-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* Background Video */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Main Heading Styling */
h2.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 32px;
  margin-top: 2rem;
  color: #484848;
}

h2.main .designer,
h2.main .developer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
  text-align: center;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  animation-duration: 1s;
}

h2.main .separator {
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}

/* Slide-in Animation for Designer and Developer */
@keyframes slide-in-left {
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

/* Apply animations */
h2.main .designer {
  animation-name: slide-in-left;
}

h2.main .developer {
  animation-name: slide-in-right;
}

/* Hover Effects */
h2.main .designer a,
h2.main .developer a {
  text-decoration: none;
  color: black;
}

h2.main .designer a:hover,
h2.main .developer a:hover {
  color: #797676;
}

/* Button Styling */
.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

button {
  text-align: center;
  font-size: 20px;
  padding: 10px 20px;
  background-color: rgb(151, 122, 113);
  color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

button:hover {
  background-color: #a0a0a0;
  color: black;
}
</style>
