<template>
  <v-app id="inspire">
    <AppBar />

    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col cols="8" offset="2">
            <h1 class="text-md-center">NewsApp</h1>
            <p class="text-md-center">
              Get the latest news from <b>NewsApp</b> using the <b>Bing</b> news
              search engine and api, you can search any type of news sports,
              economy and many other
            </p>
            <v-text-field
              solo
              prepend-inner-icon="mdi-magnify"
              label="Search for the latest news"
              clearable
              v-model="searchQuery"
              @keyup.enter="GetNewsFromSearchQuery"
              @click:clear="clearSearchQuery"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row no-gutters>
          <v-col cols="12">
            <v-bottom-navigation :value="value" color="blue" grow>
              <v-btn
                v-for="newsCategory in newsCategories"
                :key="newsCategory.key"
                @click="getNewsByCategory(newsCategory.key)"
              >
                <span>{{ newsCategory.name }}</span>
                <v-icon>{{ newsCategory.icon }}</v-icon>
              </v-btn>
            </v-bottom-navigation>
          </v-col>
        </v-row>

        <v-row no-gutters class="white rounded-b">
          <v-col v-for="article in news" :key="article.message" cols="3">
            <NewsCard
              :name="article.name"
              :image="article.image"
              :url="article.url"
              :description="article.description"
              :datePublished="article.datePublished"
              :category="article.category"
              :provider="article.provider"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
// importing searchBar.vue file which i created under components
import axios from "axios";
import AppBar from "./components/layout/AppBar";
import AppFooter from "./components/layout/AppFooter";
import NewsCard from "./components/news/NewsCard";

export default {
  name: "app",
  //added searchBar component here so it can be exported
  components: {
    AppBar,
    AppFooter,
    NewsCard,
  },
  data() {
    return {
      value: 0,
      searchQuery: "",
      newsCategories: [
        { key: "trending", name: "Trending", icon: "mdi-history" },
        { key: "politic", name: "Politics", icon: "mdi-bank-outline" },
        { key: "sports", name: "Sports", icon: "mdi-football" },
        { key: "health", name: "Health", icon: "mdi-human-female-boy" },
        { key: "economy", name: "Economy", icon: "mdi-chart-line" },
        { key: "environment", name: "Environment", icon: "mdi-palm-tree" },
        { key: "news", name: "General", icon: "mdi-earth" },
      ],
      news: [],
    };
  },

  mounted() {
    this.getNewsByCategory("trending");
  },

  methods: {
    clearSearchQuery() {
      this.searchQuery = "";
    },
    GetNewsFromSearchQuery() {
      if (this.searchQuery.length) {
        this.getNewsByCategory(this.searchQuery);
      }
    },
    getNewsByCategory(query) {
      axios
        .get("https://bing-news-search1.p.rapidapi.com/news/search", {
          params: {
            q: query,
            count: "28",
            cc: "US",
            originalImg: "true",
            safeSearch: "Off",
            setLang: "EN",
            textFormat: "Raw",
          },
          headers: {
            "x-bingapis-sdk": "true",
            "x-rapidapi-key":
              "6456ddeffamsh8708d5396b515f4p1f747fjsn8d64ba175518",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            useQueryString: true,
          },
        })
        .then((response) => {
          this.news = response.data.value;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
body,
main.v-main {
  background: #f1f1f1;
}
</style>
