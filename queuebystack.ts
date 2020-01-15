import Stack from './stack';

interface IStack {
    push<T>(elem: T): void;
    pop(): any;
    peek(): any;
}

class Queue {
    private stack1: IStack
    private stack2: IStack

    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    queue(elem: any): void {
        this.stack1.push(elem);
    }
    dequeue() {
        if (this.stack2.peek()) {
            return this.stack2.pop();
        }
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.stack2.peek()) return this.stack2.peek();
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.peek();
    }
}
