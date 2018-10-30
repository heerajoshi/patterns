const generateLine = function(symbol,number){
  let line =  new Array(number).fill(symbol);
  return line;
}

const readTriangleArgs = function(userArg){ 
  let triangleType   = userArg[2];
  let numberOfRow    = +userArg[3];
  return {triangleType, numberOfRow};
}

const readRectangleArgs = function(userArg) {
  let typeOfRectangle =  userArg[2];
  let rows            = +userArg[3];
  let columns         = +userArg[4];
  return {typeOfRectangle, rows, columns};
}

const readDiamondArgs = function(userArg) {
  let diamondType = userArg[2];
  let height      = +userArg[3];
  return {diamondType, height};
}

const readPatternArgs = function(userArg){
  let typeOfRectangle = userArg[2];
  let rows            = +userArg[3];
  let column          = +userArg[4];
  return {typeOfRectangle,rows,column}
}
exports.readPatternArgs   = readPatternArgs;
exports.readRectangleArgs = readRectangleArgs;
exports.readDiamondArgs   = readDiamondArgs;
exports.readTriangleArgs  = readTriangleArgs;
exports.generateLine      = generateLine;
