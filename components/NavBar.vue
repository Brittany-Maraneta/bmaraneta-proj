<template>
  <nav>
    <NuxtLink to="/">
      <img src="/public/logo.svg" alt="logo" width="85" height="85" />
    </NuxtLink>
    <ul>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/coding">Coding</NuxtLink>
      </li>
      <li class="art-link">
        <NuxtLink to="/art">Art</NuxtLink>
      </li>
    </ul>
    <!-- <div @click="isVisible = !isVisible" class="menu-wrapper"></div> -->
  </nav>
  <!-- <ToggleMenu :isVisible="isVisible" :links="linkData" /> -->
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(243, 237, 237);
  width: 100%;
  max-width: 100vw;
  position: absolute;
  top: 0;
  padding: 0rem;
  z-index: 100;
  opacity: 80%;
  overflow-x: hidden;
  box-sizing: border-box;
}

nav a:hover img {
  transform: scale(1.2);
  transition: transform 0.4s;
}

ul {
  list-style-type: none;
  display: flex;
  gap: 3.5rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  white-space: nowrap;
}

li a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

li:hover a {
  color: #a0a0a0;
}

.art-link {
  margin-right: 2rem; /* Adjust this value as needed */
}

@media screen and (min-width: 880px) {
  ul {
    display: flex;
  }

  .menu-wrapper {
    display: none;
  }
}
</style>
