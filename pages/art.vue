<template>
  <div class="page-container">
    <h1 class="dancing-title">Design Portfolio</h1>
    <h3 class="main-text">
      Designer with a BFA in Media Arts and Technology. Experience with Adobe,
      Figma, Canva, Wireframing, UI and UX designs,
    </h3>
    <h2>Logos</h2>

    <div class="card-container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="card-inner">
          <div class="card-front">
            <p>{{ card.text }}</p>
          </div>

          <div class="card-back">
            <img :src="card.image" alt="Card image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          text: "BMARAS: Main logo to represent myself. The idea of constant growth through the flowers and my name.",
          image: "/images/Bmaras.png",
        },
        {
          text: "Take 2 of BMARAS - A sketch of an idea",
          image: "/images/bmaras2.png",
        },
        {
          text: "Creating a floral to submit to a company that asked for freedom, growth, nature.",
          image: "/images/Rock.png",
        },
        {
          text: "A logo to represent an ecommerce tech company selling tech",
          image: "/images/TCrew.png",
        },
        {
          text: "From my capstone, creating a travel website to get ideas for places you want to visit.",
          image: "/images/weTravel.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

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

.dancing-title {
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  animation: dance 1s ease-in-out infinite;
  text-align: center;
  margin: 10px;
}

@keyframes dance {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(-10px) rotate(-5deg);
  }
  50% {
    transform: translateX(10px) rotate(5deg);
  }
  75% {
    transform: translateX(-10px) rotate(-5deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}

.main-text {
  text-align: center;
  font-size: 1.2rem;
  color: rgb(0, 0, 0);
  margin: 10px;
  padding: 0 20px;
}

/* Card container with flexbox */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers cards horizontally */
  gap: 30px;
  margin-top: 20px;
  padding: 10px;
}

.card {
  width: 220px;
  height: 220px;
  perspective: 1000px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(240, 238, 238, 0.819);
}

.card-front {
  background: black;
  color: white;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  padding: 10px;
}

.card-back {
  transform: rotateY(180deg);
  background: white;
}

.card-back img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}
</style>
