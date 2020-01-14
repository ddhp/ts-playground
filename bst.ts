interface INode {
    data: number,
    left: Nullable<INode>,
    right: Nullable<INode>,
}

type Nullable<T> = T | null;

class TreeNode implements INode {
    left: Nullable<INode>
    right: Nullable<INode>
    data: number

    constructor(left: Nullable<INode>, right: Nullable<INode>, data: number) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class Bst {
    nodeCount: number;
    root: Nullable<INode>;

    constructor() {
        this.nodeCount = 0;
        this.root = null;
    }

    add(elem: number): boolean {
        if (this.contains(elem, this.root)) return false;
        this.root = this.addToSubtree(elem, this.root);
        return true;
    }

    private addToSubtree(elem: number, node: Nullable<INode>): INode {
        if (node === null) {
            return new TreeNode(null, null, elem);
        }
        if (elem < node.data) {
            node.left = this.addToSubtree(elem, node.left);
        } else {
            node.right = this.addToSubtree(elem, node.right);
        }
        this.nodeCount += 1;
        return node;
    }

    remove(elem: number): boolean {
        if (!this.contains(elem, this.root)) return false;
        this.root = this.removeFromSubtree(elem, this.root);
        this.nodeCount -= 1;
        return true;
    }

    private removeFromSubtree(elem: number, node: Nullable<INode>): Nullable<INode> {
        if (node === null) return node;
        if (elem < node.data) {
            node.left = this.removeFromSubtree(elem, node.left);
        } else if (elem > node.data) {
            node.right = this.removeFromSubtree(elem, node.right);
        // found the element
        // switch the data with the biggest node on the left
        } else {
            let biggestLeft = this.findMax(node.left);
            if (biggestLeft !== null) {
                const tmpData = node.data;
                node.data = biggestLeft.data;
                biggestLeft.data = tmpData;
                // console.log(node.data, biggestLeft.data);
                this.removeFromSubtree(elem, biggestLeft);
            } else {
                node = node.right;
            }
        }
        return node;
    }

    find(elem: number, node: Nullable<INode>): Nullable<INode> {
        if (node === null) {
            return node;
        } else if (elem < node.data) {
            return this.find(elem, node.left);
        } else if (elem > node.data) {
            return this.find(elem, node.right);
        } else {
            return node;
        }
    }

    findMax(node: Nullable<INode>): Nullable<INode> {
        if (node === null) return node;
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    height(node: Nullable<INode>): number {
        if (node === null ) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

    private contains(elem: number, node: Nullable<INode>): boolean {
        if (node === null) return false;
        if (elem === node.data) {
            return true;
        }
        if (elem < node.data) {
            return this.contains(elem, node.left);
        }
        return this.contains(elem, node.right);
    }

    inorderTraversal(node: Nullable<INode>): void {
        if (node === null) {
            return;
        }
        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }
}

const bst = new Bst();
bst.add(50);
bst.add(17);
bst.add(72);
bst.add(12);
bst.add(23);
bst.add(9);
bst.add(14);
bst.add(19);
bst.add(13);
// console.log(bst.find(50, bst.root));
bst.inorderTraversal(bst.root);
console.log('\n');
// console.log(bst.find(14, bst.root));
// console.log(bst.height(bst.root), bst.root);
// console.log(bst.root!.left, bst.root!.right);
// console.log(bst.findMax(bst.root!.left));
bst.remove(17);
// console.log(bst.find(50, bst.root));
bst.inorderTraversal(bst.root);
// console.log(bst.root, '/n', bst.root!.left);
