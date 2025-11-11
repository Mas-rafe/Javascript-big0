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

//set implementation

const removeDuplicateSet = (arr) => {
    const set = new Set(arr);
    return Array.from(set)
};
console.log(removeDuplicateSet(arr));