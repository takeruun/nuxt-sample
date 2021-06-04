<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <router-link to="/">Link to top</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'Other',
      message: 'これは、別ページ'
    };
  }
};
</script>

<style>
.container {
  padding: 5px 15px;
}
h1 {
  font-size: 16px;
  color: #345980;
}
p {
  padding-top: 5px;
  font-style: 20pt;
}
a {
  font-style: 16pt;
}
</style>
