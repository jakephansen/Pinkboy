<template>

  <div class="picture_layout">

    <img id="thing" src="../../img/art/0.jpeg"  > </img>


  </div>

</template>

<script>

import Store from '../store/Store.vue'
export default {
  name: 'art-component',
  props: ['path'],
  data () {
    return {
      here: "hello from art.vue"

    }
  },
  methods: {
    what_source () {
      console.log(this.path)
      this.path = this.path
    }
  },
  components: {
    'store-component': Store,
  }


};




</script>

<style lang="scss" scoped>

.picture_layout {
  display: flex;
  width: 300px;
  height: 300px;
  border-style: double;
  float: left;
  margin: 10px;
}

#thing {

  max-width:90%;
  max-height:90%;
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

}
#thing:hover {
  max-width: 100%;
  max-height: 100%;
}

</style>
