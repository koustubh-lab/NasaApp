let dividend = 50;
let divisor = 0;

try {
    if (divisor != 0) {
        let result = dividend / divisor;
        console.log(`Result: ${result}`);
    } else {
        throw new Error("Divide by Zero");
    }
} catch (error) {
    console.log(`Error: ${error.message}`);
}
