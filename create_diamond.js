const {generateDiamond} = require("./src/pattern_lib.js");
const {readDiamondArgs} = require("./src/utilLib.js");
const main = function(){
  let userArgs = readDiamondArgs(process.argv);
  console.log(generateDiamond(userArgs).join('\n'));
}

main();
