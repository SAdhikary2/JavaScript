function addSquares(a, b) {
    const sa = square(a);
    const sb = square(b);

    function square(num) {
        return num * num;
    }

    return sa + sb;
}

console.log('The Square Sum is :',addSquares(3, 4));