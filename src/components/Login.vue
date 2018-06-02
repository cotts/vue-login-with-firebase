<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <button @click="signIn">Entrar</button>
    <p> {{ mensagem }}</p>
    <p>Ainda não tem uma conta? Você pode criar uma</p>
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
      mensagem: '',
    };
  },
  methods: {
    signIn: function() {
      const that = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(that.email, that.password)
        .then(user => {
          alert('Usuário Conectado!');
          setTimeout(function() {
            that.$router.go('/index');
          }, 1000);
        }, err => (that.mensagem = 'Usuário ou senha incorretos!'));
    },
  },
};
</script>
