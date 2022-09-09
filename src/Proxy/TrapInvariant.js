const target = {};

Object.defineProperty(target, 'foo', {
    configurable: false,
    writable: false,
    value: 'ddd'
})

const handler = {
    get() {
        return 'aaa'
    }
}

const proxy = new Proxy(target, handler)

console.log(proxy.foo)

