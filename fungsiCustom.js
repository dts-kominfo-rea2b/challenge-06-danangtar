// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  readFile((firstWord) => {
    readNextFile(firstWord, (secondWord) => {
      readLastFile(secondWord, (arr) => {
        fnCallback(null, arr);
      });
    })
  });
};

function readFile(nextFile) {
  fs.readFile(file1, (err, data) => {
    if (err) throw err
    var data = JSON.parse(data);
    var word = [];
    word.push(lastWord(data.message));
    nextFile(word);
  });
}

function readNextFile(word, nextFile) {
  fs.readFile(file2, (err, data) => {
    if (err) throw err
    var data = JSON.parse(data);
    word.push(lastWord(data[0].message))
    nextFile(word);
  });
}

function readLastFile(word, nextFile) {
  fs.readFile(file3, (err, data) => {
    if (err) throw err
    var data = JSON.parse(data);
    word.push(lastWord(data[0].data.message));
    nextFile(word);
  });
}

function lastWord(words) {
  var n = words.split(" ");
  return n[n.length - 1];
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
