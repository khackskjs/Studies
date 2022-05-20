export const functions = {
  '21.[easy] Merge Two Sorted list': {
    // 문제에 포함된 ListNode
    ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
    },
    /** @param {number[]} array */
    parseListNodeByArray(array) {
      const nodeList = array.reduceRight((nodeList, val) => {
        nodeList.val = val
        return new ListNode(null, nodeList)
      }, new ListNode())
      return nodeList.next
    },
    /** @param {ListNode} listNode */
    parseListNodeToArray(listNode) {
      let p = listNode
      const array = []
      while (p !== null) {
        array.push(p.val)
        p = p.next
      }
      return array
    }
  },
}
