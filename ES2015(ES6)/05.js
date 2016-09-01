for (var i in 'string') { alert(i); } // 0, 1, 2, 3, 4, 5
for (var i of 'string') { alert(i); } // s, t, r, i, n, g
let array = [3, 5, 7];
array.foo = 'bar';
for (let j in array) { alert(j); } // 0, 1, 2, foo
for (let j of array) { alert(j); } // 3, 5, 7

// for .. in -> key
// for .. of -> value

for (var l of document.getElementsByTagName('div') { console.log(l); }
