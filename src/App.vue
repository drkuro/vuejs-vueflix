<script setup>

import LoginForm from './components/LoginForm.vue';
import Vueflix from './components/Vueflix.vue';
</script>

<template>
  <div id="app">
    <LoginForm v-if="!loggedIn" @login-success="setLoginTrue()" />
    <Vueflix v-if="loggedIn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    setLoginTrue() {
      this.loggedIn = true;
    }
  }
}
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
