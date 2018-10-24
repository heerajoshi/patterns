const {generateRectangle} = require("./src/pattern_lib.js");

const main = function(){
  let typeOfRectangle = process.argv[2];
  let rows = +process.argv[3];
  let columns = +process.argv[4];
  console.log(generateRectangle(typeOfRectangle,rows,columns));
}

main();
