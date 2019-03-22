<template>
  <div>
    <div v-if="showAll"class="rows">

      <art-component  path="../../img/art/0.jpeg" @click.native="clicked_zoom"> </art-component>
      <art-component path="../../img/art/0.jpeg" @click.native="clicked_zoom"> </art-component>
      <art-component path="../../img/art/0.jpeg" @click.native="clicked_zoom"> </art-component>
      <art-component path="../../img/art/0.jpeg" @click.native="clicked_zoom"> </art-component>
    </div>

    <div v-if="zoomedIn">
      <button id="backbutton" @click="unZoom"> Back to Store</button>
      <zoom-component > </zoom-component>

    </div>
  </div>
</template>

<script>

import Art from "../art/Art.vue"
import Zoom from "../zoom/Zoom.vue"

export default {
  name: 'store-component',

  data () {
    return {
      storeee: "hello from store.vue",
      showAll: true,
      zoomedIn: false,
      focusedUrl: ""
    }
  },
  components: {
    'art-component': Art,
    'zoom-component': Zoom

  },
  methods: {
      clicked_zoom: function (event) {
          console.log("yeh")
          this.showAll = false;
          this.zoomedIn = true;
      },
      unZoom (){
        console.log("ddd")
        this.zoomedIn = false;
        this.showAll = true;

      }
  }

};




</script>

<style lang="scss" scoped>


.rows {
  display: inline;
}
#backbutton {
  background-color: pink; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
}

</style>
