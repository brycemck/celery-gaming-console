<template>
    <v-navigation-drawer app v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false">
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>

        <v-list-item>
          <v-select
            label="Choose your server..."
            density="compact"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            class="mt-5"
          ></v-select>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item v-for="item in items" :prepend-icon="item.icon" :title="item.title" :value="item.value" router :to="'/' + item.value"></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', value: 'home' },
        { title: 'Players', icon: 'mdi-account-group', value: 'players' },
        { title: 'Server configuration', icon: 'mdi-wrench-cog', value: 'serverconfig'},
        { title: 'Server specs', icon: 'mdi-server', value: 'serverspecs' },
        { title: 'Console', icon: 'mdi-console', value: 'console' },
      ]
    }
  },
  props: ['rail']
}
</script>