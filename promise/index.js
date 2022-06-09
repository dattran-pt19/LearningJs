// var promiseFs = require('promise-fs');

var fs = require('fs');

function readFifePromise(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, { encoding: 'utf8' }, function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	})
}

readFifePromise('song1.txt')
.then(function(data) {
	console.log(data);
})
.catch(function(err) {
	console.log(err);
});

Promise.all([
	readFifePromise('song1.txt'),
	readFifePromise('song2.txt')
]).then(function(values) {
	console.log(values);
}).catch(function(err) {
	console.log(err);
});