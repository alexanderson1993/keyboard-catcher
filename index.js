// var gkm = require("gkm");

// // Listen to all key events (pressed, released, typed)
// gkm.events.on("key.*", function(data, b, c, d) {
//   console.log(this);
//   console.log(data);
// });

const ioHook = require("iohook");

ioHook.on("keydown", event => {
  console.log(event); // { type: 'mousemove', x: 700, y: 400 }
});
// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);

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
