function pushValues(src, destination){
    for(let i =0;i<destination.length;i++){
     src.push(destination[i]);
    }
    return src;
 }
 
 
 Array.prototype.myConcat = function(){
 
     const argumentBunch = arguments;
    let inputArray = this;
 
    for(let i=0;i<argumentBunch.length;i++){
     if(Array.isArray(argumentBunch[i])){
       inputArray= pushValues(inputArray, argumentBunch[i]);
     }else{
         inputArray.push(argumentBunch[i]);
     }
    }
    return inputArray;
 }
 
 const array =[1,2,3,4];
 const array1 = [5,6,7,8];
 const value = 'y';
 const value2 = () =>{} ;
 
 
 console.log(array.myConcat(array1,array1,value,value2));