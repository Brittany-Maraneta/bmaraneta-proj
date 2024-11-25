<template>
  <div class="page-container">
    <div class="resume-card">
      <h1>Brittany Maraneta - Resume</h1>
      <p>
        Brittany-june@hotmail.com |
        <a href="https://github.com/Brittany-Maraneta">GitHub</a>|
        <a href="https://www.linkedin.com/in/brittany-maraneta-3717a71a1/"
          >LinkedIn</a
        >
      </p>
      <p>
        I am a Media Artist who specialized in video, sound and photography. I
        have vast experience in customer service and sales. My passion was
        always towards creating and building, which opened up my interests
        towards coding and developing installation projects where I grew my love
        for code. I am now switching to Web Development where I hope to join the
        development industry shortly. My focus is towards Front End with my
        experiences in: Figma, Adobe, and Canva. As well as my development
        languages in HTML, CSS, JavaScript, NodeJS, Vue, Nuxt, and Tailwind CSS.
      </p>

      <h2>Technical Projects</h2>
      <h3>
        Ecommerce for Tech | Nuxt & Vue |
        <a href="https://github.com/Brittany-Maraneta/CPNT262-Final.Project"
          >GitHub</a
        >
      </h3>
      <p>
        •Worked with a full stack group to create an ecommerce for tech items
      </p>

      <h3>
        Portfolio | Vue & CSS |
        <a href="https://github.com/Brittany-Maraneta/bmaraneta-proj">Github</a>
      </h3>
      <p>
        • Created a portfolio to showcase my experiences in Front and Back End
        Developing.
      </p>

      <h2>Technical Skills</h2>
      <h3>Design:</h3>
      <p>• UI & UX Designing, Figma, Adobe, and Canva</p>
      <p>• Photography and Videography</p>
      <p>
        Development Languages: • HTML, CSS, JavaScript, Vue, Nuxt, NodeJS,
        Tailwind CSS
      </p>

      <h2>Employment Experiences</h2>
      <h3>Store Manager | Rocky Mountain Soap | 2021 – Current</h3>
      <p>
        • Knowledge in spreadsheets, scheduling software, and payroll/payment
        software • Leading the team towards common goals, such as monthly or
        weekly financial targets. • Improving Sales and Revenue by hitting
        targeted goals over 30%. between 2021-2023 • Merchandising the store per
        season and new releases and creating merchandising floor plans •HR
        Recruitment – Managing interview of a variety of job positions in Rocky
        Mountain Soap Co. As well as creating an onboarding program to be used
        across the company.
      </p>

      <h3>Merchandiser Lead | Mountain Warehouse | 2020 - 2021</h3>
      <p>
        • Merchandising the store to create a shopping experience/story.
        Including but not limited to changing window displays, wall signs, as
        well as mannequins.
      </p>

      <h3>Videographer | IGNITE! Festival | 2019 - 2020</h3>
      <p>
        • Working in tight timelines to provide promotional videos and working
        with multiple event schedules • Recorded promotional videos for their
        website and social media platforms • Editing recorded video and photos
        through Adobe Suite
      </p>

      <h2>Education</h2>
      <h3>
        Southern Alberta Institute of Technology (SAIT) Web Developer
        Certificate | May 2024
      </h3>
      <h3>
        Alberta’s University of the Arts (AUARTS) BFA Media Arts & Technology |
        May 2015
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Resume - Brittany Maraneta", // Set the page title
    };
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.resume-card {
  width: 100%;
  max-width: 800px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

p {
  text-align: left;
  margin-bottom: 20px;
  color: #555;
}
</style>
