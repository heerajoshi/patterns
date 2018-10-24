const {generateDiamond} = require("./src/pattern_lib.js");

const main = function(){
  diamondType = process.argv[2];
  height = +process.argv[3];
  console.log(generateDiamond(diamondType,height));
}

main();
