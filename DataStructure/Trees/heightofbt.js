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

console.log(height(root));

console.log('using level order');

function heightLevel(root) {
  if (!root) return 0;

  const q = [root, null];
  let level = 0;

  while(q.length) {
    root = q.shift();

    if(!root) {
      level++;
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

  return level;
}

console.log(heightLevel(root));
