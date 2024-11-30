const readline = require("readline");

// Function to calculate NHIF deduction
function calculateNHIFDeduction(grossSalary) {
    if (grossSalary <= 5999) return 150;
    else if (grossSalary <= 7999) return 300;
    else if (grossSalary <= 11999) return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) return 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 35000-39999) return 950;
    else return 1000;
}

// Function to calculate NSSF deduction
function calculateNSSFDeduction(grossSalary) {
    const tier1 = Math.min(grossSalary, 6000) * 0.06;
    const tier2 = Math.max(Math.min(grossSalary - 6000, 18000), 0) * 0.06;
    return tier1 + tier2;
}

// Function to calculate PAYE (Tax)
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) return grossSalary * 0.1;
    else if (grossSalary <= 32333) return 2400 + (grossSalary - 24000) * 0.25;
    else return 2400 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const nhifDeduction = calculateNHIFDeduction(grossSalary);
    const nssfDeduction = calculateNSSFDeduction(grossSalary);
    const paye = calculatePAYE(grossSalary);

    const netSalary = grossSalary - (nhifDeduction + nssfDeduction + paye);

    return {
        "Gross Salary": grossSalary,
        "PAYE (Tax)": paye,
        "NHIF Deduction": nhifDeduction,
        "NSSF Deduction": nssfDeduction,
        "Net Salary": netSalary
    };
}

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for input
rl.question("Enter your basic salary: ", (basicSalaryInput) => {
    rl.question("Enter your benefits: ", (benefitsInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        const benefits = parseFloat(benefitsInput);

        if (isNaN(basicSalary) || isNaN(benefits)) {
            console.log("Please enter valid numeric values for salary and benefits.");
        } else {
            const salaryDetails = calculateNetSalary(basicSalary, benefits);
            for (const [key, value] of Object.entries(salaryDetails)) {
                console.log(`${key}: ${value.toFixed(2)}`);
            }
        }
        rl.close();
    });
});