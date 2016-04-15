class @ChromeExtensionDetector
  @detect = (url) ->
    throw 'No extension url defined' unless url?
    promise = new Promise (resolve, reject) ->
      client = new XMLHttpRequest
      client.open "GET", "chrome-extension://#{url}", true
      client.send(null)

      client.onload = ->
        resolve(true)

      client.onerror = ->
        resolve(false)

    return promise


  @jabberGuest = ->
    url = "jbglbakaieakcdiaiabbihafndhapfki/noop.js"
    @detect url

  @chromeCast = ->
    url = "boadgeojelhgndaghljhdicfkmllpafd/api_iframe.html"
    @detect url

  @adBlock = ->
    url = "gighmmpiobklfepjocnamgkkbiglidom/img/icon24.png"
    @detect url
