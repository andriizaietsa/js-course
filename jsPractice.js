const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    //sorting
    const sorting = arr.sort();

    //split out to three teams
    let teamArr = [];
    let temp = [];
    for (let i = 0; i < 9; i += 3) {
        temp = sorting.slice(i, i + 3);
        teamArr.push(temp);
    }
    //get extra students 
    let getExtraStudents = sorting.slice(9, arr.length);
    let amountExtraStudents = getExtraStudents.toString();
    console.log(amountExtraStudents);
    teamArr.push('Оставшиеся студенты: ' + amountExtraStudents);
    console.log(teamArr);
}

sortStudentsByGroups(students);