(function() {
  this.ChromeExtensionDetector = (function() {
    function ChromeExtensionDetector() {}

    ChromeExtensionDetector.detect = function(url) {
      var promise;
      if (url == null) {
        throw 'No extension url defined';
      }
      promise = new Promise(function(resolve, reject) {
        var client;
        client = new XMLHttpRequest;
        client.open("GET", "chrome-extension://" + url, true);
        client.send(null);
        client.onload = function() {
          return resolve(true);
        };
        return client.onerror = function() {
          return resolve(false);
        };
      });
      return promise;
    };

    ChromeExtensionDetector.jabberGuest = function() {
      var url;
      url = "jbglbakaieakcdiaiabbihafndhapfki/noop.js";
      return this.detect(url);
    };

    ChromeExtensionDetector.chromeCast = function() {
      var url;
      url = "boadgeojelhgndaghljhdicfkmllpafd/api_iframe.html";
      return this.detect(url);
    };

    return ChromeExtensionDetector;

  })();

}).call(this);
