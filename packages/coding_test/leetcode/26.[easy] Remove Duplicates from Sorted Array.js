// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const map = {}
  for (let i = 0 ; i < nums.length ; i++) {
    map[nums[i]] = true
  }
  
  const arr = Object.keys(map).map(Number).sort((a,b) => a-b)
  for (let i = 0 ; i < nums.length ; i++) {
    nums[i] = i < arr.length ? arr[i] : '_'
  }
  return arr.length

};
function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  return removeDuplicates(...Object.values(args))
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
  inputs.push({ nums: [-3,-1,0,0,0,3,3] })
  expects.push(4)
  inputs.push({ nums: [-1,0,0,0,0,3,3] })
  expects.push(3)
  inputs.push({ nums: [1,1,2] })
  expects.push(2)
  inputs.push({ nums: [0,0,1,1,1,2,2,3,3,4] })
  expects.push(5)

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    console.log(`[${i}] result: ${isEqual(result, expects[i]) ? successStr : failStr}`)
    console.log(`[${i}] output:`, result, '\n')
  }
}

// 3. 실행 결과를 확인합니다.
main();
