var reverseList = function(head, prev = null) {
    // console.log(head, prev, '\n')
    if (head !== null) {
        const tempNext = head.next;
        head.next = prev;
        // console.log(tempNext);
        if (tempNext !== null) {
            head = reverseList(tempNext, head);
        }
    }
    // console.log(head, prev)
    return head;
};

let reverseListLiteral = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }
    return prev;
}

const a = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                }
            }
        }
    }
};

let b = reverseListLiteral(a);
console.log(a);
console.log(b);
// let b1 = b
// while(b) {
//     console.log(b);
//     b = b.next;
// }
let c = reverseListLiteral(b);
console.log(c === a);
// while(c) {
//     console.log(c);
//     c = c.next;
// }
// console.log('rr', reverseListLiteral(a));
