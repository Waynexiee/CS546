/**
 * Created by xiewangzhi on 19/01/2018.
 */
const questionOne = function questionOne(arr) {
  // Implement question 1 here
  return arr.reduce( (currentTotal, newValue)=> {
      return currentTotal + newValue * newValue;
  }, 0);
};

const questionTwo = function questionTwo(num) {
  // Implement question 2 here
  let arr = [0,1];
  for (let i = 2; i <= num; i++){
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[num];
};
const questionThree = function questionThree(text) {
  // Implement question 3 here
  let num = text.length;
  let count = 0;
  for (let i = 0; i < num; i++) {
    if ("aeiouAEIOU".includes(text[i]) == true) {
      count++;
    }
  }
  return count;
};

const questionFour = function questionFour(num) {
  // Implement question 4 here
  if (num < 0)
    return NaN;
  let mult = 1;
  for (let i = 1; i <= num; i++) {
    mult *= i;
  }
  return mult;
};

module.exports = {
  firstName: "Wangzhi",
  lastName: "Xie",
  studentId: "10422300",
  questionOne,
  questionTwo,
  questionThree,
  questionFour
};