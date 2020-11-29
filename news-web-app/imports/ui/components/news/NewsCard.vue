<template>
  <v-card class="ma-2 news-card" max-width="400" min-height="390">
    <v-img class="white--text align-end" height="200px" :src="getImage(image)">
      <!-- <v-card-title>{{ name.substring(0, 20) }}</v-card-title> -->
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ getCategory(category) }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      {{ name }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text :href="url" target="_blank"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    image: Object,
    url: String,
    description: String,
    datePublished: String,
    category: String,
    provider: Array,
  },
  data() {
    return {
      defaultImage:
        "https://cdn.cjr.org/wp-content/uploads/2019/05/AdobeStock_139324113-686x371.jpeg",
    };
  },

  methods: {
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