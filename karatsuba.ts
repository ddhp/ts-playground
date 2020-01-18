const multiply = (a: string, b: string) => {
  if (a.length === 1 || b.length === 1) {
    return Number(a)*Number(b);
  }
  return 0;
}

const powOfNum = (num: number) => {
  let i = 0;
  while (Math.pow(10, i)<num) {
    i ++;
  }
  return i;
}

// console.log(powOfNum(123));

const zeros = (n:number) => {
  let r = '';
  for (let i = 0; i < n; i++) {
    r+= '0';
  }
  return r;
}

console.log('z', zeros(-1))

const addStringsByNumber = (a: string, b:string) => {
  const res =  String(Number(a) + Number(b));
  // console.log(res);
  return res;
}

const karatsuba = (num1: string, num2: string, base: number): number => {
  console.log(num1, num2, base);
  // num1* num2 =
  // ab * cd =
  // 1. ac * 10 n - ac.length
  // 2. bd * 1
  // 3. (ad*bc - 1. - 2.)* 10 (n/c.length)
  if (num1.length === 1 || num2.length === 1) {
    console.log('mul', num1, num2, base);
    return Number(String(multiply(num1, num2)) + zeros(base));
  }
  let n = Math.min(Math.floor(num1.length/2), Math.floor(num2.length/2)) + 1;
  let aLength = num1.length - n + 1;
  let cLength = num2.length - n + 1;
  let a = num1.slice(0, aLength);
  let b = num1.slice(aLength);
  let c = num2.slice(0, cLength);
  let d = num2.slice(cLength);
  console.log('after return mul', num1, num2, n, a, b, c, d);
  // console.log(num1.length, aLength -1, cLength -1)
  let ac = karatsuba(a, c, 0);
  let bd = karatsuba(b, d, 0);
  let adbc = karatsuba(addStringsByNumber(a, b), addStringsByNumber(d, c), 0) - ac - bd;
  // console.log(ac, bd, adbc);
  let acstr = ac.toString() + zeros(n);
  if (adbc < 0) {
    console.log('adbc minus', adbc);
  }
  let adbcstr = adbc.toString() + zeros(Math.floor(n/2));
  let bdstr = bd.toString();
  console.log(acstr, adbcstr, bdstr, base);
  // console.log(acstr, adbcstr, bd);
  return Number(String(Number(acstr) + Number(adbcstr) + Number(bd)) + zeros(base));
}

// console.log(karatsuba('10', '11', 1));
// console.log(karatsuba('3', '4', 1));
// console.log(karatsuba('1200', '3400', 0));
console.log(karatsuba('1234', '3456', 0));
console.log(1234 * 3456);
// console.log(karatsuba('1234', '3456') === 1234 * 3456);
