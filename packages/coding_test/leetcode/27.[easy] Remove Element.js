// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) {
    return 0
  }

  let p = nums.length - 1

  for(let i = 0 ; i < nums.length ; i++) {
    const num = nums[i]
    if (num === val) {
      [nums[i], nums[p]] = [nums[p] , '_']
      p--
    }
    if (nums[i] === val) {
      i--
      continue
    }

    if (p <= i) {
      break
    }
  }
  return p + 1
};

function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  return removeElement(...Object.values(args))
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
  inputs.push({ nums: [3,2,2,3], val: 3 })
  expects.push(2)
  inputs.push({ nums: [0,1,2,2,3,0,4,2], val: 2 })
  expects.push(5)

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    const isSuccess = isEqual(result, expects[i])
    console.log(`[${i}] result: ${isSuccess ? successStr : failStr}`)
    console.log(`[${i}] output:`, result)
    if (!isSuccess) {
      console.log(`[${i}] expects:`, expects[i], '\n')
    }
  }
}

// 3. 실행 결과를 확인합니다.
main();
