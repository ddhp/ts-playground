import LinkedList from './linkedlist';

export default class Queue {
    private linklist = new LinkedList();

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
