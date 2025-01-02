const { NotImplementedError } = require('../extensions/index.js');

 //const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface 
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
//[3, 1, 2, 3, 4, 5]

function removeKFromList(l, k ) {
  let current = l;
  let newHead = false;
  while(current.value === k && l !== null){
    l = current.next;
    current = current.next;
    newHead = true;
  }

  if(!newHead){
    l = current;
  }

  while(l !== null && l.next !== null){
    while(l.next.value === k){
      if(l.next.next !== null){
         l.next = l.next.next;
      }
      else{
        l.next = null;
        return current;
      }
    }
     l = l.next;
  }
  return current;
}

module.exports = {
  removeKFromList
};
