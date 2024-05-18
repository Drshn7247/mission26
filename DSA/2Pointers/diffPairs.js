function diffPairs(arr,k){
    arr.sort((a,b)=>a-b);

    let count=0;
    let left=0;
    let right=1;

    while(right<arr.length){
        let diff=arr[right]-arr[left];

        if(diff===k){
            console.log(`pair found: (${arr[right]}, ${arr[left]})`)
            left++;
            right++;
            count++;

            while(left<arr.length && arr[left]===arr[left-1]) left++;
            while(right<arr.length && arr[right]===arr[right-1]) right++;
        }else if(diff<k){
            right++;
        }else{
            left++;
            if(left===right) right++;
        }
    }
    return count;
}

const arr=[1,5,3,4,2];
const k=2;
const totalPairs=diffPairs(arr,k)
console.log(totalPairs)