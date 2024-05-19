class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

//recursive
const postOrder = (root) => {
  if (root) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
  }
};

postOrder(root);

console.log("Non Recursive approach!");

//non recursive

const postOrderNonRecursive = (root) => {
  if (!root) return null;

  const stack = [];
  let prev = null,
    curr = root;

  while (true) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack[stack.length - 1];
    if (!curr.right || prev == curr.right) {
      prev = curr;
      console.log(curr.data);
      curr = null;
      stack.pop();
    } else if (curr.right) {
      curr = curr.right;
    }

    if (!stack.length) {
      break;
    }
  }
};

const root2 = new Node(1);
root2.right = new Node(2);
root2.right.left = new Node(3);

postOrderNonRecursive(root2);
