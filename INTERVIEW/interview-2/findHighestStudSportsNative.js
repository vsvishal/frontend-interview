// wihtout using any inbuild method
const students = [
  {
    studentName: "student1",
    subject: [
      {
        name: "maths",
        marks: "80",
      },

      {
        name: "english",
        marks: "77",
      },
      {
        name: "hindi",
        marks: "70",
      },
      {
        name: "sports",
        marks: "90",
      },
    ],
  },

  {
    studentName: "student2",
    subject: [
      {
        name: "maths",
        marks: "77",
      },

      {
        name: "english",
        marks: "77",
      },
      {
        name: "hindi",
        marks: "36",
      },
      {
        name: "sports",
        marks: "95",
      },
    ],
  },
];

function getStudentWithHighestSportMark(students) {
  let maxMark = 0;
  let studentName = "";
  let studentDetails = {};
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let subjects = student.subject;

    for (let subject of subjects) {
      if (subject.name === "sports" && subject.marks > maxMark) {
        maxMark = subject.marks;
        studentName = student.studentName;
        studentDetails = {
          name: studentName,
          subjectName: subject.name,
          marks: maxMark,
        };
      }
    }
  }
  return studentDetails;
}

const result = getStudentWithHighestSportMark(students);
console.log(result.name);
