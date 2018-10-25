var pixel = require("node-pixel");
var five = require("johnny-five");
var admin = require("firebase-admin");

var green = '#00FF4A';
var pink = '#FF00E5';

// Fetch the service account key JSON file contents
var serviceAccount = require("./serviceAccountKey.json");

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
    strips: [ {pin: 6, length: 64}, ],
    gamma: 2.8,
  });

  // Just like DOM-ready for web developers.
  strip.on("ready", function() {
    // Listen to data changes
    ref.on('value', function(snapshot) {
      var votes = snapshot.val().votes;

      var multiplier = strip.length / (votes.left + votes.right);

      var leftPixels = multiplier * votes.left;
      var rightPixels = multiplier * votes.right;

      updatePixels(leftPixels, rightPixels);
    });
  });
});

function updatePixels(left, right) {
  if (!left & !right) {
    var lengthHalfed = strip.length / 2;
    left = lengthHalfed;
    right = lengthHalfed;
  } else {
    left = Math.floor(left);
    right = Math.floor(right);
  }

  for (var i = 0; i < left; i++) {
    strip.pixel(i).color(pink);
  }

  for (i = left; i < (left + right); i++) {
    strip.pixel(i).color(green);
  }

  strip.show();
}