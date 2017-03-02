var Nightmare = require('nightmare')

module.exports = function resizeFullPage() {
  Nightmare.action('setFullsize', function(name, options, parent, win, renderer, done) {
    parent.respondTo('setFullsize', function(done) {
      win.webContents.executeJavaScript(
        "new Promise(function(resolve) {" +
          "var body = document.querySelector('body');" +
          "resolve({" +
            "width: body.scrollWidth," +
            "height: body.scrollHeight" +
          "})" +
        "})", function(d) {
        win.setContentSize(d.width, d.height);
        done()
      })
    });
    done()
  }, function(done) {
    this.child.call('setFullsize', done)
  });

  Nightmare.action('getWindowSize', function(done) { // function(name, options, parent, win, renderer, done) {
    this.evaluate_now(function() {
      var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      return {
        height: h,
        width: w
      }
    }, done)
  //   parent.respondTo('getWindowSize', function(done) {
  //     return win.getContentSize(done);
  //     done()
  //   });
  //   done()
  // }, function(done) {
  //   this.child.call('getWindowSize', done)
  });

}
