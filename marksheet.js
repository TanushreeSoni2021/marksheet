let userName = prompt("ENter name");
let userClass = prompt("ENter class");
let userYear = +prompt("ENter Year");
let userSubject1 = +prompt("ENter Subject1");
let userSubject2 = +prompt("ENter Subject2");
let userSubject3 = +prompt("ENter Subject3");
let userSubject4 = +prompt("ENter Subject4");
let userSubject5 = +prompt("ENter Subject5");

let instituteName = "Sant Singaji Institute of Sci & Manag (SSISM) ";
let student = {
  name: userName.toUpperCase(),
  classs: userClass.toUpperCase(),
  year: userYear,
  sub: {
    subject1: userSubject1,
    subject2: userSubject2,
    subject3: userSubject3,
    subject4: userSubject4,
    subject5: userSubject5,
  },
};

const marksArray = Object.values(student.sub); // Object ke values ko array mein convert karein
let obtainedMarks = marksArray.reduce((total, mark) => total + mark, 0); // Array ke values ka sum nikale

let totalMarks = Object.keys(student.sub).length * 100;
const percentage = (obtainedMarks / totalMarks) * 100;

let key = Object.keys(student.sub);

function calculateGrade(percentage) {
  switch (true) {
    case percentage >= 90:
      return "A+";
    case percentage >= 80:
      return "A";
    case percentage >= 70:
      return "B";
    case percentage >= 60:
      return "C";
    case percentage >= 50:
      return "D";
    case percentage >= 35:
      return "E";
    default:
      return "F";
  }
}

const printMarkSheet = () => {
  document.write("---------------------------------------------------------------");
  document.write("<br>");
  document.write(`       ${instituteName} `);
  document.write("<br>");
  document.write("---------------------------------------------------------------");
  document.write("<br>");
  document.write(`   Name - ${student.name}&nbsp;&nbsp; Class - ${student.classs}&nbsp;&nbsp; Year - ${student.year}`);
  document.write("<br>");
  document.write("---------------------------------------------------------------");
  document.write("<br>");
  document.write(`Subject  &nbsp; Total &nbsp; Passing   &nbsp;   Marks`);
  document.write("<br>");
  document.write("---------------------------------------------------------------");
  document.write("<br>");

  // const entries = Object.entries(student.sub);

  // entries.forEach(([key, value]) => {
  //   document.write(`  ${key}                     ${value}`);
  // });

  for (const subject in student.sub) {
    const mark = student.sub[subject];
    document.write(`   ${subject} &nbsp;&nbsp; 100  &nbsp;&nbsp; 35 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${mark}`);
    document.write("<br>");
  }
  document.write("---------------------------------------------------------------");
  document.write("<br>");
  document.write(`Sum - ${obtainedMarks}`);
  document.write("<br>");
  document.write("---------------------------------------------------------------");
  document.write("<br>");
  const grade = calculateGrade(percentage);
  document.write(`     Percentage - ${percentage}%         Grade - ${grade}`);
  document.write("<br>");
  document.write("---------------------------------------------------------------");
  document.write("<br>");
};
printMarkSheet();


// const printMarkSheet = () => {
//     console.log("---------------------------------------------------------------");
//     console.log(`       ${instituteName} `);
//     console.log("---------------------------------------------------------------");
//     console.log(`   Name - ${student.name}       Class - ${student.classs}       Year - ${student.year}`);
//     console.log("---------------------------------------------------------------");
//     console.log(`   Subject         Total         Passing      Marks`)
//     console.log("---------------------------------------------------------------");

//   // const entries = Object.entries(student.sub);

//   // entries.forEach(([key, value]) => {
//   //   console.log(`  ${key}                     ${value}`);
//   // });

//   for (const subject in student.sub) {
//     const mark = student.sub[subject];
//     console.log(`   ${subject}         100             35         ${mark}`);
//   }
//   console.log("---------------------------------------------------------------");
//   console.log(`                                        Sum - ${obtainedMarks}`);
//   console.log("---------------------------------------------------------------");
//   const grade = calculateGrade(percentage);

//   console.log(`     Percentage - ${percentage}%         Grade - ${grade}`);
//   console.log("---------------------------------------------------------------");

// };
// printMarkSheet();