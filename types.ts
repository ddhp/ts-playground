export type Nullable<T> = T | null;

export interface INode {
    data: number;
    left: Nullable<INode>;
    right: Nullable<INode>;
}

export class TreeNode implements INode {
    left: Nullable<INode>
    right: Nullable<INode>
    data: number

    constructor(left: Nullable<INode>, right: Nullable<INode>, data: number) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

export interface IHeapElem {
  index: number;
}

export interface IHeapNode {
  value: IHeapElem;
  left: Nullable<IHeapNode>;
  right: Nullable<IHeapNode>;
}

export class HeapNode implements IHeapNode {
    left: Nullable<IHeapNode>
    right: Nullable<IHeapNode>
    value: IHeapElem

    constructor(left: Nullable<IHeapNode>, right: Nullable<IHeapNode>, value: IHeapElem) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}
