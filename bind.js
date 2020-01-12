// "bind()"
// 
let log = console.log;

const myModule = {
  x: 43,
  fnX: function () { return this.x; },
  arrowX: () => this.x
}

let fnx = myModule.fnX;
log('fn: ', fnx()); // undefined bc looking for x at global scope
let arrowx = myModule.arrowX;
log('arrow fn: ', arrowx()); // undefined bc looking for x at global scope

fnx = myModule.fnX.bind(myModule);
log('fn: ', fnx());  // 43
arrowx = myModule.arrowX.bind(myModule);
log('arrow fn: ', arrowx()); // bind not working with arrow fn !!

// Within a function
function Point(x, y) {
  this.x = x;
  this.y = y;
}
let p = new Point(1,2);
 log(Point, p.x, p.y);  // 1 2
Point.prototype.toString = function() { return `${this.x},${this.y}`; };
log(Point, p.toString()); // [Function: Point] '1,2'
let coordenates = {};
let YPoint = Point.bind(coordenates, 0 /*X*/); // coordenates is ignored when using 'new', like sending null
let axisPoint = new YPoint(5);
log(YPoint, axisPoint, 'toString():', axisPoint.toString());
log('coordenates:', coordenates);  // {}
log(p instanceof Point); // true
log(axisPoint instanceof Point); // true

// Within a class
class myClassX {
  constructor() {
    this.x = 55;
  }

  getX() {
    let get = myModule.fnX.bind(this);
    return get();
  }
}
let myInstanceX = new myClassX();
log('class . get(): ', myInstanceX.getX()); // 55
