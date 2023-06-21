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
      <div>
        <label for="number-input">Nombre:</label>
        <input id="number-input" type="number" v-model="number" />
        <p>Le carré du nombre est : {{ squaredNumber }}</p>
      </div>
    </div>
    <div v-else>
      <p>Bienvenu {{ email }}</p>
      <ul class="films">
        <li v-for="film in films" class="film card" :key="film.title">
          <img class="poster" :src="film.poster" />
          <p class="title">
            {{ film.title }}
            <span class="rating" v-if="film.score !== 'N/A'">{{ getRatingStars(film.score) }}</span>
          </p>
          <dl>
            <dt>Release date</dt>
            <dd>{{ film.released }}</dd>
            <dt>Director</dt>
            <dd>{{ film.director }}</dd>
            <dt>Actors</dt>
            <dd>{{ film.actors }}</dd>
          </dl>
          <p class="plot">{{ film.plot }}</p>
        </li>
      </ul>
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
      number: 5,
      films: [
        {
          title: 'Titanic',
          released: '19 Dec 1997',
          director: 'James Cameron',
          actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
          poster: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg',
          plot: '84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.',
          score: '75'
        },
        {
          title: 'Blade Runner',
          released: '25 Jun 1982',
          director: 'Ridley Scott',
          actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
          plot: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
          score: '89'
        },
        {
          title: 'The Shining',
          released: '13 Jun 1980',
          director: 'Stanley Kubrick',
          actors: 'Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers',
          poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
          plot: 'A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
          score: '63'
        }
      ]
    };
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
    getRatingStars(metascore) {
      const score = parseInt(metascore);
      if (score >= 0 && score <= 20) {
        return '★☆☆☆☆';
      } else if (score > 20 && score <= 40) {
        return '★★☆☆☆';
      } else if (score > 40 && score <= 60) {
        return '★★★☆☆';
      } else if (score > 60 && score <= 80) {
        return '★★★★☆';
      } else if (score > 80 && score <= 100) {
        return '★★★★★';
      } else {
        return '';
      }
    }
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