<template>
  <div id="app">
    <v-app fluid>
      <v-card dark class="overflow-hidden rounded-0">
        <v-card-text>
          <p
            class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h2 text-xs-h2 white--text text-justify"
          >
            Anqi Qu
          </p>
        </v-card-text>
        <v-divider borderWidth="10" class="mx-5 white"></v-divider>

        <v-card-actions id="nav" class="mx-6 d-flex justify-center"> 
          <v-row class="justify-center">
            <v-col class="mr-1" v-for="config in configTitle" :key="config">
              <router-link :to="`${config.url}`" class="headline"> {{ config.name}}</router-link>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>

      <router-view />
    </v-app>
    
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      configTitle:[
        {
          name:'Home', 
          url:'/'
        },
        {
          name:'Music', 
          url:'/music'
        },
        {
          name:'Videos', 
          url:'/videos'
        }, 
        {
          name:'CV', 
          url:'/anqiCv'
        }
      ]
    };
  },
  components: {},
};
</script>

<style lang="scss">
// This is common style
$body-font-family: "Oxygen";
$title-font: "Comfortaa";
a {
  text-decoration: none;
}
.v-application #nav a {
  color: white;
}
.application {
  font-family: "Times New Roman", Times, sans-serif !important;
}
.headline,
.title,
.subheading {
  font-family: $body-font-family !important;
}
.v-divider {
  border-color: rgba(255, 255, 255, 0.12);
  border-width: 2px;
}
</style>
