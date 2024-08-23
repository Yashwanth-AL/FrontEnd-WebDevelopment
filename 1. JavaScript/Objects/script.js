const student = {
  firstName: "Yashwanth A L",
  sem: "e", 
  college: "Sri Jaya Chamarajendra College of Engineering",
  print: () => {
    console.log(`Name: ${student.firstName}\nSem: ${student.sem}\nCollege: ${student.college}`);
  },
  display() {
    console.log("this is display method");
  }
};


const st = {
  age : 20
}

const str = {
  age : 23
}

str.__proto__ = student;
student.print();

