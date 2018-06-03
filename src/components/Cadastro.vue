<template>
  <div class="cadastro">
    <h2 class="titulo">Cadastro</h2>
    <div class="dados form-group">
      <input class="form-control" type="text" v-model="nome" placeholder="Digite aqui seu nome">
      <div v-html="validateName"></div>
      <input class="form-control" type="text" v-model="email" placeholder="Coloque seu e-mail">
      <div v-html="validateMail"></div>
      <input class="form-control" type="text" v-model="fone" placeholder="Telefone">
      <div v-html="validatePhone"></div>
      <input class="form-control" type="password" v-model="password" placeholder="Senha">
      <div v-html="validatePass"></div>
      <button class="btn-primary btn-lg btn-block" @click="validateForm">Cadastrar</button>
      <button class="btn-secondary btn-lg btn-block" @click="goBack">Voltar</button>

    </div>
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
      validateName: '',
      validateMail: '',
      validatePhone: '',
      validatePass: '',
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
        .createUserWithEmailAndPassword(that.email, that.password)
        .then(
          user => {
            const profile = firebase.auth().currentUser;
            profile
              .updateProfile({
                displayName: that.nome,
                phoneNumber: that.fone,
              })
              .then(() => {
                that.clearForm();
                that.$toaster.success('Usuário Cadastrado');
              });
          },
          err => that.$toaster.error('Erro ao Cadastrar Usuário')
        );
    },
    validateForm: function() {
      const pattern = new RegExp('@');
      this.nome === ''
        ? (this.validateName =
            '<p class="alet alert-danger"> Nome de usuário é obrigatório<p>')
        : (this.validateName = '');
      !pattern.test(this.email)
        ? (this.validateMail =
            '<p class="alet alert-danger">Endereço de e-mail inválido<p>')
        : (this.validateMail = '');
      this.fone.length <= 4
        ? (this.validatePhone =
            '<p class="alet alert-danger">Telefone inválido<p>')
        : (this.validatePhone = '');
      this.password === ''
        ? (this.validatePass =
            '<p class="alet alert-danger">Senha é obrigatória<p>')
        : (this.validatePass = '');
      if (
        this.validateName === '' &&
        this.validateMail === '' &&
        this.validatePhone === '' &&
        this.validatePass === ''
      ) {
        this.signUp();
      }
    },
    goBack: function() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.cadastro {
  font-family: 'Sunflower', sans-serif;
}
.titulo {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;
}
.cadastro .dados {
  width: 500px;
  margin: 0 auto;
}
.dados input {
  margin-bottom: 20px;
}
</style>

