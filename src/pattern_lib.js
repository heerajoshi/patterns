
const generateLine = function(symbol,number){
  let line =  new Array(number).fill(symbol);
  return line;
}

//---RECTANGLE

const generateFilledRectangle = function(rows,columns){
  let rectangle = [];
  let starLine = generateLine("*",columns).join('');
  for(let rowNum = 0; rowNum < rows; rowNum++){
    rectangle.push( starLine) 
  }
  return rectangle;
}

const generateEmptyRectangle = function(rows,columns){
  let rectangle = [];
  let starLine = generateLine("*",columns).join('');
  let spaceLine = "*" + generateLine(" ",columns-2).join('') + "*";
  rectangle.push(starLine);
  for(let rowNum = 2; rowNum < rows; rowNum++){
    rectangle.push(spaceLine);
  }
  rectangle.push(starLine);
  return rectangle;
}


const generateAlternateRectangle = function(rows,columns){
  let rectangle = [];
  for(let rowNum = 1; rowNum <= rows; rowNum++){
    character = "*";
    if(rowNum%2 == 0){
      character = "-";
    }
    let line = generateLine(character,columns).join('');
    rectangle.push(line);
  }
  return rectangle;
}

const generateRectangle = function(userArgs){
  let {typeOfRectangle,rows,columns} = userArgs;
  let patternsType = {filled: generateFilledRectangle, empty: generateEmptyRectangle, alternate: generateAlternateRectangle}
  return patternsType[typeOfRectangle](rows,columns).join('\n');
}

//---TRIANGLE

const rightAlignedTriangle = function(numberOfRow){
  let output = [];
  let lineNumber= 1;
  for(let lineNum = 0; lineNum < numberOfRow; lineNum++){
    let space = generateLine(" ",numberOfRow - lineNumber).join('');
    let star =  generateLine("*",lineNumber).join('');
    let line = space + star
    output.push(line);
    lineNumber++;
  }
  return output
}

const leftAlignedTriangle = function(numberOfRow){
  let output = [];
  let lineNumber = 1;
  for(let lineNum = 0; lineNum < numberOfRow; lineNum++){
    let space = generateLine(" ",numberOfRow - lineNumber).join('');
    let star  = generateLine("*",lineNumber).join('');
    let line  = star + space;
    output.push(line);
    lineNumber++;
  }
  return output;
}

const generateTriangle = function(triangleDetail){
  let {triangleType, numberOfRow} = triangleDetail;
  let patternsType = {right: rightAlignedTriangle,left: leftAlignedTriangle}
  return patternsType[triangleType](numberOfRow).join('\n');
}

//---DIAMOND

const filledFirstHalf = function(height){
  let firstHalf = [];
  let noOfSpaces = Math.floor(height/2);
  for(index=1;index <= height; index = index+2){
    let space = generateLine(" ",noOfSpaces).join('') 
    let star = generateLine("*",index).join('');
    let line = space + star + space;
    firstHalf.push(line);
    noOfSpaces--;

  }
  return firstHalf;
}

const filledSecondHalf = function(height){
  let secondHalf = [];
  let noOfStar = height - 2;
  for(let index=1;index < height/2; index++){
    let space =  generateLine(" ",index).join('');
    let star  =  generateLine("*",noOfStar).join('');
    let line  =  space + star + space;
    secondHalf.push(line);
    noOfStar = noOfStar-2;
  }
  return secondHalf;
}

const generateFilledDiamond = function(height){
  let firstHalf = filledFirstHalf(height);
  let secondHalf= filledSecondHalf(height);
  let diamond = firstHalf.concat(secondHalf);
  return diamond;
}

const hollowFirstHalf = function(height){
  let firstHalf = [];
  let noOfSpaces2 = 0;
  let outerstar = "";
  let noOfSpaces = Math.floor(height/2);
  for(index=1;index <= height; index = index+2){
    let space = generateLine(" ",noOfSpaces).join('')
    let star = "*" +generateLine(" ",noOfSpaces2).join('') + outerstar;
    let line = space + star + space;
    firstHalf.push(line);
    noOfSpaces--;
    noOfSpaces2 = index;
    outerstar = "*"
  }
  return firstHalf;
}

const hollowSecondHalf = function (height){
  let spaces2 = 1;
  let innerSpaces = height-4;
  let secondHalf = [];

  for(let index = 1;index <= height/2 - 1 ; index++){
    let space = generateLine(" ",spaces2).join('')
    let star = "*" +generateLine(" ",innerSpaces).join('') + "*"
    let line = space + star + space; 
    secondHalf.push(line)
    innerSpaces -= 2;
    spaces2++;

  }
  secondHalf.push(generateLine(" ",spaces2).join('') + generateLine("*" ,1).join('') + generateLine(" ",spaces2).join(''));
  return secondHalf;
}

const generateHollowDiamond = function(height){
  let firstHalf = hollowFirstHalf(height);
  let secondHalf= hollowSecondHalf(height);
  let diamond = firstHalf.concat(secondHalf);
  return diamond;
}

const angledFirstHalf = function(numOfLines){
  let outerSpaces = Math.floor(numOfLines/2);
  let innerSpaces = 1;
  let firstHalf = [];
  let star = "*";
  let space = " ";
  let forwardSlash = "/";
  let backwardSlash = "\\";

  let firstLine = generateLine(space,outerSpaces).join('') + star + generateLine(space,outerSpaces).join('');
  firstHalf.push(firstLine);
  for(let lineNum = 3; lineNum < numOfLines-1; lineNum+=2){
    outerSpaces--;
    let halfline1  = generateLine(space,outerSpaces).join('') + forwardSlash;
    let halfline2  = generateLine(space,innerSpaces).join('') + backwardSlash + generateLine(space,outerSpaces-1).join('');
    let line = halfline1 + halfline2;
    firstHalf.push(line);
    innerSpaces += 2;

  }
  return firstHalf;
} 

const angledSecondHalf = function(numOfLines){
  let outerSpaces = 1;
  let innerSpaces = numOfLines-2;
  let secondHalf = [];
  let star = "*";
  let space = " ";
  let forwardSlash = "/";
  let backwardSlash = "\\";

  secondHalf.push( star + generateLine(space,innerSpaces).join('') + star);
  for(let lineNum = numOfLines; lineNum > 3; lineNum-=2){
    innerSpaces -= 2;
    let halfline1 = generateLine(space,outerSpaces).join('') + backwardSlash;
    let halfline2  = generateLine(space,innerSpaces).join('') + forwardSlash +  generateLine(space,outerSpaces-1).join('') ;
    let line = halfline1 + halfline2;
    secondHalf.push(line);
    outerSpaces++;
  }
  lastLine =  generateLine(space,outerSpaces).join('') + star +  generateLine(space,outerSpaces).join('') ;
  secondHalf.push(lastLine);
  return secondHalf;
}

const generatAngledDiamond = function(height){
  let firstHalf = angledFirstHalf(height);
  let secondHalf = angledSecondHalf(height);
  let diamond = firstHalf.concat(secondHalf);
  return diamond;
}

const generateDiamond = function(userArgs){
  let {diamondType,height} = userArgs;

  if(height%2 == 0){
    height--;
  }
  let patternsType = { filled : generateFilledDiamond, hollow : generateHollowDiamond, angled : generatAngledDiamond }

  return patternsType[diamondType](height).join('\n');
}

//---exports
exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
