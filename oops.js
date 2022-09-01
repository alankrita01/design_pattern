class Student{
  static count=0;
  constructor(name,age,phoneNo,marks){
    this.name=name,
    this.age=age,
    this.phoneNo=phoneNo,
    this.marks=marks
    Student.count+=1;
  }

  /*object_count(){
   return Student.count++;
  }

  display(count){
    console.log(count);
  }*/

  function (){
    if(this.marks>=40){
      console.log('egligible');
    }
    else{
      console.log("not egligible");
    }
  }  
}


let s1= new Student('Happy',21,7894563210,85);
let s2= new Student('Frod',23,7894654210,25);
let s3= new Student('John',22,7894563789,76);
let s4= new Student('siya',20,7123563210,30);
let s5= new Student('riya',25,7897413210,40);
console.log(s1.function());
console.log(s2.function());
console.log(s3.function());
console.log(s4.function());
console.log(s5.function());

console.log(Student.count);
