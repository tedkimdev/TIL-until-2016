/* default parameter, Object.assign() */

function reducer(state = {a: 'default A', b: 'default B', c: 'default C'}){
	//Object.assign(target, ...sources) => return target

	var nextState = Object.assign({}, // target === {} empty object
		state,					//target = {a: 'default A', b: 'default B', c: 'default C'}
		{a: 'A 2', b: 'B 2'},	//target = {a: 'A 2', 		b: 'B 2', 		c: 'default C'}
		{b: 'B 3'});			//target = {a: 'A 2',		b: 'B 3',		c: 'default C'}
								//nextState = target
	console.log('state = ', state);
	console.log('nextState = ', nextState);

	return nextState;
}


function reducer(state = {a: 'default A', b: 'default B', c: 'default C'}){
	//Object.assign(target, ...sources) => return target

	var nextState = Object.assign(//{}, // target === state
		state,					//target = {a: 'default A', b: 'default B', c: 'default C'}
		{a: 'A 2', b: 'B 2'},	//target = {a: 'A 2', 		b: 'B 2', 		c: 'default C'}
		{b: 'B 3'});			//target = {a: 'A 2',		b: 'B 3',		c: 'default C'}
								//nextState = state
	console.log('state = ', state);
	console.log('nextState = ', nextState);

	return nextState;
}

