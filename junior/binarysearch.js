const arr = ["a", "b", "c", "x", "y", "z"]

function findMe(target, start, end) {

    // base condition to stop the loop when it reaches the end of array
    if (start > end) {
        return "Not Found"
    }


    // compute the middle
    const middle = Math.floor((start + end) / 2)
    //   to check if it is equal to the target
    if (arr[middle] === target) {
        return `Found it at index ${middle}`
    }
    // if not found we need to continue searching

    // if middle value is greater  then recursion comes in and we put the ending index as "middle"
    if (arr[middle] > target) {
        return findMe(target, start, middle - 1)
    }

    // if middle value is less then the target ,we put the starting index as the "middle"
    if (arr[middle] < target) {
        return findMe(target, middle + 1, end)
    }
}
