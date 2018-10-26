const generateLine = function(symbol,number){
  let line = '';
  for(let num = 1; num <= number; num++){
    line += symbol;
  }
  return line;
}

//---RECTANGLE
const generateFilledRectangle = function(rows,columns){
  let rectangle = "";
  let newLine = "";
  let starLine = generateLine("*",columns);
  
  for(let rowNum = 0; rowNum < rows; rowNum++){
    rectangle += newLine;
    rectangle += starLine;
    newLine = "\n";
  }
  return rectangle;
}

const generateAlternateRectangle = function(rows,columns){
  let rectangle = "";
  let newLine = "";
  let character = "";

  for(let rowNum = 1; rowNum <= rows; rowNum++){
    character = "*";
    
    if(rowNum%2 == 0){
      character = "-";
    }

    rectangle += newLine + generateLine(character,columns);
    newLine = "\n";
  }
  return rectangle;
}

const generateEmptyRectangle = function(rows,columns){
  let rectangle = "";
  let starLine = generateLine("*",columns);
  let spaceLine = generateLine(" ",columns-2);

  rectangle += starLine+"\n";
  for(let rowNum = 2; rowNum < rows; rowNum++){
    rectangle += "*" + spaceLine + "*\n";
  }
  rectangle += starLine;
  return rectangle;
}

const generateRectangle = function(typeOfRectangle,rows,columns){
  if(typeOfRectangle == "filled"){
  return generateFilledRectangle(rows,columns);
  }
  if(typeOfRectangle == "empty"){
    return generateEmptyRectangle(rows,columns);
  }
  if(typeOfRectangle == "alternate"){
    return generateAlternateRectangle(rows,columns);
  }
}

//---TRIANGLE

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

const generateTriangle = function(triangleType,numberOfRow){
  if(triangleType == "right"){
    return rightAlignedTriangle(numberOfRow);
  }
  if(triangleType == "left"){
    return leftAlignedTriangle(numberOfRow);
  }
}
//---DIAMOND

const filledFirstHalf = function(height){
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

const filledSecondHalf = function(height){
  let output = "";
  let noOfStar = height - 2;

  for(let index=1;index < height/2; index++){
    output += "\n" + generateLine(" ",index) +generateLine("*",noOfStar);
    noOfStar = noOfStar-2;
  }
  return output;
}

const generateFilledDiamond = function(height){
  let firstHalf = filledFirstHalf(height);
  let secondHalf= filledSecondHalf(height);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const hollowFirstHalf = function(height){
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

const hollowSecondHalf = function (height){
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
  let firstHalf = hollowFirstHalf(height);
  let secondHalf= hollowSecondHalf(height);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const angledFirstHalf = function(numOfLines){
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


const angledSecondHalf = function(numOfLines){
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

const generatAngledDiamond = function(height){
  let firstHalf = angledFirstHalf(height);
  let secondHalf = angledSecondHalf(height);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const generateDiamond = function(diamondType,height){
  if(height%2 == 0){
    height--;
  }

  if(diamondType == "filled"){
    return generateFilledDiamond(height);
  }
  if(diamondType == "hollow"){
    return generateHollowDiamond(height);
  }
  if(diamondType == "angled"){
    return generatAngledDiamond(height);
  }
}

//---exports
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
