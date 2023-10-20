/**
 * @see {@link https://www.freecodecamp.org/learn/coding-interview-prep/data-structures/create-a-circular-queue}
 */
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write] = item;
      let next = (this.write + 1) % (this.max + 1);
      if (this.queue[next] === null || next === this.read) {
        this.write = next;
      }
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] !== null) {
      let res = this.queue[this.read];
      this.queue[this.read] = null;
      this.read = (this.read + 1) % (this.max + 1);
      return res;
    }
    return null;
  }
}
