//using pre order.
var mergeTrees = function (root1, root2) {
    if(!root1) return root2;
    if(!root2) return root1;

    root1.data += root2.data;

    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};

class SNode {
    constructor(data) {
        this.l = null;
        this.r = null;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root1 = new Node(1);
root1.left = new Node(3);
root1.right = new Node(2);
root1.left.left = new Node(5);

const root2 = new Node(2);
root2.left = new Node(1);
root2.right = new Node(3);
root2.left.right = new Node(4);
root2.right.right = new Node(7);

console.log(mergeTrees(root1, root2));
