var isPalindrome = function (word) {
  var reversedWord = word.split().reverse().join();
  return (word === reversedWord);
};
