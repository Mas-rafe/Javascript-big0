const arr = ["apple","mango","banana","apple"];

//Brute Force

const removeDuplicateArr = (arr) =>{
    const newArr = [] ;

    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
        
    });
     return newArr;
}
console.log(removeDuplicateArr(arr));
