const {generateRectangle} = require("./src/pattern_lib.js");
const {readRectangleArgs} = require("./src/utilLib.js")
const main = function(){
  let userArgs = readRectangleArgs(process.argv)
  console.log(generateRectangle(userArgs));
}

main();
