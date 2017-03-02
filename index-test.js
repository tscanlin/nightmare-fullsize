const Nightmare = require('nightmare')

require('./index.js')()

// Init nightmare.
var nightmare = new Nightmare({
    show: true,
    openDevTools: true,
    width: 1024,
    height: 768
})

nightmare.goto('http://google.com')
  .setFullsize()
  .evaluate(function() {
    var body = document.querySelector('body')
    console.log('@@@@@@@@@@@@@@', body.scrollHeight);
    return {
      body: {
        width: body.scrollWidth,
        height: body.scrollHeight
      }
    }
  })
  .screenshot('./shot.png')
  // .then((function(result) {
  //   console.log(result);
  // }))
  // .then(nightmare.end())
  .getWindowSize()
  .end()
  .then(function(result) {
    console.log(result);
    console.log({a: 1});
  })
  .catch(function(e) {
    console.log('catch');
    console.log(e);
  })

// console.assert(true, 'dsgdfg')
