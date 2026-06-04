function funkyFunction(music, isWhiteBoy) {
  if (isWhiteBoy) {
    console.log(`Play: ` + music);
  }
}

funkyFunction("that funky music", true);

const secondFunc = function (music, isWhiteBoy) {
  if (isWhiteBoy) {
    console.log(`Play: ` + music);
  }
};

const thirdFunc = (music, isWhiteBoy) => {
  if (isWhiteBoy) {
    console.log(`play: ` + music);
  }
};

const playThe = (funky) => {
  return funky + "music";
};

const playThe2 = (funky) => funky + "music";

const playThe3 = (funky) => {
  return funky + "music";
};

const notes = ["do", "re", "mi"];
notes.forEach((note) => console.log(note));

notes.forEach((note) => {
  console.log(note);
});

notes.forEach(function (note) {
  console.log(note);
});

notes.forEach(console.log);

function myForeach(items, callback) {
  for (let item of items) {
    callback(item);
  }
}

const myArr = [1, 2, 3, 4];
myForeach(myArr, (item) => {
  console.log(item);
});

myArr.forEach((item) => {
  console.log(item);
});

function myForeach2(items, callback) {
  for (let item of items) {
    callback(item);
  }
}

function myForeach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

function printPlusTwo(item) {
  console.log(item + 2);
}

const myArr2 = [12, 3, 4, 5, 6];
myForeach(myArr2, printPlusTwo);

function myMap(array, callback) {
  const myNewArray = [];
  for (let item of array) {
    let result = callback(item);
    myNewArray.push(result);
  }
  return myNewArray;
}

const myArr3 = [1, 2, 3, 4];
const myArr4 = myMap(myArr3, (item) => item * 5);
console.log(myArr4);
