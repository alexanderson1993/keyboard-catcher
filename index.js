const HID = require("node-hid");

var Keyboard = require("node-hid-stream").Keyboard;

// Just load up all of the devices
// Use a reduce to eliminate duplicates
const devices = HID.devices().reduce(
  (prev, next) => ({
    ...prev,
    [`${next.vendorId}-${next.productId}`]: {
      productId: next.productId,
      vendorId: next.vendorId
    }
  }),
  {}
);
const keyboards = [];
Object.values(devices).forEach(f => {
  const keyboard = new Keyboard(f);
  keyboard.on("data", function(data) {
    // The user has pressed w, a, s & d (simultaneously (why? I don't know))
    console.log(data); //  "wasd"
  });
  keyboards.push(keyboard);
  console.log(keyboard);
});

// Stop all possible ways of exiting

process.stdin.resume(); //so the program will not close instantly

function exitHandler(options, exitCode) {
  keyboards.forEach(f => f.close());
  if (exitCode || exitCode === 0) console.log(exitCode);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on("exit", exitHandler.bind(null, { cleanup: true }));

//catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on("SIGUSR1", exitHandler.bind(null, { exit: true }));
process.on("SIGUSR2", exitHandler.bind(null, { exit: true }));

//catches uncaught exceptions
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));

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
