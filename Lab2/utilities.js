function checkIsObj(val, variableName) {
  if (typeof val !== "object") {
    throw `${variableName || "provided variable"} is not a object`;
  }
}

function checkIsArr(val, variableName) {
  if (Array.isArray(val) === false) {
    throw `${variableName || "provided variable"} is not an array`;
  }
}

function isDup(ele, index, self) {
  return index === self.indexOf(ele);
}

function isStr(val, variableName) {
  if (typeof val !== "string") {
    throw `${variableName || "provided variable"} is not a string`;
  }
}

module.exports = {
  deepEquality: function (obj1, obj2) {
    if (arguments.length != 2) {
      throw 'You should pass in two arguments, you pass in ${arguments.length}'
    }

    checkIsObj(obj1, "obj1");
    checkIsObj(obj2, "obj2");
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },

  uniqueElements: function (arr) {
    if (arguments.length != 1) {
      throw 'You should pass in one argument, you pass in ${arguments.length}'
    }

    checkIsArr(arr, "arr");
    return arr.filter(isDup);
  },

  countOfEachCharacterInString: function (str) {
    if (arguments.length != 1) {
      throw 'You should pass in one argument, you pass in ${arguments.length}'
    }

    isStr(str,"str");
    let obj = {};
    str.split('').forEach(function (ele) {
      if (!!obj[ele]) {
        obj[ele] += 1;
      } else {
        obj[ele] = 1;
      }
    });

    return obj;
  }
};