<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data: function() {
    return {
      title: 'Auth',
      message: 'this is message'
    };
  },
  created: function() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAoD45QD-_IwgoMsOcDm2Y8-VltKnXHqeA',
      authDomain: 'smaple-t.firebaseapp.com',
      databaseURL: 'https://smaple-t.firebaseio.com',
      projectId: 'smaple-t',
      storageBucket: 'smaple-t.appspot.com',
      messagingSenderId: '865797095050',
      appId: '1:865797095050:web:6e63c574656272e2caf773'
    };
    firebase.initializeApp(firebaseConfig);

    var provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        self.message = result.user.displayName + ', ' + result.user.email;
      });
  }
};
</script>

<style></style>
