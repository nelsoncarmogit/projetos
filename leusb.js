var monitor = require('node-usb-detection');


//console.log("Usb Devices:\n", monitor.list());

monitor.add(function(device) {
    console.log("added device:\n", device);
});

monitor.remove(function(device) {
    console.log("removed device:\n", device);
});

monitor.change(function(device) {
    console.log("device changed:\n", device);
});