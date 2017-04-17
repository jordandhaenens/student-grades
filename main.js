var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var aGrades = [];
var bGrades = [];
var cGrades = [];
var dGrades = [];
var fGrades = [];
var lowestGrade;
var highestGrade;

for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91) {
		aGrades.push(scores[i]);
	} else if (scores[i] > 80 && scores[i] <= 90) {
		bGrades.push(scores[i]);
	} else if (scores[i] > 70 && scores[i] <= 80) {
		cGrades.push(scores[i]);
	} else if (scores[i] > 60 && scores[i] <= 70) {
		dGrades.push(scores[i]);
	} else if (scores[i] <= 60) {
		fGrades.push(scores[i]);
	}
}

scores.sort(function(a, b) {return b-a});
lowestGrade = scores[scores.length - 1];
highestGrade = scores[0];

var numOfA = aGrades.length;
var numOfB = bGrades.length;
var numOfC = cGrades.length;
var numOfD = dGrades.length;
var numOfF = fGrades.length;

console.log("Number of A's: ", numOfA);
console.log("Number of Bs: ", numOfB);
console.log("Number of C's: ", numOfC);
console.log("Number of D's: ", numOfD);
console.log("Number of F's: ", numOfF);
console.log("Highest grade is: ", highestGrade);
console.log("Lowest grade is: ", lowestGrade);



