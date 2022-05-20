// 0. coding test editor 의 함수를 그대로 복사합니다.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(null, null)
  let p = dummy
  let l1 = list1
  let l2 = list2

  while (l1 !== null || l2 !== null) {
    if (l1 === null) {
      p.next = l2
      l2 = l2.next
    } else if (l2 === null) {
      p.next = l1
      l1 = l1.next
    } else if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }

  return dummy.next
}

/**
 * @param {number[]} array 
 * @returns 
 */
function parseListNodeByArray(array) {
  const nodeList = array.reduceRight((nodeList, val) => {
    nodeList.val = val
    return new ListNode(null, nodeList)
  }, new ListNode())

  return nodeList.next
}

/**
 * 
 * @param {ListNode} listNode 
 * @returns 
 */
function parseListNodeToArray(listNode) {
  let p = listNode
  const array = []
  while (p !== null) {
    array.push(p.val)
    p = p.next
  }
  return array
}

function solve(args) {
  // 1. return 하며 호출하는 함수 이름을 복사한 함수 이름으로 교체합니다.
  const values = Object.values(args).map(parseListNodeByArray)
  const result = mergeTwoLists(...values)
  return parseListNodeToArray(result)
}

function main() {
  const chalk = require('chalk')
  console.log(chalk.yellow('***********************************'))
  console.log(chalk.green( ' ListNode 가 포함되어 solve() 수정'))
  console.log(chalk.yellow('***********************************'))
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
  inputs.push({ list1: [1,2,4], list2: [1,3,4] })
  expects.push([1,1,2,3,4,4])
  inputs.push({ list1: [], list2: [] })
  expects.push([])
  inputs.push({ list1: [], list2: [0] })
  expects.push([0])

  for (let i = 0 ; i < inputs.length ; i++) {
    const result = solve(inputs[i])
    console.log(`[${i}] result: + ${isEqual(result, expects[i]) ? successStr : failStr}`)
    console.log(`[${i}] output:`, result, '\n')
  }
}

// 3. 실행 결과를 확인합니다.
main();
