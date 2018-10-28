const {generateDiamond} = require("./src/pattern_lib.js");
const {readDiamondArgs} = require("./src/utilLib.js");
const main = function(){
  let {diamondType,height} = readDiamondArgs(process.argv);
  console.log(generateDiamond(diamondType,height));
}

main();
