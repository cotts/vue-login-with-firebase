<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg">
      <router-link to="/" class="navbar-brand">Video Instructor</router-link>
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
    /** logoff method  */
    logout: function() {
      const that = this;
      firebase
        .auth()
        .signOut()
        .then(() => that.$router.go('/'));
    },
    /** change menu if logged in */
    switchMenu: function() {
      if (firebase.auth().currentUser) {
        this.userMenu = true;
      }
    },
  },
  /** watch the scope to switch menu */
  watch: {
    $route(to, from) {
      this.switchMenu();
    },
  },
  /** check if the value is true or false when the view is mounted */
  mounted() {
    this.switchMenu();
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
