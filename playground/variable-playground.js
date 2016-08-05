var person = {
	name: 'Simon',
	age: 29
};

function updatePerson (obj){
	/*obj = {
		name: 'Andrew',
		age: 33 
	};*/
	obj.age = 33;
}

updatePerson(person);
console.log(person);

//Array Example
var grades = [15, 88];

function addGrades (gradesArr) {
	grades.push(55);
	debugger;
	//gradesArr = [12, 33, 99]	
	
}

addGrades(grades);
console.log(grades);