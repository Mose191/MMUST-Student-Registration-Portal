
let studentName = "Benjamin Smocha";
let regNo = "BCS/001/2023";
let programme = "BSc Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + regNo);
console.log("Academic Programme: " + programme);



function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 69) {
        return "B";
    } else if (score >= 50 && score <= 59) {
        return "C";
    } else if (score >= 40 && score <= 49) {
        return "D";
    } else if (score < 40 && score >= 0) {
        return "E";
    } else {
        return "Invalid Score";
    }
}


let gradeResult = calculateGrade(75);
alert("The student's grade for a score of 75 is: " + gradeResult);






const studentForm = document.getElementById("studentForm");
const resultContainer = document.getElementById("resultContainer");

studentForm.addEventListener("submit", function(event) {
    
    event.preventDefault();

    
    const studentNameValue = document.getElementById("studentName").value.trim();
    const regNoValue = document.getElementById("regNo").value.trim();
    const emailValue = document.getElementById("email").value.trim();

  
    if (studentNameValue === "" || regNoValue === "") {
        resultContainer.innerHTML = `<p style="color: red;">Error: Full Name and Registration Number cannot be empty!</p>`;
        return; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
        resultContainer.innerHTML = `<p style="color: red;">Error: Please enter a valid email address format (e.g., user@example.com)!</p>`;
        return; 
    }

   
    
    resultContainer.innerHTML = `
        <p style="color: green; font-weight: bold;">Validation Successful! Form submitted.</p>
        <p><strong>Student Name:</strong> ${studentNameValue}</p>
        <p><strong>Registration No:</strong> ${regNoValue}</p>
    `;
});