// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  const extra = {
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C',
  }

  const len = s.length
  let sum = 0
  for (let i = len - 1 ; i >= 0 ; i--) {
    const char = s[i]
    const suspect = extra[char]
    if (suspect && s[i-1] === suspect) {
      sum -= map[s[i-- -1]]
    }
    sum += map[char]
  }
  return sum
};
function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  return romanToInt(...Object.values(args))
}

function main() {
  const chalk = require('chalk')
  const { isEqual } = require('lodash')
  const successStr = chalk.green('SUCCESS')
  const failStr = chalk.red('FAIL')
  const inputs = []
  const expects = []
  /**
   * 2. inputs.push 에 Input 을, expects.push 에 Output 을 복사합니다.
   * 
   * @example
   * Input: nums = [2,7,11,15], target = 9
   * Output: [0,1]
   * 
   * inputs.push({ nums: [2,7,11,15], target: 9 })
   * expects.push([0, 1])
   */
  inputs.push({ s: "III" })
  expects.push(3)
  inputs.push({ s: "LVIII" })
  expects.push(58)
  inputs.push({ s: "MCMXCIV" })
  expects.push(1994)

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    console.log(`[${i}] result: + ${isEqual(result, expects[i]) ? successStr : failStr}`)
    console.log(`[${i}] output:`, result, '\n')
  }
}

// 3. 실행 결과를 확인합니다.
main();
