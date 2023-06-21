<template>
  <div id="login-form" v-if="!loggedIn">
    <form>
      <h1>{{ title }}</h1>
      <p>Remplissez ce formulaire pour vous connecter.</p>
      <hr>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Entrez votre courriel" id="email" name="email" required>

      <label for="psw"><b>Mot de passe</b></label>
      <input type="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>

      <p><button type="submit">Se connecter</button></p>
    </form>
  </div>
  <ul>
    <li v-for="item in itemsList" :key="item">
      <img :src="logo" alt="Vue logo" width="25" height="25">
      <img src="./../assets/logo.svg" alt="Vue logo" width="25" height="25">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title: 'Authentification',
      loggedIn: true,
      itemsList: ["item 1", "item 2", "item 3"],
      logo: '/src/assets/logo.svg'
    };
  }
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
</style>
```