import * as fs from 'fs';

let lines;

async fs.readFile('puzzle-input.txt', (err, text) => {
	if (err) throw err;
	const data = text.toString('utf8');
	console.log(data);
	lines = data.split('\n');
});

const isCharNumber = (c) => c >= '0' && c <= '9';

const res = lines.reduce((acc, line) => {
	let lc = -1;
	let rc = -1;
	let li = 0;
	let ri = line.length - 1;
	while (li <= ri && (lc === -1 || rc === -1)) {
		if (lc === -1 && isCharNumber(line[li])) {
			lc = line[li];
		} else {
			li++;
		}
		if (rc === -1 && isCharNumber(line[ri])) {
			rc = line[ri];
		} else {
			ri--;
		}
	}
	const tmp = lc + rc;
	return (acc += parseInt(tmp));
}, 0);

console.log('res', res);
