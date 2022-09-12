// for...in  forEach常规同步遍历
// for...of 异步遍历

function muti(num){
    return new Promise((resolve => {
        setTimeout(()=> {
            resolve(num*num)
        }, 1000)
    }))
}

const nums = [1,2,3]
nums.forEach(async i => {
    const res = await muti(i)
    console.log(res)
});

(
    async function (){
        for (const num of nums) {
            const res = await muti(num)
            console.log(res)
        }
    }()
)
