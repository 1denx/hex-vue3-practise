<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Router-link class="nav-link" to="/">HOME</Router-link>
          </li>
          <li class="nav-item">
            <Router-link class="nav-link" to="/wk1">WK1</Router-link>
          </li>
          <li class="nav-item">
            <Router-link class="nav-link" to="/wk2">WK2</Router-link>
          </li>
          <li class="nav-item">
            <Router-link class="nav-link" to="/wk3">WK3</Router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
