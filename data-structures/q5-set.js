/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/perform-a-union-on-two-sets}
 */
class Set {
  constructor() {
    // This will hold the set
    this.dictionary = {};
    this.length = 0;
  }
  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }
  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }
  // This method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }
  // This method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // This method will return the size o;f the set
  size() {
    return this.length;
  }

  union(setB) {
    const thisDictValues = this.values();
    const setBValues = setB.values();
    const unionSet = new Set();
    
    for (let i = 0; i < thisDictValues.length; i++) {
      unionSet.add(thisDictValues[i]);
    }
    for (let i = 0; i < setBValues.length; i++) {
        unionSet.add(setBValues[i]);
      }
      return unionSet;
  }
  
}
const setA = new Set();
const setB = new Set();
setA.add(1)
console.log(setA.union(setB));
console.log(setA.size());
