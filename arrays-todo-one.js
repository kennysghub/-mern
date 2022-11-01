// Push Front

function pushFront(a, b) {
    return [ b, a ]
}
console.log(pushFront([ 5, 7, 2, 3 ], 8))

//Pop Front- Remove & Return Value at beg. of array

function popFront(arr) {
    temp = arr[ 0 ]
    arr[ 0 ] = arr[ 4 ]
    for (i = 0; i < arr.length; i++) {
        arr[ i ] = arr[ i + 1 ]
    }
    arr.pop()
    console.log(arr)
    return (temp)
}


console.log(popFront([ 0, 5, 10, 15 ]))


//Insert At 

function insertAt(array, index, value) {
    array.push(value);
    console.log(array);//100, 200, 5, 311
    temp = array[ index ]//5
    array[ array.length - 1 ] = value//311
    array[ index ] = value;
    array[ array.length - 1 ] = temp;
    return (array)
}

insertAt([ 100, 200, 5 ], 2, 311)





