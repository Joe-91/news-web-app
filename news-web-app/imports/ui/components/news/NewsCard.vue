<template>
   <!-- we created the v-card here from vuetify UI  -->
  <v-card class="ma-2 news-card" max-width="400" min-height="390">
     <!-- send the image value to getImage function then display the result -->
    <v-img class="white--text align-end" height="200px" :src="getImage(image)">

    </v-img>
    <!-- to display the category  -->
    <v-card-subtitle class="pb-0">
      {{ getCategory(category) }}
    </v-card-subtitle>
    <!-- to display the name  -->
    <v-card-text class="text--primary">
      {{ name }}
    </v-card-text>
    <!-- Explore button, we pass to it the url of the article and target="_blank" is used to open it in a new window  -->
    <v-card-actions>
      <v-btn color="orange" text :href="url" target="_blank"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
// define the variables for NewsCard component
// props variables is used to pass values to it from outside the component
  props: {
    name: String,
    image: Object,
    url: String,
    description: String,
    datePublished: String,
    category: String,
    provider: Array,
  },
  // data variables defined inside the component and can only be used here
  data() {
    return {
      defaultImage:
        "https://cdn.cjr.org/wp-content/uploads/2019/05/AdobeStock_139324113-686x371.jpeg",
    };
  },
 
  methods: {
    // check if the there is a value for the image or not and if not we return the default image we created above
    getImage(image) {
      if (image == undefined) {
        return this.defaultImage;
      } else if (image == null) {
        return this.defaultImage;
      } else if (Object.keys(image).length == 0) {
        return this.defaultImage;
      } else {
        return image.contentUrl;
      }
    },
    // check if there is a defind categorie and if not return the default value which is (News)
    getCategory(category) {
      if (category == undefined) {
        return "News";
      } else if (category == null) {
        return "News";
      } else if (!category.length) {
        return "News";
      } else {
        return category;
      }
    },
  },
};
</script>

<style scoped>
.news-card.v-card {
  position: relative;
}

.news-card.v-card .v-card__actions {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>