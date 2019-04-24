//includes
Array.prototype.includes=function(element){
   return this.indexOf(element)!==-1;
};

//map
Array.prototype.map=function(fn,context){
  let newArr=[];
  for(let i=0;i<this.length;i++){
     newArr.push(fn.call(context,this[i],i,this))
  }
  return newArr
};

//forEach
Array.prototype.forEach=function(fn,context){
  for(let i=0;i<this.length;i++){
    fn.call(context,this[i],i,this)
  }
};

//filter
Array.prototype.filter=function(fn,context){
  let newArr=[];
  for(let i=0;i<this.length;i++){
    if(fn.call(context,this[i],i,this)){
      newArr.push(this[i])
    }
  }
  return newArr
};

//find
Array.prototype.find=function(fn,context){
  for(let i=0;i<this.length;i++){
    if(fn.call(context,this[i],i,this)){
      return this[i]
    }
  }
}

//findIdex
Array.prototype.findIndex=function(fn,context){
  for(let i=0;i<this.length;i++){
    if(fn.call(context,this[i],i,this)){
      return i
    }
  }
  return -1
}

//some
Array.prototype.some=function(fn,context){
  for(let i=0;i<this.length;i++){
    if(fn.call(context,this[i],i,this)){
      return true
    }
  }
  return false
}

//every
Array.prototype.every=function(fn,context){
  for(let i=0;i<this.length;i++){
    if(fn.call(context,this[i],i,this)){
      return false
    }
  }
  return true
}

//reduce
Array.prototype.reduce=function(fn,initialValue,context){
  let total=initialValue!==undefined?initialValue:this[0];
  for(let i=initialValue!==undefined?0:1;i<this.length;i++){
    total=fn.call(context,total,this[i], i, this)
  }
  return total;
}
//concat
Array.prototype.concat=function(){
  let newArr=[];
  for(let i in arguments){
    if(arguments[i] instanceof Array){
      for(let j=0;j<arguments[i].length;j++){
        newArr[newArr.length]=arguments[i][j]
      }
    } else{
      newArr[newArr.length]=arguments[i]
    }

  }
  return newArr
}

//join
Array.prototype.join=function(separator=','){
  let str='';
  for(let i=0;i<this.length;i++){
     str+=this[i]+(i<this.length-1?separator:null)
  }
  return str;
}

//pop
Array.prototype.pop=function(){
  let result=this[this.length-1];
  this.length=this.length-1;
  return result
}

//push
Array.prototype.push=function(item){
  this[this.length]=item;
  return this.length;
}

//reverse
Array.prototype.reverse=function(){
  let arr=JSON.parse(JSON.stringify(this))
  for(let i=arr.length-1;i>=0;i--){
    this[this.length-1-i]=arr[i]
  }
  return this;
}

//shift
Array.prototype.shift=function(){
  let item=this[0]
  for(let i=0;i<this.length-1;i++){
    this[i]=this[i+1]
  }
  this.length=this.length-1;
  return item
}

//slice
Array.prototype.slice=function(start,end){
  let newArr=[];
  if(!end){
     if(start>=0){
       for(let i=start;i<this.length;i++){
        newArr.push(this[i])
       }
     } else{
      for(let i=this.length+start;i<this.length;i++){
        newArr.push(this[i])
       }
     }
  } else{
    if(start>=0&&end>=0){
      for(let i=start;i<end&&i<this.length;i++){
        newArr.push(this[i])
      }
    } else if(start>=0&&end<0){
      for(let i=start;i<this.length+end&&i>=0;i++){
        newArr.push(this[i])
      }
    } else if(start<0&&end>=0){
      for(let i=this.length+start;i<end&&i<this.length;i++){
        newArr.push(this[i])
      }
    } else{
      for(let i=this.length+start;i<this.length+end&&i>0;i++){
        newArr.push(this[i])
      }
    }
  }
  return newArr
}


