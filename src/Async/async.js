async function foo(){
    console.log(1)
    console.log(await Promise.resolve(2));
}

async function bar(){
    console.log(3)
    await (console.log(4))
}

foo()
bar()