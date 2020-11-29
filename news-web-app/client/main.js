import Vue from 'vue'

import '../imports/ui/plugins'

import App from '../imports/ui/App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Meteor.startup(() => {

    Vue.use(Vuetify);

    const vuetify = new Vuetify();

    new Vue({
        render: (h) => h(App),
        vuetify
    }).$mount('#app')

})