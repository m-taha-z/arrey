let x = [5, 10, 100];
let d = 0;
let n = -1;
for (let key in x) {
  n++;
}
for (let i = 0; i <= n ; i++) {
  d = d + x[i];
}
console.log(d);