<template>
  <div class="login">
    <h3 class="title">Login</h3>
    <input class="form-control" type="text" v-model="email">
    <input class="form-control" type="password" v-model="password">
    <button class="btn btn-primary" @click="signIn">Entrar</button>
    <p class="mensagem">Ainda não tem uma conta? Crie a sua conta <router-link to="cadastro">aqui</router-link></p>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn: function() {
      const that = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(that.email, that.password)
        .then(
          user => {
            that.$toaster.info('Usuário logado!');
            setTimeout(function() {
              that.$router.push('/index');
            }, 1000);
          },
          err => that.$toaster.error('Usuário ou senha incorretos')
        );
    },
  },
};
</script>
<style scoped>
.login {
  font-family: 'Sunflower', sans-serif;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  padding: 60px;
}

.title {
  margin-bottom: 40px;
}
.form-control {
  margin-bottom: 20px;
}

.mensagem {
  margin-top: 30px;
}
</style>

