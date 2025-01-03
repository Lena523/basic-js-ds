const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
 }

 class LinkedList{
  constructor(head = null){
    this.head = head;
    this.size = 0;
  }

  add(value)
 {
    let current;
    if (this.head == null)
        this.head = new Node(value);
    else {
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
  this.size += 1;
 }

 removeKFromList() {
  if(this.head !== null){
    let current = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return current.value;
  }
  return 1;
}
}

class Queue {
  constructor(){
   this.list = new LinkedList();
  }
   getUnderlyingList() {
    return this.list.head;
   }
 
   enqueue(value) {
   this.list.add(value);
   }
 
   dequeue() {
    return this.list.removeKFromList();
   }
}

module.exports = {
  Queue
};
