// Item 1 - variable "submission" initialized to an array of objects
let submissions = [
    {name: 'Jane', score: 90, date: "2020-01-24", passed: true},
    {name: 'Joe', score: 91, date: "2018-05-14", passed: true},
    {name: 'Jack', score: 89, date: "2019-07-05", passed: false},
    {name: 'Jill', score: 88, date: "2020-04-01", passed: true}
]
console.log(submissions);



// Item 2 - addSubmission with function to determine pass/fail based on score
function addSubmission (array, newName, newScore, newDate) {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
    }
    newSubmission.score >= 60 ? newSubmission.passed = true : newSubmission.passed = false;
    array.push(newSubmission);
    console.log(array);
}
addSubmission (submissions, "Mark", 59, "2020-02-28");



// Item 3 - deleteSubmissionByIndex
function deleteSubmissionByIndex (array, index) {
    array.splice(index, 2);
    console.log(array);
}
deleteSubmissionByIndex(submissions, 0);



// Item 4 - deleteSubmissionByName
function deleteSubmissionByName (array, name) {
    let nameIndex = (element) => element.name === name;
    array.splice(array.findIndex(nameIndex), 1);
    console.log(submissions);
}
deleteSubmissionByName(submissions, "Jack");



// Item 5 - editSubmission
function editSubmission (array, index, score) {
    array[index].score = score;
    score >= 60 ? array[index].passed = true : array[index].passed = false;
    console.log(array);
}
editSubmission (submissions, 0, 85);



// Item 6 - findSubmissionByName
function findSubmissionByName (array, name) {
    const foundName = array.find(element => element.name === name);
    console.log(foundName);
}
findSubmissionByName (submissions, 'Joe');



// Item 7 - findLowestScore
function findLowestScore (array) {
    let lowestScore = array.reduce((score1, score2) => {
        return score1.score <= score2.score ? score1 : score2;
    });
    console.log(lowestScore);    
}
findLowestScore(submissions);



// Item 8 - findAverageScore
function findAverageScore (array) {
    let average = 0;
    for (let i = 0; i < array.length; i++){
        let currentNum = array[i].score;
        average += currentNum;
    }
    average = average / array.length;
    console.log(average);
}
findAverageScore (submissions);



// Item 9 - filterPassing
function filterPassing (array) {
    let passed = array.filter(a => a.passed === true);
    console.log(passed);
    return;
}
filterPassing (submissions);



// Item 10 - filter90AndAbove
function filter90AndAbove (array) {
    let highScore = array.filter(a => a.score >= 90);
    console.log(highScore);
}
filter90AndAbove (submissions);