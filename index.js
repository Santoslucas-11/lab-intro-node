class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
  }

  get(pos) {

    if (pos <=this.items.length){
      return this.items[pos];
      } else {
      throw new Error('OutOfBounds')
      }
    }

  max() {
    if (this.items.length !== 0){
      return this.items[this.items.length-1]
      } else {
        throw new Error('EmptySortedList')
      }
    }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b)
    }
    return 0
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      let total = 0;
      for (let i in this.items) {
        total += this.items[i];
      }
      let avg = total / this.items.length;
      return avg;
    }
  }
}
module.exports = SortedList;
