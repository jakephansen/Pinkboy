
<template>
  <div id="header-container">
  <header id="Top">
      <div id="col1">
      <img id="Logo" src = "../../img/website/Logo.png">
    </div>
      <!-- <p class="title"> {{name_store}}</p> -->
      <div id="col2">
      <div class="menu">
            <span @click="clicked_home">Home</span>
            <span @click="clicked_store">Store</span>
            <span @click="clicked_commissions">Commissions </span>
      </div>
    </div>
    <div id="col3">
      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
</div>
  </header>
  <div v-if="Store_bool === true">
    <store-component> </store-component>
  </div>
  <div v-if="Home_bool === true">
    <p> Ethan Beers has been designing graphics for a year now. Each graphic comes in either sticker form,
      a 9X11 and a 13X9 option. PinkboyEB does not store any of your data, and payments are secure via
      PayPal. Enjoy Shopping!
    </p>
  </div>
  <div v-if="Commission_bool === true">
    <commish-component> </commish-component>

  </div>
</div>
</template>

<script>
import Store from '../store/Store.vue'
import Commish from '../commish/Commish.vue'

  export default {
    name: 'header-component',

    data () {
      return {
        name_store: 'PinkboyEB',
        Home_bool: true,
        Store_bool: false,
        Commission_bool: false
      }
    },

    components: {
      'store-component': Store,
      'commish-component': Commish

    },

    methods: {
      clicked_store () {
        console.log("whatsup")
        this.Home_bool = false;
        this.Store_bool = true;
        this.Commission_bool = false;
      },
      clicked_home () {
        this.Home_bool = true;
        this.Store_bool = false;
        this.Commission_bool = false;
      },
      clicked_commissions () {
        this.Home_bool = false;
        this.Store_bool = false;
        this.Commission_bool = true;
      }
    }

  };

</script>

<style lang="scss" scoped>

#header-container {
  background-color: pink;
  height: 200px;

}
#Top {
  display: inline-block;
  flex-direction: row;
  height: 200px;
}

#col1 {
  float: left;
  position: relative;

  width: 40%;
  height: 100%;
}
#col2 {
  float: left;
  position: relative;
  display: flex;

  width: 30%;
  height: 100%;
}
#col3 {
  float: left;
  position: relative;
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

// .title {
//   line-height: 40px;
//   font-size: 40px;
//   padding: 10px;
//   margin: 0;
//   font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
//   font-weight: bold;
//   text-align: center;
//   background-color: pink;
//   color: white;
//   letter-spacing: 4px;
// }

.menu {
  display: flex;
  text-align: center;
  font-size: 16pt;
  color: white;
  padding: 10px 0 5px 0;
  vertical-align: center;


}

.menu span {
  margin-right: 30px;
  margin-top: 150px;
  padding: 5px;
  border: 2px solid rgba(255, 255, 255, 0);
}

.menu span:hover {
  color: rgb(180, 166, 143);
  border-bottom: 2px solid rgb(151, 138, 116);
}
#Logo {
  display: flex;
  height: 100%;
  width: 100%;
  vertical-align: center;
  margin-top: auto;
  margin-bottom: auto;

}


</style>
