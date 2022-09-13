import { api, fn} from './a' // 解构赋值
import singleFn from "./b";

console.log('this is index.js')

const sum = (a, b) => {
    return a+b
}

const res = sum(10, 20)

console.log('res', res)

class Student {
    constructor(props) {
        this.name = props.name
    }
}

const student = new Student({name: 'karry'})
console.log('student', student)
console.log(api)
singleFn('aaaaa')