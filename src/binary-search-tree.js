const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.roott = null;
  }

  root() {
    return this.roott;
  }

  isRootEmpty(){
    return this.roott === null;
  }

  add(data) {
   const newNode = new Node(data);
   if(this.isRootEmpty()){
    this.roott = newNode;
   }
   else{
    this.insertNode(this.roott, newNode)
   }
  }

  insertNode(roott, newNode){
    if(newNode.data < roott.data){
      if(roott.left === null){
        roott.left = newNode;
      }
      else{
        this.insertNode(roott.left, newNode);
      }
    }
    else{
      if(roott.right === null){
        roott.right = newNode;
      }
      else{
        this.insertNode(roott.right, newNode);
      }
    }
  }

  has(data) {
    if(!this.root()){
     return false;
    }
    else if(this.roott.data === data){
       return true;
     }
     else{
       return this.hasNode(this.roott, data);
     }   
   }
 
   hasNode(roott, data){
     if(!roott){
       return false;
     }
     if(roott.data === data){
       return true;
     }
     else if(data < roott.data){
         return this.hasNode(roott.left, data);
     }
     else{
         return this.hasNode(roott.right, data);
     }
   }

   find( data ) {
    if(!this.root()){
      return null;
     }
     else if(this.roott.data === data){
        return this.roott;
     }
     else{
      return this.findNode(this.roott, data);
     }
  }

  findNode(roott, data){
    if(!roott){
      return null;
    }
    if(roott.data === data){
      return roott;
    }
    else if(data < roott.data){
        return this.findNode(roott.left, data);
    }
    else{
        return this.findNode(roott.right, data);
    }
  }

  remove(data) {
    this.roott = this.removeNode(this.roott, data);
      this.removeNode(this.roott, data);
   }
 
   removeNode(roott, data){
     if(!roott){
       return null;
     }
     if(data < roott.data){
       roott.left = this.removeNode(roott.left, data);
       return roott;
     }
     else if(data > roott.data){
       roott.right = this.removeNode(roott.right, data);
       return roott;
     }
     else{
       if(!roott.left && !roott.right){
         return null;
       }
       if(!roott.left){
         roott = roott.right;
         return roott;
       }
       if(!roott.right){
         roott = roott.left;
         return roott;
       }
 
       let minFromRight = roott.right;
       while(minFromRight.left){
         minFromRight = minFromRight.left;
       }
 
       roott.data = minFromRight.data;
       roott.right = this.removeNode(roott.right, minFromRight.data);
       return roott;
     }
   }

   min() {
    if(!this.root()){
      return null;
    }
    
    let node = this.roott;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }
  
  max() {
    if(!this.root()){
      return null;
    }
    
    let node = this.roott;
    while(node.right){
      node = node.right;
    }
    return node.data;    
  }
}

module.exports = {
  BinarySearchTree
};