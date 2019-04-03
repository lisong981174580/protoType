
//冒泡排序
function sort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-1;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr
}

//快速排序
function quickSort(arr){
  if(arr.length<=1){
    return arr
  }
  let index=Math.floor(arr.length/2);
  let element=arr.splice(index,1)[0];
  let left=[],right=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]<element){
      left.push(arr[i])
    } else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([element],quickSort(right))
}

//深拷贝
function deepCopy(obj){
  let result=Array.isArray(obj)?[]:{};
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      if(typeof obj[key] === 'object'){
        result[key]=deepCopy(obj[key])
      } else{
        result[key]=obj[key]
      }
    }
  }
  return result;
}
