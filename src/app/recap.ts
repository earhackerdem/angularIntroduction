const username: string  = "saul";
const sum = (a:number, b:number) :number =>{
  return a +b ;
}

sum(1,3);

class Person{

  constructor(public age: number, public lastName: string){}

}

const saul = new Person(25,"Perez");
saul.age;
saul.lastName;
