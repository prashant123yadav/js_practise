const EventEmitter = require("events");

const myEmitter = new EventEmitter();

someFunction = function () {
  console.log("somethings has happen");
};

myEmitter.on("some event", someFunction);
