// inear (sequential) search goes through all possible elements in some array and compare each one with the desired element.

// eg:When you ask MySQL something like "SELECT x FROM y WHERE z = t" and "z" is a column without index,linear search is performed with all the consequences of it.This is why adding an index to searchable columns is important

function linearSeach(arr, toFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === toFind) return i
    }
    return console.log("not found")
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(linearSeach(array1, 6))// returns index position i.e is 5