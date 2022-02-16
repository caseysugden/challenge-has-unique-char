// Write your code below
function checkIfUnique(word) {
    // Convert 'word' into array:
    let array = [...word];
    // Pass array to the new Set() constructor:
    let set = new Set([...array]);
    // Check if array is equal to set:
    return array.length === set.size;
};

console.log(checkIfUnique("Monday"));