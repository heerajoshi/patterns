
const generateLine = function(character , noOfCharacter){
  line = "";
  for(let totalChar = 1; totalChar <= noOfCharacter; totalChar++){
    line+= character;
  }
  return line;
}

const rightAlignedTriangle = function(numberOfRow){
  let output = "";
  let newline = "";
  for(let lineNum = 1; lineNum <= numberOfRow; lineNum++){
    output += newline +generateLine(" ",numberOfRow - lineNum) + generateLine("*",lineNum);
    newline = "\n";
  }
  return output
}

const leftAlignedTriangle = function(numberOfRow){
  let output = "";
  let newline = "";
  for(let lineNum = 1; lineNum <= numberOfRow; lineNum++){
    output += newline + generateLine("*",lineNum);
    newline = "\n";
  }
  return output;
}

const makeTriangle = function(triangleType,numberOfRow){
  if(triangleType == "right"){
    return rightAlignedTriangle(numberOfRow);
  }
  if(triangleType == "left"){
    return leftAlignedTriangle(numberOfRow);
  }
}

const main = function(){
  let triangleType = process.argv[2];
  let numberOfRow = +process.argv[3];
  console.log(makeTriangle(triangleType,numberOfRow));
}

main();
