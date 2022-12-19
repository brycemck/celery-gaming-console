<template>
  <v-app :theme="theme">
    <NavDrawerVue :rail="rail"></NavDrawerVue>

    <v-app-bar>
      <v-app-bar-nav-icon @click="rail = !rail"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="themeToggle(theme)"
      ></v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import NavDrawerVue from './components/NavDrawer.vue'
  const theme = 'dark'

  export default {
    components: {
      NavDrawerVue
    },
    data () {
      return {
        rail: true,
        theme: this.theme
      }
    },
    methods: {
      themeToggle() {
        if (this.theme == 'light') {
          this.theme = 'dark'
        } else {
          this.theme = 'light'
        }
        // theme = theme === 'light' ? 'dark' : 'light'
        console.log(this.theme)
      }
    }
  }
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>