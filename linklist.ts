import { Nullable } from './types';

interface INode {
    value: any;
    next: Nullable<INode>;
}

class ListNode implements INode {
    value: any = null;
    next: Nullable<INode> = null;
    constructor(elem: any) {
        this.value = elem;
    }
}

export default class LinkList {
    private current: Nullable<INode> = null

    add(elem: any): boolean {
        const node = new ListNode(elem);
        if (this.current === null) {
            this.current = node;
        } else {
            this.current.next = node;
        }
        return true;
    }
    remove(): Nullable<INode> {
        const removed = this.current;
        if (removed === null) return removed;
        this.current = removed.next;
        return removed;
    }
    peek(): Nullable<INode> {
        return this.current;
    }
}
