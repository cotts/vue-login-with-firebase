<template>
  <div class="main container-fluid">
    <h2 class=title> Videos de Treinamento</h2>
    <div class="content">
      <div class="card" v-for="(video, id) in videos">
        <img class="card-img-top" v-bind:src="'http://img.youtube.com/vi/' +video+ '/hqdefault.jpg'">
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: [
        'T4ApXdYyYTE',
        'PxLJg6v-u2k',
        'GzExhPvFFgA',
        'YbKMrcP9hYo',
        'ek_RKOAlctg',
        'n8eW8D04tNc',
      ],
    };
  },
};
</script>
<style scoped>
.main {
  font-family: 'Sunflower', sans-serif;
}
.title {
  text-align: center;
  padding: 50px;
}

.content {
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 auto;
}

.card {
  width: 250px;
  margin: 20px;
}
</style>


