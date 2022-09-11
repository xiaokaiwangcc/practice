function closureCreateCache(){
    const data = {}
    return {
        set: function (key, value){
            data[key] = value
        },
        get: function (key){
            return data[key]
        }
    }
}

const c = closureCreateCache()
c.set('a',  100)
console.log(c.get('a'));