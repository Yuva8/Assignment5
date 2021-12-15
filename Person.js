class Person{
    constructor(name1,age1,gender1,occupation1,phno){
        this.name = name1;
        this.age = age1;
        this.gender = gender1;
        this.occupation = occupation1;
        this.phno = phno;

    }
    getname(){
        console.log(`This is my name ${this.name}`)
    }
    
    getage(){
        console.log(`This is my age ${this.age}`)
    }
    getgender(){
        console.log(`Iam ${this.gender}`)
    }
    getoccupation(){
        console.log(`Iam working as a  ${this.occupation}`)
    }
    getphno(){
        console.log(`my phno is ${this.phno}`)
    }
    setname(dash){
        this.name = dash
        }
    
    setage(newage){
        this.age = newage
        }
    setgender(gender1){
            this.gender = gender1
            }
    setoccupation(occupation1){
                this.occupation = occupation1
                }
    setphno(phno1){
                    this.phno = phno1
                    }

}

let person1 = new Person()
let person2 = new Person("logi",24,"male","graphic designer",6564944)
person1.setname("vikas");
person1.setage(25);
person1.setgender("male");
person1.setoccupation("dancer");
person1.setphno(90990845466);

person1.getname();
person1.getage();
person1.getgender();
person1.getoccupation();
person1.getphno();

person2.getname();
person2.getage();
person2.getgender();
person2.getoccupation();
person2.getphno();


