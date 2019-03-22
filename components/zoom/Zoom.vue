<template>
  <div class="zoomed">

    <img id="option" src="../../img/art/0.jpeg"  > </img>
    <div id="payPal">
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
    <input type="hidden" name="cmd" value="_s-xclick">
    <table>
    <tr><td><input type="hidden" name="on0" value="Options">Options</td></tr><tr><td><select name="os0">
    	<option value="sticker">sticker $5.00 USD</option>
    	<option value="13X9">13X9 $10.00 USD</option>
    	<option value="13X18">13X18 $20.00 USD</option>
    </select> </td></tr>
    </table>
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
  </div>
  </div>

</template>

<script>

export default {
  name: 'zoom-component',
  props: ['path'],
  data () {
    return {
      here: "hello from Zoom.vue"

    }
  },
  methods: {

  }


};

</script>

<style lang="scss" scoped>

.zoomed {


  height: 500px;
  border-style: double;
  margin: auto;
  width: 60%;
  padding: 10px;

}
#payPal {


  float: right;
  margin-right: 30px;
  margin-top: 30px;
  // display: inline-block;
  // position: relative;
  // vertical-align: middle;
  // margin-left: 100px;



}

#option {
  max-width:50%;
  max-height:90%;
  display: inline-block;
  position: relative;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}

</style>
