// Database design

var classes = [
	{
		id: 0, // identifier
		name: '1C',
		teacher: 0
	},
	{
		id: 1,
		name: '2C',
		teacher: 1
	},
	{
		id: 2,
		name: '3A',
		teacher: 1
	},
	{
		id: 3,
		name: '4A',
		teacher: 2
	},
	{
		id: 4,
		name: '5A',
		teacher: 2
	}

];

var listTeachers = [
	{
		id: 0,
		name: 'Liem',
		gender: 1
	},
	{
		id: 1,
		name: 'Uyen',
		gender: 1
	},
	{
		id: 2,
		name: 'Huong',
		gender: 1
	}
];

var listStudents = [
	{
		id: 0,
		name: 'Dat',
		height: 183,
		class: 0
	},
	{
		id: 1,
		name: 'Le',
		height: 150,
		class: 0
	},
	{
		id: 2,
		name: 'Son',
		height: 178,
		class: 1
	},
	{
		id: 3,
		name: 'Thien',
		height: 174,
		class: 1
	}
];

function getListStudentsInClass(className) {
	var findClass = classes.find(function(x) {
		return x.name === className;
	});
	var studentsInClass = listStudents.filter(function(x) {
		return x.class === findClass.id;
	});
	console.log(studentsInClass);
	return studentsInClass;
};


getListStudentsInClass('2C');

// Design e-magagine
// Design e-commerce
// Use table design table database
























