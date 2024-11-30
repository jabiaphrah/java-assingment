const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks < 80) {
        return 'B';
    } else if (marks >= 50 && marks < 60) {
        return 'C';
    } else if (marks >= 35 && marks < 50) {
        return 'D';
    } else if (marks >= 0 && marks < 34) {
        return 'E';
    } else {
        return 'Invalid marks'; // In case of invalid input outside 0-100 range
    }
}

rl.question('Enter the student marks (between 0 and 100): ', (marksInput) => {
    const marks = parseInt(marksInput);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Please enter marks between 0 and 100.');
    } else {
        const grade = getGrade(marks);
        console.log(`The grade is: ${grade}`);
    }
    rl.close();
});
