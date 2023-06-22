<template>
  <li class="film card">
    <img class="poster" :src="poster" />
    <p class="title">
      {{ title }}
      <span class="rating" v-if="metascore !== 'N/A'">{{ getRatingStars(metascore) }}</span>
    </p>
    <dl>
      <dt>Release date</dt>
      <dd>{{ released }}</dd>
      <dt>Director</dt>
      <dd>{{ director }}</dd>
      <dt>Actors</dt>
      <dd>{{ actors }}</dd>
    </dl>
    <p class="plot">{{ plot }}</p>
  </li>
</template>

<script>
export default {
  props: ['title', 'released', 'director', 'actors', 'poster', 'plot', 'metascore'],
  methods: {
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

<style>
/* Styles spécifiques à Film.vue */
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
