<template>
  <div>
    <form @submit.prevent="vueflix">
      <label for="search"><b>Recherche</b></label>
      <input type="text" placeholder="Rechercher un film" id="search" v-model="query" />
      <button type="submit">Rechercher</button>
    </form>
    <p v-if="countFilm > 0">Nombre de resultat : {{ countFilm }}</p>
    <ul class="films" v-if="filmsEnResultat.length > 0">
      <li v-for="film in filmsEnResultat" class="film card" :key="film.title">
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
</template>
<script>
export default {
  data() {
    return {
      query: '',
      filmsEnResultat: [],
      films: [
        {
          released: '19 Dec 1997',
          director: 'James Cameron',
          actors: 'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates',
          title: 'Titanic',
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
    }
  },
  computed: {
    countFilm() {
      return this.filmsEnResultat.length;
    }
  },
  watch: {
    query() {
      this.vueflix();
    }
  },
  methods: {
    vueflix() {
      this.filmsEnResultat = [];
      this.films.forEach((film) => {
        if (film.title.toLowerCase().includes(this.query.toLowerCase())) {
          this.filmsEnResultat.push(film);
        }
      });
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
  }
}
</script>
