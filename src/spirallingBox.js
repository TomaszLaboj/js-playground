const spirallingBox = (m, n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push([]);
    for (let j = 0; j < m; j++) {
      array[i].push(Math.min(...[j + 1 - 0, i + 1 - 0, m - j, n - i]));
    }
  }
  return array;
};

console.log(spirallingBox(7, 7));

/*
if you have 3x3 array, do it in 2 iterations:
1 - start with index 0 and end with 2 as per length 3 and fill with 1s
2 - start with index 1 and end with 1 ( so previous start + 1 and last ending index - 1) fill with 2

[1, 1, 1, 1, 1],
[1, 2, 2, 2, 1],
[1, 2, 3, 2, 1],
[1, 2, 2, 2, 1],
[1, 1, 1, 1, 1],
              0          1          2
[1, 1, 1]  0 [1row 1col, 1row 2col, 1row 3col ]  []
[1, 2, 1]  1 [2row 1col, 2row 2col, 2row 3col ]
[1, 1, 1]  2 [3row 1col, 3row 2col, 3row 3col ]

3, 3
[]  i = 0, j = 0
*/
