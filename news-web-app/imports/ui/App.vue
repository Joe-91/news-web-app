<template>
<!-- template works like our html  -->
  <v-app id="inspire">
    <!-- to load the app bar component  -->
    <AppBar />

    <v-main>
      <v-container>
        <!-- search box row  -->
        <v-row no-gutters>
          <v-col cols="8" offset="2">
            <h1 class="text-md-center">NewsApp</h1>
            <p class="text-md-center">
              Get the latest news from <b>NewsApp</b> using the <b>Bing</b> news
              search engine and api, you can search any type of news sports,
              economy and many other
            </p>
            <!-- v-text-field is our search box  -->
            <!--@keyup.enter is an event listener used when the enter key is pressed to initiate search  -->
            <!-- @click this is also an event listener to clear the text inside the search box  -->
            <!-- v-model is an event listener as well to save all text input from the user inside searchQuery variable -->
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

        <!-- news categories row -->
        <v-row no-gutters>
          <v-col cols="12">
            <!-- value=value is to store the value of which tab we clicked  -->
            <v-bottom-navigation :value="value" color="blue" grow>
              <!-- v-for is a loop that goes throgh newsCategories vars and saves them one by one in newsCategory  -->
              <!-- :key gives unique id to each button using the stored key in newsCategories variables -->
              <!-- for each button we add @click event listener so when it's clicked it will search by that category only -->
              <!-- span and v-icon is used to display the name and the icon of each news category from newsCategories variables -->
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

        <!-- news row  -->
        <v-row no-gutters class="white rounded-b">
          <!-- every one row is  12 col -> 3 col = 1 news card  -->
          <!-- v-for is a loop that loops over each article inside the news array -->
          <!-- in every row create 4 newsCard and pass the values of the properties in it  -->
          <v-col v-for="article in news" :key="article.message" cols="3">
            <!-- component that we created  -->
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
// import every component we created so we can use it in templates
import axios from "axios";
import AppBar from "./components/layout/AppBar";
import AppFooter from "./components/layout/AppFooter";
import NewsCard from "./components/news/NewsCard";

export default {
  name: "app",
  //
  components: {
    AppBar,
    AppFooter,
    NewsCard,
  },
  // here in data we define all the needed data variables (4 variables)
  data() {
    return {
      // value variable is to save the number of tab we are in ex(trending is 0 - politic is 1 and sports 2 ...)
      value: 0,
      // searchQuery var to save the entered text in search box
      searchQuery: "",
      // newsCategories variable is to store the defined values of the news categories tab below the search bar.
      newsCategories: [
        { key: "trending", name: "Trending", icon: "mdi-history" },
        { key: "politic", name: "Politics", icon: "mdi-bank-outline" },
        { key: "sports", name: "Sports", icon: "mdi-football" },
        { key: "health", name: "Health", icon: "mdi-human-female-boy" },
        { key: "economy", name: "Economy", icon: "mdi-chart-line" },
        { key: "environment", name: "Environment", icon: "mdi-palm-tree" },
        { key: "news", name: "General", icon: "mdi-earth" },
      ],
      // news var is to save the returned result from bing
      news: [],
    };
  },
  // when the page loads everything in "mounted" function will be executed. (loading the page for the first time)(it will load all the trending news)
  mounted() {
    this.getNewsByCategory("trending");
  },

  methods: {
    // this function allows the user to clear the search text box by clicking on an X mark on the right.
    clearSearchQuery() {
      this.searchQuery = "";
    },
    // after we get the user typed text from the search box we check it with .length that it has string and not empty.
    // if it has text then we pass the searchQuery value to getNewsByCategory function. so it can look it up in bing news api.
    GetNewsFromSearchQuery() {
      if (this.searchQuery.length) {
        this.getNewsByCategory(this.searchQuery);
      }
    },
    // make a function call to bing news search api and save the result in the news array (this.news)
    getNewsByCategory(query) {
      //Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
      // It can be used in plain JavaScript or with a library such as Vue or React.
      axios
        // send a get request to search in bing news API and set it's properties below
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
          // bing API key is used below
          headers: {
            "x-bingapis-sdk": "true",
            "x-rapidapi-key":
              "6456ddeffamsh8708d5396b515f4p1f747fjsn8d64ba175518",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
            useQueryString: true,
          },
        })
        // after the request we recieve a jason response of the news. And store it's values in "this.news"
        .then((response) => {
          this.news = response.data.value;
        })
        // if there was an error, this function will display it in consol
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
