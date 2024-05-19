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

function recursivePreOrder(root) {
  if (root) {
    console.log(root.data);
    recursivePreOrder(root.left);
    recursivePreOrder(root.right);
  }
}

recursivePreOrder(root);

console.log("nonRecursivePreOrder");

function nonRecursivePreOrder(root) {
  const stack = [];
  while (true) {
    while (root) {
      console.log(root.data);
      stack.push(root);
      root = root.left;
    }

    if (!stack.length) {
      break;
    }

    root = stack.pop();
    root = root.right;
  }
}

nonRecursivePreOrder(root);

console.log("nonRecursivePreOrder2");

function nonRecursivePreOrder2(root) {
  const stack = [];
  stack.push(root);
  while (stack.length) {
    root = stack.pop();

    console.log(root.data);

    if (root.right) {
      stack.push(root.right);
    }

    if (root.left) {
      stack.push(root.left);
    }
  }
}

nonRecursivePreOrder2(root);
