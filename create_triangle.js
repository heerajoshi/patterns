const {generateTriangle} = require("./src/pattern_lib.js");

const main = function(){
  let triangleType = process.argv[2];
  let numberOfRow = +process.argv[3];
  console.log(generateTriangle(triangleType,numberOfRow));
}

main();
