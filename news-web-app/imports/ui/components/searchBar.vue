<template>
<!-- created class search which at this point doesnt serve a purpose -->
 <div class="search">
     <!-- Created a title under his h1 tag-->
     <h1> News </h1>
     <!-- this v-form was copied from vuetify Text fields under Form inputs-->
  <v-form>
    <v-container>
      <v-row>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="Solo"
            placeholder="Search news" class="fontAwesome"
            solo
          ></v-text-field>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
  </div>
</template>
<script>
export default {
    //need to add name of component to export so it can be used
    //name:'searchBar',
    //props allows to add text elements. msg is like a variable that will hold a string.
    //this msg will be called in app.vue file
    //props: {
      //  msg: String
    //}
}
</script>