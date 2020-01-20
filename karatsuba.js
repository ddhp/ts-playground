// (x1*B^m + x0)(y1*B^m + y0) = (x1*y1)B^2m + (x1y0 + x0y1)B^m + x0y0
// z0 - x0*y0
// z2 = x1*y1
// z1 = x1y0 + x0y1 = (x1 + x0)*(y1 + y0) - x0y0 - x1y1
// (x1+x0)*(y1+y0) = x1y1 + x1y0 + x0y1 + x0y0;
// z1 = x1y0 + x0y1 = (x1+x0)*(y1+y0) - z0 - z1;
const karatsuba = (a, b) => {
  if (a < 10 || b < 10) {
    return a*b;
  }
  const biggerLength = a > b ? String(a).length : String(b).length;
  const halfIndex = Math.floor(biggerLength/2);
  const m = biggerLength - halfIndex;
  const B = Math.pow(10, m);
  console.log(biggerLength, halfIndex, m, B);
  const x1 = Math.floor(a / B);
  const x0 = a % B;
  const y1 = Math.floor(b / B);
  const y0 = b % B;
  console.log(x1, x0, y1, y0);
  const z0 = karatsuba(x0, y0);
  const z2 = karatsuba(x1, y1);
  const z1 = karatsuba(x0+x1, y1+y0) - z0 - z2;
  return Math.pow(10, 2*m)*z2 + Math.pow(10, m)*z1 + z0;
}

console.log(karatsuba(1234, 3456789, 0));
console.log(1234 * 3456789);
