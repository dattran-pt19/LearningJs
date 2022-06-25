var listNewspapers = [
	{
		id: 0,
		name: 'Thoi quen song khoe manh',
		image: 'https://abc',
		topic: [0, 2],
		content: 'Noi dung thoi quen song khoe manh',
		date: '18/03/2022',
		author: 0,
		listComments: [
			{
				id: 0,
				title: 'Comment 1',
				content: 'Blah blah',
				vote: 23
			}
		]
	},
	{
		id: 1,
		name: 'Top 5 mon an tot cho tim mach',
		image: 'https://abc',
		topic: [0, 1],
		content: 'Noi dung mon an tot cho tim mach',
		date: '12/01/2022',
		author: 1,
		listComments: []
	},
	{
		id: 2,
		name: 'Cuoc song sau hon nhan',
		image: 'https://abc',
		topic: [2],
		content: 'Cuoc song cua gioi tre sau hon nhan',
		date: '24/12/2021',
		author: 2,
		listComments: []
	},
	{
		id: 3,
		name: 'Ky nang nau nuong trong gia dinh',
		image: 'https://abc',
		topic: [0, 1, 2],
		content: 'Nau nuong vua tot cho suc khoe, vua tot cho quan he gia dinh',
		date: '28/09/2021',
		author: 1,
		listComments: []
	}
]

var listTopic = [
	{
		id: 0,
		name: 'Suc khoe',
		listNewspapers: [0, 1, 3]
	},
	{
		id: 1,
		name: 'Am thuc',
		listNewspapers: [1, 3]
	},
	{
		id: 2,
		name: 'Doi song',
		listNewspapers: [0, 2, 3]
	}
]

var listAuthors = [
	{
		id: 0,
		image: 'https://author',
		name: {
			firstName: 'Tran',
			lastName: 'Dat'
		},
		gender: 0,
		listNewspapers: [0]
	},
	{
		id: 1,
		image: 'https://author',
		name: {
			firstName: 'Nguyen',
			lastName: 'Nhat Le'
		},
		gender: 1,
		listNewspapers: [1, 3]
	},
	{
		id: 2,
		image: 'https://author',
		name: {
			firstName: 'Le',
			lastName: 'Thanh Son'
		},
		gender: 0,
		listNewspapers: [2]
	}
]

function getNewspaper(id) {
	let newspaper = listNewspapers.find(function(e) {
		return e.id === id;
	});
	let newspaperObject = {
		...newspaper
	};
	newspaperObject.topic = listTopic.filter(function(e) {
		return newspaper.topic.includes(e.id);
	});
	newspaperObject.author = listAuthors.find(function(e) {
		return e.id === newspaper.author;
	});
	console.log(newspaperObject);
};

getNewspaper(0);







