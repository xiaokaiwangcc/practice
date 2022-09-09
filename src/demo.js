function GetNumberOfK(data, k)
{
    if(data.length == 0) return 0
    let first = 0
    let last = data.length
    while(last > first){
        let mid =first + Math.floor((last - first) / 2)
        if(data[mid] < k){
            first = mid + 1
        } else {
            last = mid
        }
    }
    let start = first

    first = 0
    last = data.length
    while(last > first){
        let mid =first + Math.floor((last - first) / 2)
        if(data[mid] > k){
            last = mid
        } else{
            first = mid + 1
        }
    }
    let end = last
    return end-start
}

console.log(GetNumberOfK([1, 2, 3, 3, 4, 5, 7], 3));

new Promise((resolve, reject) => {
    Promise.resolve(3);
    console.log(4)
    Promise.resolve(5);

}).then(res => {
    console.log(res)
})