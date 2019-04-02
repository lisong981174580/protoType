
Array.prototype.includes=function(element){
   return this.indexOf(element)!==-1;
}

Array.prototype.map=function(fn,context){
  let newArr=[];
  for(let i=0;i<=this.length-1;i++){
     newArr.push(fn.call(context,this[i],i,this))
  }
  return newArr
}

