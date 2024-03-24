const fs = require('fs');

// Read the file and parse the data
let data = JSON.parse(fs.readFileSync('studentai.json', 'utf8'));

// Initialize variables
let totalStudents = 0;
let totalAge = 0;
let totalGrades = 0;
let totalGradeCount = 0;
let studentAverages = [];

// Loop through each student
data.forEach(student => {
    totalStudents++;
    totalAge += student.amzius;
    totalGrades += student.pazymiai.reduce((a, b) => a + b, 0);
    totalGradeCount += student.pazymiai.length;
    studentAverages.push({vardas: student.vardas, pavarde: student.pavarde, vidurkis: parseFloat((student.pazymiai.reduce((a, b) => a + b, 0) / student.pazymiai.length).toFixed(1))});
});

// Calculate averages
let averageAge = totalAge / totalStudents;
let averageGrade = parseFloat((totalGrades / totalGradeCount).toFixed(1));

// Print results
console.log(`Studentų kiekis: ${totalStudents}`);
console.log(`Studentų amžiaus vidurkis: ${averageAge}`);
console.log(`Visų pažymių vidurkis: ${averageGrade}`);

// Print each student's average grade
studentAverages.forEach(student => {
    console.log(`Studentas: ${student.vardas} ${student.pavarde}, Vidurkis: ${student.vidurkis}`);
});