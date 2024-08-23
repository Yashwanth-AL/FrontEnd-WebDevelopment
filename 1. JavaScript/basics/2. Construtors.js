function Person(first, last, age, gender) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
  this.nationality = "western";
  this.fullName = function () {
    return this.first + this.last ;
  };
}

//to add new property to the constructors we must specify it as a prototype
Person.prototype.nationality = "indian";

const mySelf = new Person("yash", "wanth", 20, "male");
console.log(mySelf);
console.log(mySelf.fullName()); //with paranthesis executes function
console.log(mySelf.fullName); // without paranthesis gives values defined

// changing the values of the function
mySelf.changeLastName = function(lastname){
  this.last = lastname;
}

mySelf.changeLastName("superstar");
console.log(mySelf);

