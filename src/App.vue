<template>
  <div id="app">
    <side-nav></side-nav>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

import SideNav from '@/components/SideNav';

export default {
  name: 'app',
  components: {
    [SideNav.name]: SideNav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

$nav-width: 56px;

html,
body,
#app {
  height: 100%;
  margin: 0;
}

html,
body {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #app {
    #side-nav {
      width: $nav-width;
    }
    padding-left: $nav-width;
  }
}
</style>