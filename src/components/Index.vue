<template>
  <div class="main container-fluid">
    <h2 class=title>Videos de Treinamento</h2>
        <div class="player">
          <div class="video" v-bind:class="[{ activated : isSelected }, {stoped : isStoped }]" v-html="playVideo">
          </div>
          <h4><span class="badge badge-secondary btn-close" @click="closeVideo" v-show="isSelected">Fechar Vídeo</span></h4>
        </div>
    <div class="content">
      <div class="card" v-for="(video, id) in videos">
        <img class="card-img-top" v-bind:src="'http://img.youtube.com/vi/' +video+ '/hqdefault.jpg'" @click="openVideo(video)">
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
      isSelected: false,
      isStoped: true,
      playVideo: '',
    };
  },
  methods: {
    openVideo: function(video) {
      this.isSelected = true;
      this.isStoped = false;
      this.playVideo = `<iframe width="640" height="440" src="http://www.youtube.com/embed/${video}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    },
    closeVideo: function() {
      this.isStoped = true;
      this.isSelected = false;
      this.playVideo = '';
    },
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
  padding-top: 30px;
  width: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0 auto;
}
.card {
  width: 200px;
  margin: 20px;
}
.stoped {
  display: none;
}
.player {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.player .video {
  margin: 20px auto;
}

.btn-close {
  margin-right: 200px;
  cursor: pointer;
  margin: 0 auto;
}
</style>


