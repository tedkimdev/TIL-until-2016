/* Arrow Function */

// ES5
var multiply = function(x, y) {
	return x * y;
};

//ES6
var multiply = (x, y) => { return x*y };

var multiply = (x, y) => x*y;

//ES5 return Object
var setNameIdsEs5 = function(id, name) {
	return {
		id: id,
		name: name
	}
}

//ES6 return Object
var setNameIdsEs6 = (id, name) => ({ id: id, name: name});

//ES5 only one parameter
var phraseSplitterEs5 = function phraseSplitter(phrase) {
	return phrase.split(' ');
};
//ES6 only one parameter
phraseSplitterES6 = phrase => phrase.split(' ');

