import { Nullable } from './types';
import Stack from './stack';
import LinkList from './linklist';

interface INode {
    data: number;
    left: Nullable<INode>;
    right: Nullable<INode>;
}

class Queue {
    private linklist = new LinkList();

    add(elem: any): void {
        this.linklist.add(elem);
    }
    remove() {
        const removed = this.linklist.remove();
        if (removed === null) {
            return removed;
        }
        return removed.value;
    }
    peek() {
        const target = this.linklist.peek();
        if (target === null) {
            return target;
        }
        return target.value;
    }
}


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
        console.log(`check ${elem} with Node data ${node.data}`);
        if (elem < node.data) {
            node.left = this.removeFromSubtree(elem, node.left);
        } else if (elem > node.data) {
            node.right = this.removeFromSubtree(elem, node.right);
        // found the element
        // switch the data with the biggest node on the left
        } else {
            if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            } else {
                console.log(`found and node ${node.data} has both`);
                const biggestLeft = this.findMax(node.left);
                node.data = biggestLeft.data;
                node.left = this.removeFromSubtree(biggestLeft.data, node.left);
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

    findMax(node: INode): INode {
        // if (node === null) return node;
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

    preorderTraversal(node: Nullable<INode>): void {
        if (node === null) {
            return;
        }
        console.log(node.data);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
    }

    inorderTraversal(node: Nullable<INode>): void {
        if (node === null) {
            return;
        }
        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }

    postorderTraversal(node: Nullable<INode>): void {
        if (node === null) {
            return;
        }
        this.postorderTraversal(node.left);
        this.postorderTraversal(node.right);
        console.log(node.data);
    }

    levelorderTraversal(node: Nullable<INode>): void {
        const queue = new Queue();
        return;
        queue.add(node);
        while(queue.peek()) {
            const tar = queue.remove();
            console.log(tar!.data);
            if (tar.left) queue.add(tar.left);
            if (tar.right) queue.add(tar.right);
        }
    }

    preorderIterator() {
        const stack = new Stack();
        stack.push(this.root);
        return {
            next() {
                const current = stack.pop();
                if (!current) return null;
                if (current.right) stack.push(current.right);
                if (current.left) stack.push(current.left);
                return current;
            },
        };
    }

    inorderIterator() {
        const stack = new Stack();
        let target = this.root;
        return {
            next() {
                while (target !== null) {
                    stack.push(target);
                    target = target.left;
                }
                const node = stack.pop();
                if (node !== null && node.right !== null) {
                    target = node.right;
                }
                return node;
            },
        };
    }

    postorderIterator() {
        const stack1 = new Stack();
        const stack2 = new Stack();
        let target = this.root;
        stack1.push(target);
        while (stack1.peek() !== undefined) {
            const tar = stack1.pop();
            stack2.push(tar);
            if (tar.left) {
                stack1.push(tar.left);
            }
            if (tar.right) {
                stack1.push(tar.right);
            }
        }

        return {
            next() {
                return stack2.pop();
            }
        };
    }

    levelorderIterator() {
        const queue = new Queue();
        queue.add(this.root);
        return {
            next() {
                const node = queue.remove();
                if (node.left) {
                    queue.add(node.left);
                }
                if (node.right) {
                    queue.add(node.right);
                }
                return node;
            }
        }
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
bst.add(54);
bst.add(67);
bst.add(76);
// bst.add(13);
// bst.preorderTraversal(bst.root);
// console.log('\n');
// console.log(bst.find(50, bst.root));
bst.levelorderTraversal(bst.root);
console.log('\n');
// console.log(bst.find(14, bst.root));
// console.log(bst.height(bst.root), bst.root);
// console.log(bst.root!.left, bst.root!.right);
// console.log(bst.findMax(bst.root!.left));
const poi = bst.levelorderIterator();
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
console.log(poi.next()!.data);
// console.log(poi.next());
// bst.remove(17);
// console.log(bst.find(50, bst.root));
// bst.preorderTraversal(bst.root);
// console.log(bst.root, '/n', bst.root!.left);
