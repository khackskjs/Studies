
// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString()
  const len = str.length
  const half = Math.floor(len / 2)
  for (let i = 0 ; i < half ; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}

function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  return isPalindrome(...Object.values(args))
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
  inputs.push({ x: 121 })
  expects.push(true)
  inputs.push({ x: -121 })
  expects.push(false)
  inputs.push({ x: 10 })
  expects.push(false)

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    console.log(`[${i}] result: + ${isEqual(result, expects[i]) ? successStr : failStr}`)
    console.log(`[${i}] output:`, result, '\n')
  }
}

// 3. 실행 결과를 확인합니다.
main();
