<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand">Video Instructor</a>
      <div class="nav-menu" v-show="userMenu">
        <ul class="nav justify-content-end">
          <li class="nav-item active">
            <a class="nav-link" @click="logout">Sair</a>
          </li>
        </ul>
      </div>
      <div class="nav-menu" v-show="!userMenu">
        <ul class="nav justify-content-end">
          <li class="nav-item active">
            <router-link to="/cadastro" class="nav-link">Cadastrar</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/login" class="nav-link" v>Entrar</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'App',
  data() {
    return {
      userMenu: false,
    };
  },
  methods: {
    logout: function() {
      const that = this;
      firebase
        .auth()
        .signOut()
        .then(() => that.$router.go('/'));
    },
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      if (firebase.auth().currentUser) {
        this.userMenu = true;
      }
    },
  },
};
</script>
<style scoped>
a:link,
a:active,
a:visited,
a:hover {
  text-decoration: none;
  color: #fff;
}
.container-fluid {
  background-color: #f1f5fa;
  height: 100vh;
  padding: 0;
}
.navbar {
  color: #fff;
  background-color: #132266;
  font-family: 'Sunflower', sans-serif;
  justify-content: space-between;
}
.nav-menu {
  float: right;
}
.nav-link {
  cursor: pointer;
}
</style>
