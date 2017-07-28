import os

def clean(word):
	ret = ""
	chars = "\".,?!"
	for ch in word:
		if (ch not in chars):
			ret += ch
	if (ret.startswith('\'') and ret.endswith('\'')):
		ret = ret[1:len(ret)-1]
	if (ret == "\'\'"):
		ret = ""
	return ret

def createDict(indexDict, files):
	for f in files:
		with open(f, 'r') as textFile:
			lineCount = 0;
			for line in textFile:
				wordCount = 0
				for word in line.split():
					word = clean(word)
					if (len(word) > 0):
						if (word in indexDict):
							indexDict[word].append([wordCount, lineCount])
						else:
							indexDict[word] = [[wordCount, lineCount]]
					wordCount += 1
				lineCount += 1


indexDict = {}
files = ['text.txt']
createDict(indexDict, files)
print indexDict