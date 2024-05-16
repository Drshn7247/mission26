function sumPairsCount(arr,sum,n){
    let ans=0;
    let i=0;
    let j=n-1;

    while(i<j){
        if(arr[i]+arr[j]<sum){
            i++;
        }else if(arr[i]+arr[j]>sum){
            j--;
        }else{

            if(arr[i]==arr[j]){
                let freq=j-i+1;
                ans+=freq*freq-1/2;
            }else{
                let count1=0;
                let x=arr[i];
                while(i<j && arr[i]==x){
                    i++;
                    count1++;
                }

                let count2=0;
                let y=arr[j];
                while(j>=i && arr[j]==y){
                    j--;
                    count2++;
                }

                ans+=count1*count2;
            }
        }
    }
    return ans;
}

let arr=[1,3,3,3,3,4,5,6,7,7,7,7];
let n = arr.length;
let sum = 10;

const pair = sumPairsCount(arr,sum,n);
console.log(pair);