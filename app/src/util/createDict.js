// currently comes in in a string

export const createDict = (data, dict, name) => {
	if (!dict) {
		dict = {};
	}
	let lineCount = 0;
	data.split('\n').forEach(function(line) {
		line.split(' ').forEach(function(word) {
			word = clean(word);
			if (word) {
				if (word in dict) {
					if (name in dict[word]) {
						dict[word][name].push(lineCount)
					} else {
						dict[word][name] = [lineCount];
					}
				} else {
					dict[word] = {};
					dict[word][name] = [lineCount];
				}
			}
		});
		lineCount++;
	});
	return dict;
}

export const clean = (word) => {
	var str = '';
	const chars = "\".,?!'_/!\n“‘";
	for (let i = 0; i < word.length; i++) {
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
};
