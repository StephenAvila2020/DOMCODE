// Create a new project sub-directory in your workspace/javascript directory.
// Paste the array of student objects above into your JavaScript file.
// Copy the createStudentComponent function into your code.
// Add the following styles to your CSS


const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// You, as a software developer, would write a function that could generate HTML to represent any of those students. The way you can change the output, or logic, of a function is by using function arguments.

// It's time for you to rewrite the function to accept the information it needs to do its job. It's job is to generate an HTML representation of a student, so it must define arguments to store that input.

// You are using 3 of the 4 properties on each student object to build the HTML. You're not using score yet. Define those 3 arguments.

const createStudentComponent = (name, subject, info, score) => {
    return `
        <div class="student" >
            <h1 class="xx-large">${name}</h1>
            <section class="bordered","dashed", "section--padded">${subject}</section>
            <aside class ="pushRight">${info}</aside>
            <section>${score}</section>
        </div>
    `
}
const studentContainer = document.querySelector("#container")


for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        student.score
    )
}

const studentDivs = document.querySelectorAll(".student")
for (let i = 0; i < studentDivs.length; i++) {
    let studentComponent = "#container"
    console.log("this is student div", studentDivs[i])
    if (students[i].score >= 60) {
        studentDivs[i].classList.add("passing")
    } else {
        studentDivs[i].classList.add("failing")
    } 
    console.log(studentComponent);
    

}

// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

// Then refactor your string interpolation code to use the object properties.

// function printStudentObjectsToDOM(studentsObject) {
//     console.log(studentsObject)
//     return `
// <article>
//     <h3>${studentsObject.name}</h3>
//     <p>${studentsObject.subject}</p>
//     <p>${studentsObject.info}</p>
//     <p>${studentsObject.score}</p>
//     <p>Languages: HTML, CSS, JavaScript</p>
// </article>`
// }

// for (let i = 0; i < students.length; i++){
//     let htmlString = printStudentObjectsToDOM
//        (students[i]);
//     console.log(htmlString)
//     document.querySelector(".student-container").innerHTML += htmlString;
// }

