/*
Excercise:
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of 
elements which are in either of the two sets but not in both. For example, 
for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. 
So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), 
you must complete one operation at a time. Thus, for sets A and B above, 
and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their 
symmetric difference. The returned array must contain only unique values (no duplicates).
*/

/**
 * Find the Symmetric Difference
 * @param {*} args 
 * @returns 
 */
function sym(args) {
  if (arguments.length === 1) {
    return [...new Set(arguments[0])]
  }
  const A = [...new Set(arguments[0])];
  const B = [...new Set(arguments[1])];

  args = sym([...A.filter((num) => !B.includes(num)),
  ...B.filter((num) => !A.includes(num))], ...[...arguments].slice(2));

  return args;

}

sym([1, 2, 3], [5, 2, 1, 4]);