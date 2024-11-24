<template>
  <div class="page-container">
    <h1 class="name-text">Hi, my name is Brittany Maraneta</h1>

    <div class="cube-container">
      <!-- Cube -->
      <div
        class="cube"
        @mouseenter="pauseRotation"
        @mouseleave="resumeRotation"
      >
        <div class="cube-side front">
          I love all things art & designing! I have a BFA in Media Arts &
          Technology & a certificate in Web Developing.
        </div>
        <div class="cube-side back">Back Text</div>
        <div class="cube-side left">Left Text</div>
        <div class="cube-side right">Right Text</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPaused: false, // Flag to track if the rotation should be paused
    };
  },
  methods: {
    pauseRotation() {
      this.isPaused = true; // Set flag to pause rotation
    },
    resumeRotation() {
      this.isPaused = false; // Set flag to resume rotation
    },
  },
};
</script>

<style scoped>
/* Ensure the html and body take the full height of the viewport */

/* The main container for the page */
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the page container fills the whole viewport height */
  width: 100%; /* Full width */
  background-image: url("https://images.pexels.com/photos/4252522/pexels-photo-4252522.jpeg");
  background-size: cover; /* Ensure the image fully covers the page */
  background-position: center center; /* Center the image */
  background-attachment: fixed; /* Keep background fixed during scroll */
  background-repeat: no-repeat; /* Prevent tiling of the background image */
  overflow: hidden;
}

/* The header text styling */
.name-text {
  font-size: 3rem;
  margin-bottom: 35px;
  color: black;
  text-align: center;
}

/* Cube container with fixed dimensions */
.cube-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  margin: 20px 0;
  perspective: 1000px; /* Adds perspective to the scene for better 3D effect */
}

/* Cube styling */
.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; /* Ensure proper 3D rotation */
  animation: rotateCube 10s infinite linear; /* Continuous rotation */
  transition: transform 1s ease-in-out; /* Smooth rotation */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); /* Cube shadow for depth */
}

/* Keyframes for continuous cube rotation */
@keyframes rotateCube {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

/* Pause the animation when hovered */
.cube:hover {
  animation-play-state: paused; /* Pauses the animation when hovered */
}

/* Each side of the cube */
.cube-side {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  background-color: rgb(151 122 113);
  border: 3px solid #a0a0a0;
  box-sizing: border-box;
  transition: transform 0.6s ease, background-color 0.6s ease;
  backface-visibility: hidden; /* Hide the back face to avoid lines between sides */
  border-radius: 15px; /* Rounded corners */
  line-height: 1.6; /* Adds a gap between lines */
  padding: 10px; /* Padding around the text */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Side shadows for depth */
}

/* Each side’s transformation */
.front {
  transform: translateZ(175px); /* Moves the front face forward */
}

.back {
  transform: rotateY(180deg) translateZ(175px); /* Moves the back face behind */
}

.left {
  transform: rotateY(-90deg) translateZ(175px); /* Moves the left face */
}

.right {
  transform: rotateY(90deg) translateZ(175px); /* Moves the right face */
}
</style>
