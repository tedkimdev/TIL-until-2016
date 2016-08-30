/* Function */

const object = {
	name: 'Aney',
	friends: ['One', 'Two', 'Three'],
	alertFriends() {
		this.friends.forEach((value)=>{
			alert(this.name + ' and ' + value);
		});
	}
};

object.alertFriends();

// forEach(()=>{})		== 		forEach.bind(this)




//Previous
var long = function(x) {
	return x + 1
};

//ES6
const short = (x) => x + 1;


//ES6 - default
var func = (msg = 'Hi') => {
  alert(msg);
};
func(); // 






//Previous
var func3 = function(x) {
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args.length);
};
func3(1, 2, 3, 4); // 3

//ES6 - rest ... babel로 변환 필요
const func4 = (x, ...y) {
  console.log(y.length);
};
func4(1, 2, 3, 4) // 3
//y 배열 2,3,4





var array = [1, 2, 3];
var newFunction = (x, y, z) => {
	alert(x + y + z);
};
newFunction(array[0], array[1], array[2]); // 6

newFunction.apply(null, array); // 6

//ES6 - spread
newFunction(...array);