// 可撤销代理

const target = {
    foo: 'bar'
}

const handler = {
    get() {
        return 'intercepted'
    }
}

const { proxy, revoke } = Proxy.revocable(target, handler)

console.log(proxy.foo)
console.log(target.foo)

revoke()
// console.log(proxy.foo)