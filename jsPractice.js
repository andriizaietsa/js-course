const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const sorting = arr.sort();

    let teamArr = [];
    let temp = [];
    for (let i = 0; i < 9; i += 3) {
        temp = sorting.slice(i, i + 3);
        teamArr.push(temp);
    }

    let getExtraStudents = sorting.slice(9, arr.length);
    let listOfExtraStudents = getExtraStudents.join(', ');
    let amountOfExtraStudents = arr.length - 9
    if(amountOfExtraStudents > 0){
        teamArr.push('Оставшиеся студенты: ' + listOfExtraStudents);
    }
    else{
        teamArr.push('Оставшиеся студенты: -');
    }
    return teamArr;
}

sortStudentsByGroups(students);