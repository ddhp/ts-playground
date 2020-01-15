import LinkList from './linklist';

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
        return removed.value();
    }
    peek() {
        const target = this.linklist.peek();
        if (target === null) {
            return target;
        }
        return target.value();
    }
}
