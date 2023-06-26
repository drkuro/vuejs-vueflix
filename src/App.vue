<script setup>

import LoginForm from './components/LoginForm.vue';
import Vueflix from './components/Vueflix.vue';
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            Accueil
          </li>
          <li v-if="session.loggedIn">
            <p>Connecté en tant que {{ session.user.username }}
              <button @click="session.logout">Déconnexion</button>
            </p>
          </li>
        </ul>
      </nav>

      <h1>Mon application</h1>
    </header>
    <section>
      <LoginForm v-if="!session.loggedIn" @login-success="loggedIn = true" />
      <Vueflix v-if="session.loggedIn" />
    </section>
  </div>
</template>

<script>
import { useSessionStore } from '@/store/session';

export default {
  methods: {
    handleLogout() {
      const sessionStore = useSessionStore();
      sessionStore.logout();
      this.$router.push('/login');
    }
  },
  computed: {
    session() {
      return useSessionStore();
    }
  }
};
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
    flex-direction: column;
    padding-right: calc(var(--section-gap) / 2);
  }

  header nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 2rem;
  }

  header nav ul {
    list-style: none;
  }

  header h1 {
    margin: 20px 0;

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
