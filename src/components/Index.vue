<template>
  <div>
    <p @click="logout">Logout</p>
    <h2>Index</h2>
  </div>
</template>
<script>
import firebase from 'firebase';
export default {
  data() {
    return {};
  },
  methods: {
    logout: function() {
      const that = this;
      firebase
        .auth()
        .signOut()
        .then(() => that.$router.replace('/'));
    },
  },
};
</script>

