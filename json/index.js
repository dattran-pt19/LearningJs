var readlineSync = require('readline-sync');
var fs = require('fs');
var Student = require('./student');

var listGenders = ['Male', 'Female'];
var listOptions = ['View students', 'Add student'];

function showOption() {
	var option = readlineSync.keyInSelect(listOptions, 'Choose your action you wan\'t? ');

switch (option) {
	case 0:
	var listStudentsJson = fs.readFileSync('./list_student.json');
	var listStudents = JSON.parse(listStudentsJson).listStudents;
	console.log(listStudents);
	break;
	case 1:
	var listStudentsJson = fs.readFileSync('./list_student.json');
	var listStudents = JSON.parse(listStudentsJson).listStudents;

	var studentName = readlineSync.question('Enter student\'s name ');
	var studentGender = readlineSync.keyInSelect(listGenders, 'Choose student\'s gender ');
	var newStudent = new Student(studentName, listGenders[studentGender]);
	listStudents.push(newStudent);
	listStudentsJson = JSON.stringify({listStudents: listStudents});
	fs.writeFileSync('./list_student.json', listStudentsJson);
	console.log('Added successfully');
	showOption();
	break;
	default:
	console.log('Quit');
};
};

showOption();
