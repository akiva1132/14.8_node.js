const fs = require("fs");
const lodash = require("lodash");

function printText() {
  fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
}
// printText()

function printLenghOfText() {
  let i = 0;
  fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) throw err;
    for (let j = 0; j < data.length - 1; j++) {
      if (data[j] === " " && data[j - 1] !== " ") {
        i += 1;
      }
    }
    console.log(i);
  });
}

//   printLenghOfText()

function worldUnique() {
  fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) throw err;
    let newArr = data.split(" ");
    newArr = 'lodash.uniq(newArr)'
    return newArr
  });
}

//   worldUnique();

function sumOfworldUnique() {
  fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) throw err;
    let newArr = lodash.words(data);
    let result = lodash.uniq(newArr, false);
    console.log(result.length);
  });
}

// sumOfworldUnique();

function reverse() {
  fs.readFile("file.txt", "utf-8", function (err, data) {
    if (err) throw err;
    let newArr = lodash.words(data);
    newArr = lodash.reverse(newArr).join(" ");
    console.log(newArr);
  });
}
// reverse();

function worldUniqueUpper() {
    fs.readFile("file.txt", "utf-8", function (err, data) {
        if (err) throw err;
        let newArr = data.split(" ");
        newArr = lodash.uniq(newArr)
        console.log(lodash.join(newArr, " ").toUpperCase())
      });
}
// worldUniqueUpper()


    function worldUniqueUpperBigerFive() {
        fs.readFile("file.txt", "utf-8", function (err, data) {
            if (err) throw err;
            let newArr = data.split(" ");
            newArr = lodash.uniq(newArr)
            newArr.forEach(element => {if (element.length > 5){
                console.log(element.toUpperCase())
            }})
            
          });
    }

worldUniqueUpperBigerFive()