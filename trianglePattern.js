const {makeTriangle} = require("./src/pattern_lib.js");

const main = function(){
  let triangleType = process.argv[2];
  let numberOfRow = +process.argv[3];
  console.log(makeTriangle(triangleType,numberOfRow));
}

main();
