/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-set-class}
 */
class Set {
  constructor() {
    // Dictionary will hold the items of our set
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

  add(val) {
    if (!Object.hasOwn(this.dictionary, val)) {
      this.dictionary[val] = val;
      return true;
    }
    return false;
  }

  remove(val) {
    return delete this.dictionary[val];
  }

  size() {
    return Object.keys(this.dictionary).length;
  }
}

