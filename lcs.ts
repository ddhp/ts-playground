type TObj = {
    val: string,
    belongs: string,
};

const isPalindrome = (s: string) => {
    for (let i = 0; i < s.length/2; i++) {
        let j = s.length -1-i;
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
};

const lcs = (s1: string, s2: string) => {
    const joint = `%${s1}#${s2}@`;
    const suffixes = [];
    for (let i = 0; i < joint.length; i++) {
        suffixes.push({
            val: joint.slice(i),
            belongs: i > s1.length ? '2' : '1',
        });
    }
    suffixes.sort((a: TObj, b: TObj) => {
        let i = 0;
        while (a.val[i] === b.val[i]) {
            i++;
        }
        if (a.val[i] > b.val[i]) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log(suffixes);
    let i = 3, j = 4, belongs = {
        one: 0,
        two: 0,
    };
    let cs = '';
    while (i < suffixes.length -1 && j < suffixes.length) {
        if (suffixes[i].belongs === '1') {
            belongs.one += 1;
        } else {
            belongs.two += 1;
        }
        if (suffixes[j].belongs === '1') {
            belongs.one += 1;
        } else {
            belongs.two += 1;
        }
        // console.log('b', belongs);
        if (belongs.one === 1 && belongs.two === 1) {
            let commonLength = 0;
            for (let k = 0; k < suffixes[i].val.length; k++) {
                // console.log(suffixes[i].val, suffixes[j].val);
                if (suffixes[j].val[k] !== suffixes[i].val[k]) {
                    commonLength = k;
                    break;
                }
            }
            let curr = suffixes[i].val.slice(0, commonLength);
            // console.log(i, j, commonLength, curr);
            if (isPalindrome(curr)) {
                cs = cs.length > curr.length ? cs : curr;
            }
        }
        belongs.one = 0;
        belongs.two = 0;
        i += 1;
        j += 1;
    }
    return cs;
}

var longestPalindrome = function(s: string) {
    let reversed = '';
    for (let i =s.length -1; i>-1; i--) {
        reversed += s[i];
    }
    //console.log(s, reversed);
    return lcs(s, reversed);
};

console.log(longestPalindrome('abacdfgdcaba'));
// abacba
// abcaba
// abacdfgdcaba
// abacdgfdcaba
// abac
// caba
// console.log(lcs('adsjillskdjflijlakfjalsdf', 'adfjljilgjasldfkjiasjfld'));
