<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <pre>{{ now }}</pre>
      <hr />
      <logo />
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle">
        My pioneering Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
        <nuxt-link to="/other">Link to other</nuxt-link>
        <hr />
        <p>{{ $store.state.message }}</p>
        <div
          class="link"
          @click.exact="$store.commit('doit')"
          @click.shift="$store.commit({ type: 'reset', msg: 'RESET!!' })"
        >
          <a>clicked:{{ $store.state.counter }}</a>
        </div>
      </div>
      <hr />
      <router-link to="/memo">Link to memo</router-link>
      <router-link to="/axios">Link to axios</router-link>
      <router-link to="/auth">Link to auth</router-link>
      <router-link to="/board">Link to board</router-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  },
  data: function() {
    return {
      title: 'Hello',
      message: 'this is nuxt message',
      now: 'wait...'
    };
  },
  methods: {
    doAction: function() {
      this.$store.state.counter++;
    }
  },
  created: function() {
    setInterval(() => {
      var d = new Date();
      this.now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }, 1000);
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

pre {
  padding: 10px;
  font-style: 18pt;
  background-color: #efefef;
}

hr {
  margin: 10px 0;
}

a {
  font-style: 16pt;
}
.link {
  background-color: #def;
  padding: 10px;
}
</style>
