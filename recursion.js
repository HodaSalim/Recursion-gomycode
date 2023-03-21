function isPalindrome(word) {
  if (word === "" || word.length === 1) {
    return "word is a palindrome";
  }

  if (word[0] === word.slice(-1)) {
    return isPalindrome(word.slice(1, -1));
  }
  return "word is not a palindrome";
}
