class People {
    constructor(name) {
        this.name = name
    }
    eat(){
        console.log('chichi')
    }
}

class Student extends People{
    constructor(props, number) {
        super(props);
        this.number = number
    }
    student(){
        console.log(this.name + '学号是' + this.name)
    }

}

const student = new Student('11', '20')
console.log(student)
console.log(student instanceof People)
student.eat()