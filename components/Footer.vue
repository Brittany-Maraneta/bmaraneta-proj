<template>
  <footer class="footer">
    <div class="footer-content">
      <hr />
      <div class="footer-column">
        <!-- Links displayed in a row -->
        <ul class="footer-links">
          <li><a href="https://github.com/Brittany-Maraneta">GitHub</a></li>
          <li>
            <a href="https://www.linkedin.com/in/brittany-maraneta-3717a71a1/"
              >LinkedIn</a
            >
          </li>
          <li><a href="#">Instagram</a></li>
        </ul>
        <!-- Copyright Text below the links -->
        <span class="copyright-text">© 2024 BMARAS</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px 5px;
  text-align: center;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.footer-column {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px 0;
}

.footer-links a {
  color: black;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: Arial, Helvetica, sans-serif;
}

.footer-links a:hover {
  color: #a0a0a0;
}

hr {
  border-color: cccccc;
  margin: 10px 0;
}

.copyright-text {
  font-size: 14px;
  color: #0b0b0b;
  text-align: center;
}
</style>
