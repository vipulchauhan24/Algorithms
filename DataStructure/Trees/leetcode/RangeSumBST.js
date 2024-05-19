var rangeSumBST = function (root, low, high) {
  if (!root) return 0;
  let sum = 0;
  const queue = [];

  queue.push(root);

  while (queue.length) {
    root = queue.shift();

    if (root.data >= low && root.data <= high) {
      sum += root.data;
    }

    if (root.left) {
      queue.push(root.left);
    }
    if (root.right) {
      queue.push(root.right);
    }
  }

  return sum;
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
// root.right.left = new Node(6);
root.right.right = new Node(18);

console.log(rangeSumBST(root, 7, 15));
