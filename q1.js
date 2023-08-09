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