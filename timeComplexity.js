function bigOne(arr) {
    return arr[1];
}
console.log(bigOne(['A', 'B', 'C']));

//Big o(n)

function bigON(arr) {
    for (let i of arr) {
        console.log(i);

    }
}
bigON(['A', 'B', 'C'])

//Big o(n^2)

const bigONSquare = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
bigONSquare(['A', 'B', 'C'])

//Big o(login)
