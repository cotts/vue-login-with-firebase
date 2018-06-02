<template>
  <div class="cadastro">
    <p>Cadastro</p>
    <input type="text" v-model="nome" placeholder="nome">
    <input type="text" v-model="email" placeholder="e-mail">
    <input type="text" v-model="fone" placeholder="elefone">
    <input type="password" v-model="password" placeholder="password">
    <button @click="signUp">Cadastrar</button>
    <p>{{ mensagem }}</p>
  </div>
</template>
<script>
import firebase from 'firebase';

export default {
  name: 'cadastro',
  data() {
    return {
      nome: '',
      email: '',
      fone: '',
      password: '',
      mensagem: '',
    };
  },
  methods: {
    clearForm: function() {
      this.nome = '';
      this.email = '';
      this.fone = '';
      this.password = '';
    },
    signUp: function() {
      const that = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          const profile = firebase.auth().currentUser;
          profile
            .updateProfile({
              displayName: that.nome,
              phoneNumber: that.fone,
            })
            .then(() => {
              that.clearForm();
              that.mensagem = 'Usuário Cadastrado';
            });
        }, err => (that.mensagem = 'Erro no cadastro'));
    },
  },
};
</script>

