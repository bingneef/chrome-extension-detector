# Chrome Extension Detector
Detect whether a Chrome extension is present on the users system.

# Installation
bower install --save chrome-extension-detector

# How does it work?
Some extensions have publically accessible assets (web_accessible_resources). If that file can be loaded, the extension is present on the system. The downside is that it can only be done using a Promise.done, but hey, you are an awesome developer. You can make it work:)

# Example
```html
<script src="dist/chrome-extension-detector.js"></script>
<script>
  ChromeExtensionDetector.jabberGuest().then(function(data) {console.log("jabberGuest:", data)});
  ChromeExtensionDetector.chromeCast().then(function(data) {console.log("chromeCast:", data)});
  ChromeExtensionDetector.adBlock().then(function(data) {console.log("adBlock:", data)});
</script>
```

## Currently detectable plugins
- Chromecast
- JabberGuest
- AdBlock

If you want to have a extension added, please file an issue with the extension id. I'll see what I can do.
