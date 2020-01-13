// Base object factory
function address(number, st, postal) {
  var that = { number, st, postal };
  return that;
}

// Child object, intheriting from address
function companyAddress(number, st, postal, building, officeNumber) {
  var that = address(number, st, postal);
  //Augment that object
  that.building = building;
  that.officeNumber = officeNumber;
  that.toString = function() {
    let {number, st, postal, building, officeNumber} = that;
    return `${number} ${st}, ${building}-${officeNumber}, P.C. ${postal}`;
  }
  return that;
}

var address = companyAddress(356, 'Homer', '84768', 'Manufacturing', 478);
console.log(address.toString());
