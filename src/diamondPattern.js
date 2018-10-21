const generateLine = function(symbol,noOfSymbol){
  let line = "";
  for(let index = 1;index <= noOfSymbol; index++){
    line+= symbol;
  }
  return line;
}

const firstFilledDiam = function(height){
  let output = "";
  let nextLine = "";
  let noOfSpaces = Math.floor(height/2);

  for(index=1;index <= height; index = index+2){
    output += nextLine + generateLine(" ",noOfSpaces) +generateLine("*",index);
    nextLine = "\n";
    noOfSpaces--;
  }
  return output;
}

const secFilledDiam = function(height){
  let output = "";
  let noOfStar = height - 2;

  for(let index=1;index < height/2; index++){
    output += "\n" + generateLine(" ",index) +generateLine("*",noOfStar);
    noOfStar = noOfStar-2;
  }
  return output;
}

const generateFilledDiamond = function(height){
  let firstHalf = firstFilledDiam(height);
  let secondHalf= secFilledDiam(height);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const hollowDiamdFirsthalf = function(height){
  let output = "";
  let noOfSpaces2 = 0;
  let star = "";
  let noOfSpaces = Math.floor(height/2);
  for(index=1;index <= height; index = index+2){
    output +=generateLine(" ",noOfSpaces) +"*" +generateLine(" ",noOfSpaces2) +star  +"\n";
    noOfSpaces--;
    noOfSpaces2 = index;
    star = "*"
  }
  return output;
}

const hollowDiamdSechalf = function (height){
  let star1 = "*";
  let spaces2 = 1;
  let innerSpaces = height-4;
  let output = "";

  for(let index = 1;index <= height/2 - 1 ; index++){
    output += generateLine(" ",spaces2) + "*" +generateLine(" ",innerSpaces) +star1 +"\n"
    innerSpaces -= 2;
    spaces2++;

  }
  output += generateLine(" ",spaces2) + generateLine("*" ,1);
  return output;
}

const generateHollowDiamond = function(height){
  let firstHalf = hollowDiamdFirsthalf(height);
  let secondHalf= hollowDiamdSechalf(height);
  let diamond = firstHalf + secondHalf;
  return diamond;
}


const angledSecHalfDim = function(numOfLines){
  let outerSpaces = 1;
  let innerSpaces = numOfLines-2;
  let secondHalf = "";
  let star = "*";
  let space = " ";
  let nextLine = "\n";
  let forwardSlash = "/";
  let backwardSlash = "\\";

  secondHalf += nextLine + star + generateLine(space,innerSpaces) + star;
  for(let lineNum = numOfLines; lineNum > 3; lineNum-=2){
    innerSpaces -= 2;
    secondHalf += nextLine + generateLine(space,outerSpaces) + backwardSlash;
    secondHalf += generateLine(space,innerSpaces) + forwardSlash;
    outerSpaces++;
  }
  secondHalf += "\n" + generateLine(space,outerSpaces) + star;
  return secondHalf;
}

const angledfirstHalfDiam = function(numOfLines){
  let outerSpaces = Math.floor(numOfLines/2);
  let innerSpaces = 1;
  let firstHalf = "";
  let star = "*";
  let space = " ";
  let forwardSlash = "/";
  let backwardSlash = "\\";
  let nextLine = "\n";

  firstHalf += generateLine(space,outerSpaces) + star;
  for(let lineNum = 3; lineNum < numOfLines-1; lineNum+=2){
    outerSpaces--;
    firstHalf += nextLine + generateLine(space,outerSpaces) + forwardSlash;
    firstHalf += generateLine(space,innerSpaces) + backwardSlash;
    innerSpaces += 2;
  }
  return firstHalf;
} 

const generatAngledeDia = function(height){
  let firstHalf = angledfirstHalfDiam(height);
  let secondHalf = angledSecHalfDim(height);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const generateDiamond = function(diamondType,height){
  if(height%2 == 0){
    height--;
  }

  if(diamondType == "filled"){
    console.log(generateFilledDiamond(height));
  }
  if(diamondType == "hollow"){
    console.log(generateHollowDiamond(height));
  }
  if(diamondType == "angled"){
    console.log(generatAngledeDia(height));
  }
}

const main = function(){
  diamondType = process.argv[2];
  height = +process.argv[3];
  return generateDiamond(diamondType,height);
}

main();
