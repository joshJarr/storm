var pixel = require("node-pixel");
var five = require("johnny-five");
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
// var serviceAccount = require("./serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://storm-90c94.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref();

var board = new five.Board();
var strip = null;

board.on("ready", function() {
  // Define our hardware.
  // It's a 12px ring connected to pin 6.
  strip = new pixel.Strip({
    board: this,
    controller: "FIRMATA",
    strips: [ {pin: 6, length: 150}, ],
    gamma: 2.8,
  });

  // Just like DOM-ready for web developers.
  strip.on("ready", function() {
    let centre = 75;

    // Set stripe 50% red and 50% gree
    let i = 0;
    while(i < strip.length) {
      if (i < strip.length / 2) {
        strip.pixel(i).color("#FF0000");
      } else {
        strip.pixel(i).color("#00FF00");
      }
      i++
    }
    strip.show();

    // Listen to data changes
    ref.on('value', function(snapshot) {
      console.log(snapshot.val());
      if (snapshot.val() === 'red') {
        strip.pixel(centre).color('#ff0000')
        centre++;
      } else if (snapshot.val() === 'green') {
        strip.pixel(centre).color('#00ff00')
        centre--;
      }
    });

    // Allow command interface:
    var stdin = process.openStdin();
    stdin.addListener("data", function(d) {
      if (d.toString() === 'r') {
        strip.pixel(centre).color('#ff0000')
        centre++;
      } else {
        strip.pixel(centre).color('#00ff00')
        centre--;
      }
      strip.show();
    });

  });
});