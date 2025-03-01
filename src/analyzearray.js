function analyzeArray(arr){
    let obj = {}
    let sum = 0;
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);
        sum += arr[i];
    }

    obj.max = max;
    obj.min = min;
    obj.average = sum / arr.length;
    obj.length = arr.length;

    return obj;
}

export {analyzeArray};