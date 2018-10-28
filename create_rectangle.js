const {generateRectangle} = require("./src/pattern_lib.js");
const {readRectangleArgs} = require("./src/utilLib.js")
const main = function(){
  let {typeOfRectangle,rows,columns} = readRectangleArgs(process.argv)
  console.log(generateRectangle(typeOfRectangle,rows,columns));
}

main();
