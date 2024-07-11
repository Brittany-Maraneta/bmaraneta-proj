<template>
  <div class="carousel-container">
    <div class="carousel">
      <h1 class="carousel-title">Brittany Maraneta</h1>

      <div class="carousel-inner">
        <transition
          name="fade"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <div class="carousel-item" :key="currentIndex">
            <img
              :src="images[currentIndex].src"
              :alt="images[currentIndex].alt"
            />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        {
          src: "https://images.pexels.com/photos/16780323/pexels-photo-16780323/free-photo-of-lens-ad-a-digital-camera-on-the-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Image 1 - Camera",
        },
        {
          src: "https://images.pexels.com/photos/16735218/pexels-photo-16735218/free-photo-of-close-up-of-a-flying-dji-drone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Image 2 - Drone",
        },
        {
          src: "https://images.pexels.com/photos/16888144/pexels-photo-16888144/free-photo-of-electronic-devices-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Image 3 - Tech",
        },
      ],
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    this.stopCarousel();
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startCarousel() {
      this.interval = setInterval(this.nextSlide, 6000); // 6 seconds
    },
    stopCarousel() {
      clearInterval(this.interval);
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = "opacity 1.5s ease"; // Adjust timing for fade effect
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = "opacity 1.5s ease"; // Adjust timing for fade effect
      el.style.opacity = 0;
      done();
    },
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%; /* Full width of the parent container */
  max-width: 1500px; /* Increase max-width for larger displays */
  margin: auto; /* Center horizontally */
}

.carousel {
  margin-top: 10rem;
  position: relative;
  width: 100%; /* Full width of the parent container */
  height: 600px; /* Height of the carousel */
  overflow: hidden;
  border-radius: 20px;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease; /* Smooth fade transition */
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.carousel-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  z-index: 10;
  background: rgba(243, 237, 237, 0.7);
  padding: 10px;
  border-radius: 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 4rem;
  width: 50%; /* Ensure title doesn't overflow */
  text-align: center;
}

.carousel-description {
  margin-top: 20px;
  text-align: center;
  font-size: 1.2rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .carousel-title {
    font-size: 2.5rem; /* Adjust font size for smaller screens */
  }

  .carousel {
    height: 400px; /* Adjust height for smaller screens */
  }
}
</style>
