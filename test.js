


function searchMaxIndex(arr, val) {
    let i = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] >= val) {
            break;
        }
    }
    return i < arr.length ? i : arr.length - 1;
}

function fun(arr, val) {
    if(arr[0] >= val) {
        return -1;
    }
    let max_index = searchMaxIndex(arr, val);

    let start = 0;
    let end = max_index;
    let success = false;

    while(!success && end < arr.length) {
        // debugger
        let res = arr[start] + arr[end];
        console.log(res);
        if(res == val) {
            // debugger
            return {
                index1: start + 1,
                index2: end + 1
            }
        } else if(res > val) {
            // debugger
            end--;
            if(end == start) {
                return -1;
            }
        } else {
            // debugger
            start++;
            if(start == end) {
                end++;
            }
        }
    }
    return -1;
}

fun([1,2,3,7,9], 16)