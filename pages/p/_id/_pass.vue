<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p v-html="message">no message</p>
    <hr />
    <div class="right">
      <router-link to="/">Go to top</router-link>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'Login'
    }
  },
  validate({ params }) {
    if (params.id == undefined || params.pass == undefined) {
      return false
    } else {
      return true
    }
  },
  computed: {
    message: function() {
      let id =
        this.$route.params.id != undefined
          ? this.$route.params.id
          : '*** no id ***'
      let pass =
        this.$route.params.pass != undefined
          ? this.$route.params.pass
          : '*** no password ***'
      return 'ID: ' + id + '<br>PASS:' + pass
    }
  }
}
</script>

<style>
.container {
  padding: 10px 5px;
}
h1 {
  font-style: 60px;
}
p {
  padding-top: 5px;
  font-style: 20pt;
}
a {
  font-style: 16pt;
}
.right {
  text-align: right;
}
</style>
