<template>
  <div class="index-container">
    <video autoplay muted loop class="background-video">
      <source
        src="https://videos.pexels.com/video-files/1722881/1722881-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <Logo />
    <h2 class="main">
      <span class="designer">Designer</span>
      <span class="separator">&</span>
      <span class="developer">Developer</span>
    </h2>
    <div class="button-group">
      <NuxtLink to="/about">
        <button>About</button>
      </NuxtLink>
      <NuxtLink to="/art">
        <button>Explore</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Ensure html and body occupy full height */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Container to hold everything */
.index-container {
  position: relative; /* Enables layering for video and content */
  height: 100%; /* Make sure the container takes up full height */
  width: 100%;
  overflow: hidden; /* Prevents video overflow */
}

/* The background video */
.background-video {
  position: fixed; /* Fix video background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the container */
  z-index: -1; /* Sends the video behind the content */
}

/* Content on top of the video */
.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Optional: Add text shadow for better readability */
}

/* Heading styling */
h2.main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  margin-top: 2rem;
  color: #484848;
}

h2.main .designer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  animation: slide-in 1s ease-out;
}

h2.main .separator {
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}

h2.main .developer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  animation: slide-in-right 1s ease-out;
}

/* Keyframes for animations */
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

/* Button styling */
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
  background-color: rgb(151 122 113);
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
