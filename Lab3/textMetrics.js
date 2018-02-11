/**
 * Created by xiewangzhi on 05/02/2018.
 */

function simplify(text) {
  let temp = text.toLowerCase();
  return temp.replace(/[^a-z0-9]/g,' ').split(' ').filter(word => word !== '').join(' ');
}

function createMetrics(text) {
  // text = simplify(text);
  let object = {};
  let totalLett = this.totalLetters(text);
  object["totalLetters"] = totalLett.length;
  let totalW = this.totalWords(text);
  object["totalWords"] = totalW.length;
  let uniqW = this.uniqueWords(text);
  object["uniqueWords"] = uniqW.length;
  object["longWords"] = this.longWords(text);
  object["averageWordLength"] = this.averageWordLength(text);
  object["wordOccurrences"] = this.wordOccurrences(text);
  return object;
}

function totalLetters(text) {
  return text.split(' ').join()
}

function totalWords(text) {
  return text.split(' ')
}

function uniqueWords(text) {
  const set1 =new Set(this.totalWords(text));
  return Array.from(set1);
}

function longWords(text) {
  let count = 0;
  totalWords(text).forEach(function (word) {
    if (word.length >= 6) {
      count ++;
    }
  });
  return count;
}

function averageWordLength(text) {
  return totalLetters(text).length / totalWords(text).length;
}

function wordOccurrences(text) {
  let obj = {};
  totalWords(text).forEach(function (word) {
    if (obj[word]) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  });
  return obj;
}


module.exports = {
  simplify,
  createMetrics,
  totalLetters,
  totalWords,
  uniqueWords,
  longWords,
  averageWordLength,
  wordOccurrences
};