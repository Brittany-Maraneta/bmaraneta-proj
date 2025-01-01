<template>
  <div class="page-container">
    <h1 class="name-text">Hi, my name is Brittany Maraneta!</h1>

    <div class="cube-container">
      <div
        class="cube"
        @mouseenter="pauseRotation"
        @mouseleave="resumeRotation"
      >
        <div class="cube-side front">
          <p>Schooling</p>
          <div class="content">
            I love all things designing and developing! BFA in Media Arts &
            Technology & a certificate in Web Developing.
            <br />
            <br />BFA of Media Arts & Technology: Alberta's University of the
            Arts <br />
            <br />Web Developing Certificate: SAIT AB
          </div>
        </div>
        <div class="cube-side back">
          <p>Experiences</p>
          <div class="content">
            My experience encompasses management, coaching and development,
            interviewing, customer experience, design, videography, photography,
            and front-end web development with HTML, CSS, JavaScript, Vue/Nuxt,
            Tailwind CSS.
          </div>
        </div>
        <div class="cube-side left">
          <p>My Journey</p>
          <div class="content">
            I began my creative journey with drawing at the age of 10, which
            eventually grew to include installations and media work. Before the
            pandemic, I worked as a videographer at festivals, but my true
            passion ignited when I discovered front-end development. Because I
            love to always learn and expand my knowledge, my logo represents my
            constant willingness to grow and adapt.
          </div>
        </div>
        <div class="cube-side right">
          <p>Get to know me more!</p>

          <div class="content">
            I'm based in Calgary, Alberta! Get to know my work experiences even
            more! :)
          </div>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            class="resume-link"
          >
            View Resume
          </a>
        </div>
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
/* Ensure HTML and body cover full height, no margins, no padding, no scroll */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
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

.name-text {
  font-size: 3rem;
  margin-bottom: 35px;
  color: black;
  text-align: center;
  z-index: 10;
  font-family: Arial, Helvetica, sans-serif;
}

.cube-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  margin: 20px 0;
  perspective: 1000px;
  z-index: 10;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotateCube 10s infinite linear;
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
  animation-play-state: paused;
}

/* Styling for each side of the cube */
.cube-side {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
  background-color: rgb(151 122 113);
  border: 3px solid #a0a0a0;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  line-height: 1.6;
  backface-visibility: hidden;
}

.cube-side .content {
  font-size: 1rem;
  text-align: justify;
}

/* Side transformations for 3D effect */
.front {
  transform: translateZ(175px);
}

.back {
  transform: rotateY(180deg) translateZ(175px);
}

.left {
  transform: rotateY(-90deg) translateZ(175px);
}

.right {
  transform: rotateY(90deg) translateZ(175px);
}

.resume-link {
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  font-weight: normal;
  line-height: 1.6;
  display: block;
  margin: 10px 0;
  transition: color 0.3s ease;
}

.a:hover {
  color: #a0a0a0;
}
</style>
