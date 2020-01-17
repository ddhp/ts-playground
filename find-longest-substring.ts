const findLongestFromI = (s: string, i: number) => {
    let duplicated = false;
    let count: number = 0;
    let substring = '';
    while (i > -1 && !duplicated) {
        if (substring.indexOf(s[i]) === -1) {
            count += 1;
            substring += s[i]
            i -=1;
        } else {
            duplicated = true;
        }
    }
    return count;
}

const findLongestSubstring = (str: string) => {
    const countArr = [];
    for (let i = 0; i< str.length; i++) {
        countArr.push(findLongestFromI(str, i));
    }
    console.log(countArr);
    return countArr.reduce((accum, c) => Math.max(accum, c), 0);
}
console.log(findLongestFromI(' ', 0));
console.log(findLongestSubstring(' '));
console.log(findLongestFromI('pwwkew', 1));
console.log(findLongestSubstring('pwwkew'));
