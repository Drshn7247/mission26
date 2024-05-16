function mostWater(walls){
    let maxArea=0;
    let left=0;
    let right=walls.length-1;

    while(left<right){
        const width=right-left;
        const height=Math.min(walls[right],walls[left]);
        const area=width*height;

        maxArea=Math.max(area,maxArea);

        if(walls[left]<walls[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea;
}

const walls=[1,8,6,2,5,4,8,3,7];
const volume=mostWater(walls);
console.log(volume);