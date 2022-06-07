var readlineSync = require('readline-sync');
var fs = require('fs');
var Student = require('./student');

var listGenders = ['Male', 'Female'];
var listOptions = ['View students', 'Add student', 'Save & Exit'];

var listStudentsJson = fs.readFileSync('./list_student.json');
var listStudents = JSON.parse(listStudentsJson).listStudents;

function showOption() {
	var option = readlineSync.keyInSelect(listOptions, 'Choose your action you wan\'t? ');

	switch (option) {
		case 0:
		viewListStudents();
		break;
		case 1:
		var studentName = readlineSync.question('Enter student\'s name ');
		var studentGender = readlineSync.keyInSelect(listGenders, 'Choose student\'s gender ');
		var newStudent = new Student(studentName, listGenders[studentGender]);
		addStudent(newStudent);
		break;
		case 2:
		listStudentsJson = JSON.stringify({listStudents: listStudents});
		fs.writeFileSync('./list_student.json', listStudentsJson);
		break;
	};
};

showOption();

function viewListStudents() {
	console.log(listStudents);
	showOption();
}

function addStudent(student) {
	listStudents.push(student);
	console.log('Added successfully');
	showOption()
}