const obj1 = {
    name: 'karry',
    age: 20,
    address: {
        city: 'beijing'
    },
    arr: [1,3,4,5,6],
    null: null
}

const deepClone = (obj) => {
    if (typeof obj !== 'object' || obj == null){
        return obj
    }

    let result
    if (obj instanceof Array) {
        result = []
    }else {
        result = {}
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

const obj2 = deepClone(obj1)

obj2.address.city= 'sssss'
obj2.null= 'sssss'
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))
console.log(obj1.isPrototypeOf('name'))