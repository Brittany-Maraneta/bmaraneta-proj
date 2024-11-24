<template>
  <div class="resume-container">
    <h1>Brittany Maraneta - Resume</h1>
    <p>BFA in Media Arts & Technology with a certificate in Web Developing.</p>
    <ul>
      <li>Management, coaching, and development experience</li>
      <li>Front-end web development: HTML, CSS, JavaScript, Vue/Nuxt</li>
      <li>Photography, videography, and design skills</li>
    </ul>
    <!-- Add more resume details as needed -->
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
.resume-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}
h1 {
  text-align: center;
}
ul {
  list-style-type: square;
  margin-top: 10px;
}
</style>
