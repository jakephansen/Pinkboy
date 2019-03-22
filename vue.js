//Jacob Hansen, jphans, 62567857

var Header = new Vue({
  el: '#Top',
  data: {
    cart: [
      {
        quantity2: 1,
        color: "hue-rotate(0deg)"
      }
    ],
    bagTotal:  0 ,
    quantity: 0,
    show: false,
    shouldSee: 'none'

  },
  methods: {
    mouseOver: function(){
      this.show = true
      this.shouldSee = 'block'
    },
    mouseLeave: function(){
      this.show = false
      this.shouldSee = 'none'
    },
    checkReset: function(){
      if (Middle.visibility == 'visible'){
        Middle.visibility = 'hidden'
        Middle.message = '1'
      }
    }

  }
});


var Store = new Vue({
  el: '.store',
  data: {

  },
  methods: {

  }
});


var Picture_Container = new Vue({
  el: '.picture_container',
  data: {
    picture: "img/art/0.jpeg"
  },
  methods: {

  }
});
