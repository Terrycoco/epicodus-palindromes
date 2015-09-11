// describe('leapYear', function() {
//   it("is false for a year that is not divisible by 4", function() {
//     expect(leapYear(1999)).to.equal(false);
//   });
// });

describe('isPalindrome', function() {
  it("is true for simple 2 letter palindrome", function() {
    expect(isPalindrome("aa")).to.equal(true);
  });

  it("is true for longer palindrome", function() {
    expect(isPalindrome("OhiO")).to.equal(true);
  });

  it("is true for odd numbered words", function() {
    expect(isPalindrome("12e21")).to.equal(true);
  });
});
