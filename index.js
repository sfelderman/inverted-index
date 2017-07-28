function createDict(data) {
	let lineCount = 0;
	data.split('\n').forEach(function(line) {
		line.split(' ').forEach(function(word) {
			word = clean(word);
			if (word)
			if (word in indexDict) {
				indexDict[word].push([lineCount])
			} else {
				indexDict[word] = [[lineCount]]
			}
		});
		lineCount++;
	});
}

function clean(word) {
	console.log('before: ', word)
	var str = ""
	const chars = "\".,?!\'_/!\n";
	for (var i = 0; i < word.length; i++) {
		const ch = word.charAt(i);
		if (!chars.includes(ch)) {
			str += ch;
		}
	}
	if (str.startsWith('\'') && str.endsWith('\'')) {
		str = str.substring(1, str.length - 1);
	}
	if (str == "\'") {
		str = "";
	}
	console.log('after: ', str)

	return str.toLowerCase();
}

var indexDict = {};

const file = '/Users/sean/InvertedIndex/text.txt';

fs.readFile(file, 'utf8', function (err,data) {
	if (err) {
	return console.log(err);
	}
	createDict(data);
});



// function cleanWithRegex(word) {
// 	const match = word.match(/^(?:(?:\W)+)?((\w+)(\'\w+)?)(?:(?:\W)+)?$/);
// 	if (match) {
// 		return match[1];
// 	} else {
// 		return null;
// 	}
// }


