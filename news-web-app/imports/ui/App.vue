<template>
   <v-app id="vuetify-app">
    <div>
      <searchBar />
    <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>
  </div>
  </v-app>
</template>

<script>
import searchBar from './components/searchBar.vue'
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  name: 'app',
  components: {
    searchBar,
    Hello,
    Info,
  },
  data: () => ({
      items: [
        {
          text: '1111111',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 10',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 20',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
