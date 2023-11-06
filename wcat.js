// 1) node wcat.js f1.txt -> displays the content of f1.txt in the terminal
// 2) node wcat.js f1.txt f2.txt f3.txt -> displays all the content of the given files in terminal in concatination form

const { log } = require("console");
const fs = require("fs");

let inputArr = process.argv.slice(2);
// console.log(inputArr);

let filesArr = [];
let optionsArr = [];

//place files in filesArr
for (let i = 0; i < inputArr.length; i++) {
  let firstChar = inputArr[i].charAt(0);
  if (firstChar == "-") {
    optionsArr.push(inputArr[i]);
  } else {
    filesArr.push(inputArr[i]);
  }
}

// console.log("Files to be read are : " + filesArr);

// checks if files are present or not
for (let i = 0; i < filesArr.length; i++) {
  let fileExist = fs.existsSync(filesArr[i]);
  if (!fileExist) {
    console.log("File does not exist.");
    return;
  }
}

// file reading and appending starts
let content = "";
for (let i = 0; i < filesArr.length; i++) {
  let fileContent = fs.readFileSync(filesArr[i]);
  content += fileContent + "\n";
}

console.log(content);

let contentArr = content.split("\n");
console.table(contentArr);

// check if -s is present or not
let isSPresent = optionsArr.includes("-s");
if (isSPresent) {
  for (let i = 1; i < contentArr.length; i++) {
    if (contentArr[i] == "" && contentArr[i - 1] == "") {
      contentArr[i] = null;
    } else if (contentArr[i] == "" && contentArr[i - 1] == null) {
      contentArr[i] = null;
    }
  }

  let tempArr = [];
  // push everything in tempArr except null
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] != null) {
      tempArr.push(contentArr[i]);
    }
  }
  console.log("Data after removing extra lines\n" + tempArr);
}

let indexOfN = optionsArr.indexOf("-n");
let indexofB = optionsArr.indexOf("-b");
// if -n or -b is not found, return -

let finalOption = "";
// if both -n & -b is present
if (indexOfN != -1 && indexofB != -1) {
  if (indexOfN < indexofB) {
    finalOption = "-n";
  } else {
    finalOption = "-b";
  }
} else {
  // either -n or -b is present
  if (indexOfN != -1) {
    finalOption = "-n";
  } else if (indexofB != -1) {
    finalOption = "-b";
  }
}

// calling of functions by evaluating fianlOptions
if ((finalOption = "-n")) {
  modifyContentByN();
} else if ((finalOption = "-b")) {
  modifyContentByB();
}

function modifyContentByN(){

}

function modifyContentByB(){
    
}