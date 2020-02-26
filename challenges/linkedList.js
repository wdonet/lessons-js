/**
 * Given two sorted linked lists,
 * Get a new one concatenating the first two with their elements sorted
 * input one: 3 -> 7 -> 12 -> 13
 * input two: 2 -> 9 -> 11 -> 14
 * output: 2 -> 3 -> 7 -> 9 -> 11 -> 12 -> 13 -> 14
 */
// daniel.solis@scalablepress.com

const Node = function (value, next) {
  this.value = value;
  this.next = next;
  this.valueOf = function() { return this.value; };
  this.toString = function() {
    const arrow = this.next ? ' -> ' : '';
    const nextNode = this.next ? this.next.toString() : '';
    return `${this.value} ${arrow} ${nextNode}`;
  },
  this.length = function() {
    return 1 + ((this.next && this.next.length()) || 0);
  }
  this.clone = function() {
    return new Node(this.value);
  }
  this.setNext = function(n) { this.next = n; }
};
const n3 = new Node(3, new Node(7, new Node(12, new Node(13))));
const n2 = new Node(2, new Node(9, new Node(11, new Node(14))));
console.log('-- Input --');
console.log('n2:', n2.toString());
console.log('n3:', n3.toString());
 
const concat = (one, two) => {
  let result = null;
  if (!one || !two) {
    if (!one) return two;
    return one || result;
  }
  let [largest, shortest] = one.length() > two.length() ? [one, two] : [two, one];
  result = new Node(0);
  const rootNode = result;
  while(largest) {
    if (largest - shortest < 0) {
      result.setNext(largest.clone());
      largest = largest.next;
    }
    else {
      if(shortest) {
      result.setNext(shortest.clone());
      shortest = shortest.next;
      }
    }
    result = result.next;
  }
  return rootNode.next;
};

console.log('-- Output --');
console.log('empty + empty:', concat());
console.log('n2 + empty:', concat(n2).toString());
console.log('empty + n3:', concat(null, n3).toString());
console.log('n2 + n3:', concat(n2, n3).toString());

