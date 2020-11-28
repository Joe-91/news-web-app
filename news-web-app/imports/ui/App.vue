<template>
   <v-app id="vuetify-app">
    <div>
      <!-- added component/element kind of inside this div tag so it displays.-->
      <searchBar />
    <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>
  </div>
  </v-app>
</template>

<script>
// importing searchBar.vue file which i created under components
import searchBar from './components/searchBar.vue'
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  name: 'app',
  //added searchBar component here so it can be exported
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
