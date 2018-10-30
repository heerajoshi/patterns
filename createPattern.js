const {generatePatterns} = require("./src/pattern_lib.js");
const {readPatternArgs} = require("./src/utilLib.js")
const main = function(){
  let userArgs = readPatternArgs(process.argv)
  console.log(generatePatterns(userArgs));
}

main();

