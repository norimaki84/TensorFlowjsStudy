<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Top</router-link> |
      <router-link to="/bodyPix">BodyPix</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    data() {
      return {}
    },
    computed: {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  //@include sansJpBold();
  //@include sansJpRegular();
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
