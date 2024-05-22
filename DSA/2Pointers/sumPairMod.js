function sumPairsMod(arr, sum){

    const MOD=1000000007;
    let i=0 , j=arr.length-1,count=0;

    while(i<j){
        if(arr[i]+arr[j]<sum){
            i++;
        }else if(arr[i]+arr[j]>sum){
            j--;
        }else{
            if(arr[i]==arr[j]){
                let freq=j-i+1;
                count+=(freq*(freq-1)/2)%MOD;
                count%=MOD;
                break;
            }else{
                let count1=0;
                let x=arr[i];
                while(i<j && arr[i]==x){
                    count1++;
                    i++;
                }

                let count2=0;
                let y=arr[j];
                while(j>=i && arr[j]==y){
                    count2++;
                    j--;
                }

                count+=(count1*count2)%MOD;
                count%=MOD;
            }
        }
    }
    return count;

}


const arr = [1,1,2,2,2,2,3,3,3];
const sum=4;
console.log(`count of pairs: ${sumPairsMod(arr,sum)}`)