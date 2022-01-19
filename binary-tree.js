/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;

    let count = 1;
    let queueToVisit = [this.root];

    while(queueToVisit.length > 0) {
      let current = queueToVisit.shift();
      if(!current.left && !current.right) return count;
      if(!current.left) queueToVisit.push(current.right);
      if(!current.right) queueToVisit.push(current.left);
      count++;
    }

    return count;
    // function helperMethod(node) {
    //   if(node.left === null && node.right === null) return 1;
    //   if(node.left === null) return minDepth(node.right) + 1;
    //   if(node.right === null) return minDepth(node.left) + 1;
    //   return Math.min(helperMethod(node.left), helperMethod(node.right)) + 1;
    // }

    // return helperMethod(this.root);  
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;

    let count = 1;
    let stackToVisit = [this.root];

    while(stackToVisit.length > 0) {
      let current = stackToVisit.pop();

      if(current.left) stackToVisit.push(current.left);
      if(current.right) stackToVisit.push(current.right);
      if(current.left || current.right) count++;
    }
    
    return count;

    // function helperMethod(node) {
    //   if(node.left === null && node.right === null) return 1;
    //   if(node.left === null) return helperMethod(node.right) + 1;
    //   if(node.right === null) return helperMethod(node.left) + 1;
    //   return Math.max(helperMethod(node.left), helperMethod(node.right)) + 1;
    // }
    // return helperMethod(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sum = 0;

    function helperMethod(node) {
      if(!node) return 0;
      let leftSum = helperMethod(node.left);
      let rightSum = helperMethod(node.right);
      sum = Math.max(sum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    helperMethod(this.root);
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;
    
    let smallestLargest = this.root.val;
    let queueToVisit = [this.root];

    while(queueToVisit.length){
      let current = queueToVisit.shift();

      if(current.left) queueToVisit.push(current.left);
      if(current.right) queueToVisit.push(current.right);

      if(current.val > lowerBound && current.val < smallestLargest) smallestLargest = current.val;
    }

    if(smallestLargest > lowerBound) return smallestLargest;
    return null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };


// function printStringRecursively(str) {
//   if(str.length) {
//     let letter = str.slice(0,1);
//     console.log(letter);
//     printStringRecursively(str.substr(1));

//   }
// }
// printStringRecursively("Hello");


// let arr = ["apple", "bird", "dog", "cat"]

// for(let x=0; x < arr.length-1; x++) {
//   let firstWord = arr[x];
//   let secondWord = arr[x+1];
//   for(let j=0; j < firstWord.length-1; j++) {
//     if(firstWord[j] < secondWord[j])
//   }
// }