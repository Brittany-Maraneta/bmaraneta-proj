<template>
  <div class="page-container">
    <h1 class="dancing-title">Design Portfolio</h1>
    <h3 class="main-text">
      Designer with a BFA in Media Arts and Technology. Experience with Adobe,
      Figma, Canva, Wireframing, UI and UX designs,
    </h3>
    <h2 class="l">Logos</h2>

    <!-- Logos Section -->
    <div class="card-container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="card-inner">
          <div class="card-front">
            <img :src="card.image" alt="Card image" />
          </div>
          <div class="card-back">
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Wireframing Section -->
    <h2 class="w">Wireframing</h2>
    <div class="wireframing-container">
      <div
        class="wireframe-card"
        v-for="(project, index) in wireframeProjects"
        :key="index"
      >
        <img
          :src="project.image"
          class="wireframe-card-image"
          alt="Project image"
        />
        <div class="wireframe-card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="project-link"
            >View Project</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Logos Section (unchanged)
      cards: [
        {
          text: "BMARAS: Main logo to represent myself. The idea of constant growth and kearning through the flowers.",
          image: "/images/Bmaras.png",
        },
        {
          text: "Take 2 of BMARAS - A sketch of an idea",
          image: "/images/bmaras2.png",
        },
        {
          text: "Created a floral to submit to a company that asked for freedom, growth, nature.",
          image: "/images/Rock.png",
        },
        {
          text: "A logo to represent an ecommerce company selling tech",
          image: "/images/TCrew.png",
        },
        {
          text: "From my capstone, creating a travel website to get ideas for places you want to visit.",
          image: "/images/weTravel.png",
        },
      ],

      // Wireframing Section
      wireframeProjects: [
        {
          title: "Game Design Ideas",
          description:
            "Wireframing a game design with 4 levels of different enemies.",

          image:
            "https://images.pexels.com/photos/4511372/pexels-photo-4511372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          link: "https://www.figma.com/board/jO3F3pRSSa6SsRjf771QHu/Game---JK-%26-BM?node-id=0-1&p=f&t=vGaIapBpIuDGcOb4-0",
        },
        {
          title: "Mockup Webpage",
          description:
            "Created a mockup webpage for my capstone project; a travel blog website..",
          image:
            "https://images.pexels.com/photos/2007395/pexels-photo-2007395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          link: "https://www.figma.com/design/ImPPDMNgFnOHTrQ3hIx4vT/Webpage-Mockup?node-id=0-1&p=f&t=JGj74JjdKe6HsBbR-0",
        },

        {
          title: "Portfolio Wireframing",
          description:
            "Wireframing for a an art portfolio that includes designs, gallery, etc.",
          image:
            "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          link: "https://www.figma.com/board/6WuQDViSEJG3AwHNQhJ8Qd/DSGN-270-Assignment-2---Website-Wireframes?node-id=0-1&p=f&t=5R9A3eZTlBjazbDI-0",
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
  background-color: transparent;
  overflow-x: auto;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
  background-image: url("https://images.pexels.com/photos/4252522/pexels-photo-4252522.jpeg");
  background-size: cover;
  background-attachment: fixed;
}

.dancing-title {
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  animation: dance 1s ease-in-out infinite;
  text-align: center;
  margin: 10px;
  margin-top: 2em;
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
}

/* Logos Section */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
  width: 100%;
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
  background: white;
}

.card-back {
  transform: rotateY(180deg);
  background: black;
  color: white;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  padding: 10px;
}

.card-front img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

/* Wireframing Section */
.wireframing-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 90%;
  justify-items: center;
}

.wireframe-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(240, 238, 238, 0.819);
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  margin-bottom: 100px;
}

.wireframe-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.wireframe-card-content {
  padding: 15px;
}

.wireframe-card-content h3 {
  margin: 10px 0;
}

.wireframe-card-content p {
  font-size: 0.9rem;
  color: #333;
}

.w {
  margin-top: 200px;
}

.l {
  margin-top: 100px;
}

.project-link {
  display: inline-block;
  margin-top: 10px;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  color: #a0a0a0;
}
</style>
