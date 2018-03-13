/**
 * Created by xiewangzhi on 13/03/2018.
 */

let exportedMethods = {
  checkPalindrome(text) {
    let m_text = text.split(/[^a-zA-Z]| /).join('').toLowerCase();
    return m_text.split('').reverse().join('') === m_text;
  }
};

module.exports = exportedMethods;