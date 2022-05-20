// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) return ''

  return strs.reduce((common, str) => {
    let i = 0
    for( ; i < common.length ; i++) {
      if (str[i] !== common[i]) break
    }
    return str.substring(0, i)
  }, strs[0]) || ''
};

function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  return longestCommonPrefix(...Object.values(args))
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
  inputs.push({ strs: ["flower","flow","flight"] })
  expects.push('fl')
  inputs.push({ strs: ["dog","racecar","car"] })
  expects.push('')

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    console.log(`[${i}] result: + ${isEqual(result, expects[i]) ? successStr : failStr}`)
    console.log(`[${i}] output:`, result, '\n')
  }
}

// 3. 실행 결과를 확인합니다.
main();
