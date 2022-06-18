// Lặp đi lặp lại function sau khoảng thời gian
// setInterval

// var i = 0;
// var intervalId = setInterval(function() {
// 	i+= 1;
// 	console.log(i);
// 	if (i == 5) {
// 		clearInterval(intervalId);
// 	}
// }, 500);

function countFrom(a, b) {
	return new Promise(function(resolve, reject) {
		var intervalId = setInterval(function() {
			console.log(a);
			a+= 1;
			if (a > b) {
				clearInterval(intervalId);
				resolve();
			}
		}, 500);
	});
}

countFrom(1, 10).then(function() {
	console.log('Done');
});