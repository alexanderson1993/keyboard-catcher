var gkm = require("gkm");

// Listen to all key events (pressed, released, typed)
gkm.events.on("key.*", function(data, b, c, d) {
  console.log(this);
  console.log(data);
  console.log(b, c, d);
});

// Stop all possible ways of exiting

// process.exit = () => {};
// process.on("SIGINT", function() {
//   console.log("Caught interrupt signal");
// });

// if (process.platform === "win32") {
//

//   rl.on("SIGINT", function() {
//     // Do nothing
//   });
// }
