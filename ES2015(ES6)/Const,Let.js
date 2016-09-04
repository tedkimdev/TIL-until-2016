/* const, let, var */

//var scope : nearest function block
//let scope : nearest enclosing block
function func() {
	for(var i=0; i<2; i++){
		/* */
		console.log(i); //0, 1
	}
	console.log(i);	// 2
}

function func() {
	for(let i=0; i<2; i++){
		console.log(i);	// 0, 1
	}
	console.log(i); // undefined
}

//const&let have same block scope
//const won't be reassigned
const co = {a: 'A', c: 'C'};
co.a = 'A 2';	//update property
co.b = 'B';		//add
delete co.c;	//delete

try {
	co = {a: 'Aney'}
}catch(err){
	console.error('	error because using \'co = ...\' :', err);
}
console.log(' const co = ', co);