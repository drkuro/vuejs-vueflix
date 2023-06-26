<template>
  <div id="login-form">
    <form @submit.prevent="login">
      <h1>{{ title }}</h1>
      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Entrez votre courriel" id="email" name="email" v-model="email" required>

      <label for="psw"><b>Mot de passe</b></label>
      <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" v-model="password" required>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p><button type="submit">Se connecter</button></p>
    </form>
  </div>
</template>

<script>
import { useSessionStore } from '@/store/session';
export default {
  data() {
    return {
      title: 'Authentification',
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.email !== '' && this.password !== '') {
        const sessionStore = useSessionStore();
        sessionStore.login({ username: this.email, password: this.password })
          .then(() => {
            console.log("connexion reussi");
          })
          .catch((error) => {
            console.log(error)
            this.errorMessage = error.message;
          });
      } else {
        this.errorMessage = 'Veuillez remplir vos identifiants';
      }
    }
  }
}
</script>


<style scoped>
/* Contenu de base */
body {
  font-family: Arial, sans-serif;
}

.error-message {
  color: red;
}


#login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2c2c2c;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#login-form h1 {
  text-align: center;
}

#login-form p {
  text-align: center;
}

#login-form hr {
  margin-top: 20px;
  margin-bottom: 20px;
}

#login-form label {
  font-weight: bold;
}

#login-form input[type="text"],
#login-form input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

#login-form button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

#login-form button[type="submit"]:hover {
  background-color: #45a049;
}

/* Styles spécifiques à LoginForm.vue */
.film {
  margin-bottom: 20px;
}

.poster {
  width: 100%;
  max-width: 300px;
  height: auto;
}

.title {
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.rating {
  font-size: 16px;
  color: gold;
}

dl {
  margin-top: 10px;
}

dt {
  font-weight: bold;
}

.plot {
  margin-top: 10px;
}
</style>
```