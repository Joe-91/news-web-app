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
