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
      <span
        class="designer"
        @mouseenter="startPencilMovement"
        @mouseleave="stopPencilMovement"
      >
        <NuxtLink to="/art">Designer</NuxtLink>
        <div v-if="showPencil" class="pencil" :style="pencilStyle">✏️</div>
      </span>

      <span class="separator">&</span>

      <!-- Developer Section -->
      <span
        class="developer"
        @mouseenter="showDeveloperSkills = true"
        @mouseleave="showDeveloperSkills = false"
      >
        <NuxtLink to="/coding">Developer</NuxtLink>
        <div v-if="showDeveloperSkills" class="skills">
          <span class="skill-item">JavaScript</span>
          <span class="skill-item">CSS</span>
          <span class="skill-item">HTML</span>
          <span class="skill-item">Tailwind CSS</span>
          <span class="skill-item">Vue</span>
        </div>
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
import { ref } from "vue";

// State to control pencil animation and developer skills popup
const showPencil = ref(false);
const pencilStyle = ref({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-20%, -20%)",
  transition: "all 1s ease",
});
const showDeveloperSkills = ref(false);

// Start moving pencil randomly when hovering over "Designer"
const startPencilMovement = () => {
  showPencil.value = true;
  movePencilRandomly();
};

// Stop moving pencil when leaving "Designer"
const stopPencilMovement = () => {
  showPencil.value = false;
  pencilStyle.value = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
};

// Function to move pencil randomly on the page
const movePencilRandomly = () => {
  setInterval(() => {
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    pencilStyle.value = {
      position: "absolute",
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: "translate(-50%, -50%)",
      transition: "all 0.1s ease",
    };
  }, 100);
};
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

/* Content styling */
.content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  transition: color 0.3s ease;
}

h2.main .designer a:hover,
h2.main .developer a:hover {
  color: #a0a0a0;
}

/* Pencil Animation */
.pencil {
  position: absolute;
  font-size: 24px;
  transition: all 0.1s ease;
}

/* Developer Skills */
.skills {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: -50px;
  right: -150px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  border-radius: 8px;
  font-family: "Courier New", Courier, monospace;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.skill-item {
  font-size: 18px;
  font-weight: bold;
  animation: fadeIn 0.5s ease-out;
}

/* Fade In Keyframes for Developer Skills */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
