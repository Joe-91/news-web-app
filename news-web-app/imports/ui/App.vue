<template>
   <v-app id="vuetify-app">
    <div>
    <v-breadcrumbs
      :items="items"
      divider="-"
    ></v-breadcrumbs>
  </div>
  </v-app>
</template>

<script>
import Hello from './components/Hello.vue'
import Info from './components/Info.vue'

export default {
  components: {
    Hello,
    Info,
  },
  data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
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
