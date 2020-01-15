export default class Stack {
    private list: any[] = [];
    push<T>(elem: T): void {
        this.list.push(elem);
    }
    pop() {
        return this.list.pop();
    }
    peek(): any {
        return this.list[this.list.length -1];
    }
}
