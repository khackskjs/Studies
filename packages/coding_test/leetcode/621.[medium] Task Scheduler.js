// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (n < 1) return tasks.length

  const IDLE = 'IDLE'
  const map = tasks.reduce((obj, t) => {
      return (obj[t] = obj[t] + 1 || 1, obj)
  }, {})
  
  const curr = []
  let ordered = Object.keys(map).sort((a, b) => map[b] - map[a])
  const result = []
  while(Object.keys(map).length) {
      let task = null
      for (let i = 0 ; i < ordered.length ; i++) {
          if (!curr.includes(ordered[i])) {
            task = ordered[i]
            break
          }
      }
      task = task ? task : IDLE
      curr.push(task)
      result.push(task)

      if (curr.length > n) {
          curr.shift()
      }
      
      if (task === IDLE) {
          continue
      }
      
      map[task]--
      if (!map[task]) {
        delete map[task]
        ordered.splice(ordered.findIndex(t => t === task), 1)
      }
      
      ordered = ordered.sort((a, b) => map[b] - map[a])
  }
  
  return result.length
};

function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  return leastInterval(...Object.values(args))
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
  inputs.push({ tasks: ["A","A","A","B","B","B"], n: 2 })
  expects.push(8)
  inputs.push({ tasks: ["A","A","A","B","B","B"], n: 0 })
  expects.push(6)
  inputs.push({ tasks: ["A","A","A","A","A","A","B","C","D","E","F","G"], n: 2 })
  expects.push(16)
  inputs.push({ tasks: ["A","A","A","B","B","B"], n: 2 })
  expects.push(8)
  inputs.push({ tasks: ["A","A","A"], n: 1 })
  expects.push(5)
  

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    console.log(`[${i}] result: ${isEqual(result, expects[i]) ? successStr : failStr}`)
    console.log(`[${i}] output:`, result, '\n')
  }
}

// 3. 실행 결과를 확인합니다.
main();
