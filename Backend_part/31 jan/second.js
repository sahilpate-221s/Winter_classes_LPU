// Function to sum an array of numbers
export const sum = (numbers) => {
    console.log("sum function called");
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(total);
    return total;
}

export const multipy = (a, b) => {
    console.log("multipy function called");
    console.log(a * b);
}
