class Student{
  constructor(name,age,phoneNo,marks){
    this.name=name,
    this.age=age,
    this.phoneNo=phoneNo,
    this.marks=marks
  }

  setPlacementAge(minAge){
   // console.log(this);
    return (minMarks)=>{

     // console.log(this);
      if(this.marks>minMarks && this.age>minAge){
        console.log('egligible');

      }
      else{
        console.log('not egligible');
      }
    }
  }
}

let s1= new Student('Happy',21,7894563210,85);

let s2= new Student('Frod',23,7894654210,25);

let s3= new Student('John',22,7894563789,76);

let s4= new Student('siya',20,7123563210,30);

let s5= new Student('riya',25,7897413210,40);

s1.setPlacementAge(18)(40);

s2.setPlacementAge(25)(50);

/*console.log(s3.setPlacementAge());

console.log(s4.setPlacementAge());

console.log(s5.setPlacementAge());*/