//1st
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length > 1) {
        return "Семья состоит из: " + arr.join(" ");
    }
    else{
        return 'Семья пуста';
    }

}
showFamily(family);

//2nd
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(item, i, arr){
        return `${item.toLowerCase()}`
    })
}
standardizeStrings(favoriteCities)


















// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(){
//         let age = personalPlanPeter.age;
//         let result = "";
//         for(let key in personalPlanPeter.skills.languages){
//             result += personalPlanPeter.skills.languages[key] + " ";
//         }
//         let upperCaseResult = result.toLocaleUpperCase();
//         return `Мне ${age} и я владею языками: ${upperCaseResult}`
//     }
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// function showProgrammingLangs(plan) {
//     const arrObjects = Object.keys(plan.skills.programmingLangs)
//     const number = arrObjects.length;
//     if (number <= 0) {
//         //return ""
//         console.log("")
//     }
//     else {
//         for (let key in plan.skills.programmingLangs) {
//             let lang = key
//             let percent = personalPlanPeter.skills.programmingLangs[key];
//             //return `Язык ${lang} изучен на ${percent}`
//             console.log(`Язык ${lang} изучен на ${percent}`);
//         }
//     }

// }
// showProgrammingLangs(personalPlanPeter)