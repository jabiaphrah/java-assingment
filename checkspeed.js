// Importing the readline module to handle user input from the console
const readline = require('readline');

// Create an interface for reading input and writing output to the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check the speed and calculate demerit points or suspension
function checkSpeed(speed) {
    const speedLimit = 70; // Define the speed limit in km/h
    const kmPerPoint = 5;  // Number of kilometers over the limit that equal 1 demerit point

    // Check if the speed is below the speed limit
    if (speed < speedLimit) {
        console.log("Ok");  // Print "Ok" if the speed is within the limit
    } else {
        const excessSpeed = speed - speedLimit;  // Calculate how much the speed exceeds the limit
        const demeritPoints = Math.floor(excessSpeed / kmPerPoint); // Calculate demerit points by dividing the excess speed by kmPerPoint

        // If the demerit points exceed 12, the driver's license is suspended
        if (demeritPoints > 12) {
            console.log("License suspended");  // Print "License suspended" if the points exceed 12
        } else {
            console.log(`Points: ${demeritPoints}`);  // Otherwise, print the calculated demerit points
        }
    }
}

// Prompt the user to input the speed of the car
rl.question('Enter the speed of the car: ', (speedInput) => {
    const speed = parseInt(speedInput);  // Convert the input to an integer
    checkSpeed(speed);  // Call the checkSpeed function with the input speed
    rl.close();  // Close the readline interface after the operation
});
