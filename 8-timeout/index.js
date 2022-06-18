// Gọi function sau khoảng thời gian

function doTask(path) {
	console.log('Done job');
}

let timeoutId = setTimeout(doTask, 1000);

clearTimeout(timeoutId);
