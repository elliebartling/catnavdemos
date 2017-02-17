import Unsplash from 'unsplash-js';
const unsplash = new Unsplash({
  applicationId: "8be22817057bb90cda5aa095e3b870dc81d4c0bdd8f2d42addff54e33e942ae8",
  secret: "f9e7f058ad5d02beea4be7f0969ea47aaaa5ca866d1f6567d38689b94dfe197c",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
});

var photos = unsplash.photos.searchPhotos("jewelry")
  .then((response) => {
    console.log(response)
  })

var uh = require('unsplash')
var Masonry = require('masonry-layout')

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    items: [],
    itemLimit: 40
  },
  methods: {
    createItems: function() {
      var app = this
      console.log(app.itemLimit)

      for (var i = 0; i < app.itemLimit; i++) {
        var item = {
          title: 'a title!',
          src: app.getRandomImage()
        }
        console.log(item)
        app.items.push(item)
      }
    },
    getRandomImage: function() {
      var imageHeights = [300, 700, 300, 300]
      var imgNum = Math.floor(Math.random() * (1084 - 700) + 700)
      var imgSize = imageHeights[Math.floor(Math.random() * imageHeights.length)]
      // return uh(300,imgSize, 'image='+ imgNum)
      return "http://unsplash.it/g/300/" + imgSize + "/?random"
    }
  },
  mounted() {
    var app = this
    console.log("creating items")
    app.createItems()
  }
})


// $(document).ready(function() {
//   var m = new Masonry('.content', {
//     itemSelector: '.item'
//   })
// })
