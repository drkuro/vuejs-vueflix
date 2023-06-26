import { defineStore } from 'pinia';

export const useSessionStore = defineStore('session', {
  state: () => ({
    loggedIn: false,
    user: null
  }),
  actions: {
    login(userCredentials) {
      console.log(userCredentials);
      // Vérification des identifiants de l'utilisateur
      if (userCredentials.username === 'test@test.com' && userCredentials.password === 'password') {
        this.loggedIn = true;
        this.user = { username: userCredentials.username };
      } else {
        throw new Error('Identifiants invalides');
      }
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
    }
  }
});
