
Array.prototype.includes=function(element){
   return this.indexOf(element)!==-1;
};

Array.prototype.map=function(fn,context){
  let newArr=[];
  for(let i=0;i<=this.length-1;i++){
     newArr.push(fn.call(context,this[i],i,this))
  }
  return newArr
};

Array.prototype.forEach=function(fn,context){
  for(let i=0;i<=this.length-1;i++){
    fn.call(context,this[i],i,this)
  }
};

Array.prototype.filter=function(fn,context){
  let newArr=[];
  for(let i=0;i<=this.length-1;i++){
    if(fn.call(context,this[i],i,this)){
      newArr.push(this[i])
    }
  }
  return newArr
};


