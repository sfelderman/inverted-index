// currently comes in in a string

export const createDict = (data, dict) => {
	if (!dict) {
		dict = {};
	}
	let lineCount = 0;
	data.split('\n').forEach(function(line) {
		line.split(' ').forEach(function(word) {
			word = clean(word);
			if (word) {
				if (word in dict) {
					dict[word].push([lineCount])
				} else {
					dict[word] = [[lineCount]]
				}
			}
		});
		lineCount++;
	});
	return dict;
}

export const clean = (word) => {
	var str = ""
	const chars = "\".,?!'_/!\n“‘";
	for (var i = 0; i < word.length; i++) {
		const ch = word.charAt(i);
		if (!chars.includes(ch)) {
			str += ch;
		}
	}
	if (str.startsWith('\'') && str.endsWith('\'')) {
		str = str.substring(1, str.length - 1);
	}
	if (str === "'") {
		str = "";
	}

	return str.toLowerCase();
}

// var dict = {};

// const file = '/Users/sean/InvertedIndex/text.txt';

// fs.readFile(file, 'utf8', function (err,data) {
// 	if (err) {
// 	return console.log(err);
// 	}
// 	createDict(data);
// });



// function cleanWithRegex(word) {
// 	const match = word.match(/^(?:(?:\W)+)?((\w+)(\'\w+)?)(?:(?:\W)+)?$/);
// 	if (match) {
// 		return match[1];
// 	} else {
// 		return null;
// 	}
// }


