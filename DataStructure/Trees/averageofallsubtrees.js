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


function avgAllSubTree(root) {
  
}