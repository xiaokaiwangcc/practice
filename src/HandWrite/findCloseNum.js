const arr = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
const num = 37
const findClosest = (arr, num) => {
    const creds = arr.reduce((acc, val, ind) => {
        console.log('acc', acc)
        let { diff, index } = acc;
        const difference = Math.abs(val - num);
        if(difference < diff){
            diff = difference;
            index = ind;
        };
        return { diff, index };
    }, {
        diff: Infinity,
        index: -1
    });
    return arr[creds.index];
};
console.log(findClosest(arr, num));