// complete the function
const str = 'solos'
const isPalindrome = (inStr) => {
  for (let i=0; i < str.length; i+=1) {
    if (str[i] !== str[str.length-1-i]) {
      return false;
    }
  }
  return true;
}
Console.log(isPalindrom(str));

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
