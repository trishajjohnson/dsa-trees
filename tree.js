/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    const toVisitStack = [this.root];


    while(toVisitStack.length) {
      const current = toVisitStack.shift();
      if(current === null) return sum;
      
      sum += current.val;

      if(current.children) {
        for(let child of current.children) {
          
          toVisitStack.push(child);
        }

      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let sum = 0;
    const toVisitStack = [this.root];

    while(toVisitStack.length) {
      const current = toVisitStack.shift();
      if(current === null) return sum;
      if(current.val % 2 === 0) {
        sum++;
      }

      for(let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    const toVisitStack = [this.root];

    while(toVisitStack.length) {
      const current = toVisitStack.shift();
      if(current === null) return count;
      if(current.val > lowerBound) {
        count++;
      }

      for(let child of current.children) {
        toVisitStack.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
