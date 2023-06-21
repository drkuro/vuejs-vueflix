<template>
  <div>
    <div v-if="!loggedIn" id="login-form">
      <form @submit.prevent="login">
        <h1>{{ title }}</h1>
        <p>Remplissez ce formulaire pour vous connecter. </p>
        <hr>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Entrez votre courriel" id="email" name="email" v-model="email" required>

        <label for="psw"><b>Mot de passe</b></label>
        <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" v-model="password" required>

        <p><button type="submit">Se connecter</button></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Authentification',
      email: 'test@toto.com',
      password: '',
      loggedIn: false,
      number: 5
    }
  },
  methods: {
    login() {
      if (this.email === '' || this.password === '') {
        this.loggedIn = false;
        alert('Veuillez remplir tous les champs');
        return;
      }
      this.loggedIn = true;
    },
  }, computed: {
    squaredNumber() { return this.number * this.number; },
  },
  watch: {
    number(newValue, oldValue) { console.log(`Le nombre a été modifié : ${oldValue} -> ${newValue}`); },
  },

}
</script>

<style scoped>
/* Contenu de base */
body {
  font-family: Arial, sans-serif;
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