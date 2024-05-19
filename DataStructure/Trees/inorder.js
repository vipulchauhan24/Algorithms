class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

function recursiveInorder(root) {
  if (root) {
    recursiveInorder(root.left);
    console.log(root.data);
    recursiveInorder(root.right);
  }
}

recursiveInorder(root);
console.log("now non-recursive solution");

function nonRecursiveInOrder(root) {
  const stack = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    if (!stack.length) {
      break;
    }
    root = stack.pop();
    console.log(root.data);
    root = root.right;
  }
}

nonRecursiveInOrder(root);
