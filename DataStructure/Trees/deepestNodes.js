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

function height(root) {
  if (!root) return 0;

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function deepest(root, level) {
  if (!root) return null;

  if (level === 1) {
    console.log(root.data);
  } else if (level > 1) {
    deepest(root.left, level - 1);
    deepest(root.right, level - 1);
  }
}

const maxLevel = height(root);

deepest(root, maxLevel);

//using level order traversal
console.log("using level order");

function deepestOne(root) {
  if (!root) return;

  const queue = [root];
  let res = null;
  while (queue.length) {
    res = queue.shift();

    if (res.left) {
      queue.push(res.left);
    }

    if (res.right) {
      queue.push(res.right);
    }
  }

  return res.data;
}

console.log(deepestOne(root));

console.log("using level order all deepest");

function deepestAll(root, level) {
  if (!root) return 0;

  const q = [root, null];

  while(q.length) {
    root = q.shift();

    if(!root) {
      level--;
      if(level === 1) {
        return q;
      }
      if(q.length){
        q.push(null);
      }
    } else {
      if(root.left) {
        q.push(root.left);
      }
      if(root.right) {
        q.push(root.right);
      }
    }
  }
}

const leaves = deepestAll(root, maxLevel);

for (let i in leaves) {
  console.log(leaves[i].data);
}
