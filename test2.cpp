
#include<iostream>

using namespace std

int searchMaxIndex(int* arr, int val) {
    int i = 0;
    for(i = 0; i < arr.length(); i++) {
        if(arr[i] >= val) {
            break;
        }
    }
    return i < arr.length() ? i : arr.length() - 1;
}

 bool function main(int* arr, int val) {
    if(arr[0] >= val) {
        cout << -1;
        return false;
    }
    int max_index = searchMaxIndex(arr, val);

    int start = 0;
    int end = max_index;
    bool success = false;

    while(!success && end < arr.length()) {
        int res = arr[start] + arr[end];
        if(res == val) {
            cout << start << end;
            return false;
        } else if(res > val) {
            end--;
            if(end == start) {
                cout << -1;
                return false;
            }
        } else {
            start++;
            if(start == end) {
                end++;
            }
        }
    }
    cout << -1;
    return false;
}
